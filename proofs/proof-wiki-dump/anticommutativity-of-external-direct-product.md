theorem DirectProduct_Anticommutativity() {
  setStruct(S, ∘₁)
  setStruct(T, ∘₂)
  setStruct(S×T, ∘)
  assert(
    (|S| ≥ 2 ∧ |T| ≥ 2) →
    (isAnticommutative(S×T, ∘) ↔ (isAnticommutative(S, ∘₁) ∨ isAnticommutative(T, ∘₂)))
  )
}

proof DirectProduct_Anticommutativity() {
  // Sufficient Condition
  lemma Sufficient() {
    assume(¬(isAnticommutative(S, ∘₁) ∨ isAnticommutative(T, ∘₂))) →
    ∃a,b∈S: (a≠b ∧ a∘₁b = b∘₁a) →
    ∃c,d∈T: (c≠d ∧ c∘₂d = d∘₂c) →
    assert(⟨a,c⟩∘⟨b,d⟩ = ⟨a∘₁b, c∘₂d⟩) →
    assert(⟨b,d⟩∘⟨a,c⟩ = ⟨b∘₁a, d∘₂c⟩) →
    assert(⟨a,c⟩∘⟨b,d⟩ = ⟨b,d⟩∘⟨a,c⟩) →
    contradiction(isAnticommutative(S×T, ∘))
  }

  // Necessary Condition
  lemma Necessary() {
    assume(¬isAnticommutative(S×T, ∘)) →
    ∃a,b,c,d: (⟨a,b⟩∘⟨c,d⟩ = ⟨c,d⟩∘⟨a,b⟩) →
    assert(⟨a∘₁c, b∘₂d⟩ = ⟨c∘₁a, d∘₂b⟩) →
    assert(a∘₁c = c∘₁a ∧ b∘₂d = d∘₂b) →
    assert(¬isAnticommutative(S, ∘₁) ∧ ¬isAnticommutative(T, ∘₂))
  }

  apply(Sufficient()) →
  apply(Necessary()) →
  assert(isAnticommutative(S×T, ∘) ↔ (isAnticommutative(S, ∘₁) ∨ isAnticommutative(T, ∘₂)))
}
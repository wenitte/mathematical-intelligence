theorem Center_Symmetric_Group_Trivial() {
  assert(
    ∀n ∈ ℕ, n ≥ 3 ⇒ Z(Sₙ) = {e}
  )
} ↔

proof Center_Symmetric_Group_Trivial() {
  setVar(n: ℕ, n ≥ 3) →
  setVar(π ∈ Sₙ, π ≠ e) →
  
  lemma Exists_NonFixed_Element() {
    assert(∃i,j ∈ {1,2,...,n}: π(i) = j ∧ j ≠ i)
  } →
  
  apply(Exists_NonFixed_Element()) →
  setVar(m: π(j)) →
  assert(m ≠ j) →
  
  lemma Exists_Third_Element() {
    assert(n ≥ 3 ⇒ ∃k ∈ ℕ: k ≠ j ∧ k ≠ m)
  } →
  
  apply(Exists_Third_Element()) →
  setVar(ρ ∈ Sₙ: ρ(j) = k ∧ ρ(k) = j ∧ ∀x ∉ {j,k}: ρ(x) = x) →
  
  assert(ρ(π(j)) = m) →
  assert(π(ρ(j)) = π(k)) →
  assert(π(j) ≠ π(k)) →
  assert((ρ∘π)(j) ≠ (π∘ρ)(j)) →
  
  lemma Non_Commuting() {
    assert(∃ρ ∈ Sₙ: ρ∘π ≠ π∘ρ)
  } →
  
  apply(Non_Commuting()) →
  assert(π ∉ Z(Sₙ)) →
  assert(∀π ∈ Sₙ, π ≠ e ⇒ π ∉ Z(Sₙ)) →
  assert(Z(Sₙ) = {e})
}
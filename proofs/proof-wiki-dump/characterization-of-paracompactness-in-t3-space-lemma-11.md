theorem CharacterizationParacompactness_Lemma11() {
  assert(
    ∀X: Set, ∀𝔸: Set(Set(X)), ∀𝕍: Set(Set(X)) ⇒
    let V* = X \ ⋃{A ∈ 𝔸 | A ∩ V = ∅} where V ∈ 𝕍,
    let 𝕍* = {V* | V ∈ 𝕍} ⇒
    ∀A ∈ 𝔸, ∀V* ∈ 𝕍* : (A ∩ V* ≠ ∅ → A ∩ V ≠ ∅)
  )
}

proof CharacterizationParacompactness_Lemma11() {
  setVar(X: Set) →
  setVar(𝔸: Set(Set(X))) →
  setVar(𝕍: Set(Set(X))) →
  
  lemma Contrapositive() {
    assert(∀A ∈ 𝔸, ∀V* ∈ 𝕍* : (A ∩ V = ∅ → A ∩ V* = ∅))
  } →
  
  assert(
    let B ∈ 𝔸, V* ∈ 𝕍* where B ∩ V = ∅ →
    B ∈ {A ∈ 𝔸 | A ∩ V = ∅}
  ) →
  
  apply(SetIsSubsetOfUnion) →
  assert(B ⊆ ⋃{A ∈ 𝔸 | A ∩ V = ∅}) →
  
  assert(V* = X \ ⋃{A ∈ 𝔸 | A ∩ V = ∅}) →
  
  apply(SetDifferenceWithSubset) →
  assert(V* ⊆ X \ B) →
  
  apply(SubsetOfSetDifferenceIffDisjoint) →
  assert(V* ∩ B = ∅) →
  
  assert(∀A ∈ 𝔸, ∀V* ∈ 𝕍* : (A ∩ V = ∅ → A ∩ V* = ∅)) →
  
  apply(RuleOfTransposition) →
  assert(∀A ∈ 𝔸, ∀V* ∈ 𝕍* : (A ∩ V* ≠ ∅ → A ∩ V ≠ ∅))
}
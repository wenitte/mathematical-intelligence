theorem CartesianProduct_Empty() {
  assert(
    ∀S,T: Set ⇒ (S × T = ∅ ↔ (S = ∅ ∨ T = ∅))
  )
} ↔

proof CartesianProduct_Empty() {
  setVar(S: Set, T: Set) →
  
  lemma Main_Equivalence() {
    assert(S × T ≠ ∅) ↔
    assert(∃⟨s,t⟩ ∈ S × T) →
    assert(∃s ∈ S ∧ ∃t ∈ T) →
    assert(S ≠ ∅ ∧ T ≠ ∅) →
    assert(¬(S = ∅ ∨ T = ∅))
  } →

  apply(Main_Equivalence()) →
  apply(LogicalEquivalence(P ↔ ¬Q, ¬P ↔ Q)) →
  assert(S × T = ∅ ↔ (S = ∅ ∨ T = ∅))
}

corollary CartesianProduct_Empty_Special() {
  assert(
    ∀S: Set ⇒ (S × ∅ = ∅ ∧ ∅ × S = ∅)
  )
}

theorem CartesianProduct_Empty_Family() {
  assert(
    ∀I: Set, ∀{Sᵢ}ᵢ∈I: Family[Set] ⇒
    (∏ᵢ∈I Sᵢ = ∅ ↔ ∃i ∈ I: Sᵢ = ∅)
  )
}
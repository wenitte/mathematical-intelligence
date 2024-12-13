theorem Antisymmetric_Preordering_Is_Ordering() {
  assert(
    ∀S: Set ∧ ∀R ⊆ (S × S) ∧
    isPreordering(R, S) ∧ isAntisymmetric(R, S) →
    isOrdering(R, S)
  )
}

proof Antisymmetric_Preordering_Is_Ordering() {
  setVar(S: Set) →
  setVar(R ⊆ (S × S)) →
  
  lemma PreorderingDefinition() {
    assert(
      isPreordering(R, S) ↔
      (isReflexive(R, S) ∧ isTransitive(R, S))
    )
  } →
  
  apply(PreorderingDefinition()) →
  assert(isReflexive(R, S)) →
  assert(isTransitive(R, S)) →
  assert(isAntisymmetric(R, S)) →
  
  lemma OrderingDefinition() {
    assert(
      isOrdering(R, S) ↔
      (isReflexive(R, S) ∧ isTransitive(R, S) ∧ isAntisymmetric(R, S))
    )
  } →
  
  apply(OrderingDefinition()) →
  assert(isOrdering(R, S))
}
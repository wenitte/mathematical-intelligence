theorem CardinalitiesFormInequalityImpliesDifferenceNonempty() {
  assert(
    ∀X,Y ∈ Sets ⇒
    (|X| < |Y|) → (Y∖X ≠ ∅)
  )
} ↔

proof CardinalitiesFormInequalityImpliesDifferenceNonempty() {
  setVar(X,Y: Sets) →
  assume(|X| < |Y|) →
  byContradiction() {
    assume(Y∖X = ∅) →
    lemma SetDifferenceWithSupersetIsEmpty() {
      assert((Y∖X = ∅) → (Y ⊆ X))
    } →
    apply(SetDifferenceWithSupersetIsEmpty()) →
    assert(Y ⊆ X) →
    lemma SubsetImpliesCardinalInequality() {
      assert((Y ⊆ X) → (|Y| ≤ |X|))
    } →
    apply(SubsetImpliesCardinalInequality()) →
    assert(|Y| ≤ |X|) →
    assert(contradiction(|X| < |Y| ∧ |Y| ≤ |X|))
  } →
  conclude(Y∖X ≠ ∅)
}
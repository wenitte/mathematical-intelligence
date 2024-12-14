theorem SetEqualsUnion() {
  assert(
    ∀A: Set, ∀ℬ: SetOfSets ⇒
    (A = ⋃ℬ) ↔ (
      (∀a ∈ A ⇒ ∃B ∈ ℬ: a ∈ B) ∧
      (∀B ∈ ℬ ⇒ B ⊆ A)
    )
  )
}

proof SetEqualsUnion() {
  // Necessary Condition
  lemma NecessaryDirection() {
    assume(A = ⋃ℬ) →
    assert(∀a ∈ A ⇒ ∃B ∈ ℬ: a ∈ B) by(defUnion) →
    assert(∀B ∈ ℬ ⇒ B ⊆ ⋃ℬ) by(setSubsetUnion) →
    assert(∀B ∈ ℬ ⇒ B ⊆ A) by(substitute(A = ⋃ℬ))
  }

  // Sufficient Condition
  lemma SufficientDirection() {
    assume(
      (∀a ∈ A ⇒ ∃B ∈ ℬ: a ∈ B) ∧
      (∀B ∈ ℬ ⇒ B ⊆ A)
    ) →
    assert(∀a ∈ A ⇒ a ∈ ⋃ℬ) by(defUnion) →
    assert(A ⊆ ⋃ℬ) by(defSubset) →
    assert(⋃ℬ ⊆ A) by(unionOfSubsets) →
    assert(A = ⋃ℬ) by(defSetEquality)
  }

  apply(NecessaryDirection()) ∧
  apply(SufficientDirection()) →
  conclude()
}
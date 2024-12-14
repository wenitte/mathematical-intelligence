theorem Ordinals_Well_Ordered() {
  assert(
    let(On: Class) ∧
    isOrdinalClass(On) ∧
    let(⊆: Relation) ∧
    let(A: Class) ∧
    subsetOf(A, On) ∧
    !isEmpty(A) ⇒
    (isOrdering(⊆, On) ∧ ∃x ∈ A: isSmallestElement(x, A, ⊆))
  )
} ↔

proof Ordinals_Well_Ordered() {
  lemma Subset_Is_Ordering() {
    assert(
      ∀X: Class ⇒ isOrdering(⊆, X)
    )
  } →
  apply(Subset_Is_Ordering()) →
  assert(isOrdering(⊆, On)) →
  
  setVar(A: Class) →
  assume(subsetOf(A, On)) →
  
  lemma Ordinal_Intersection() {
    assert(
      ∀B: Class, subsetOf(B, On) ⇒
      ∃x ∈ B: isSmallestElement(x, B, ⊆)
    )
  } →
  apply(Ordinal_Intersection(), A) →
  
  conclude(
    isOrdering(⊆, On) ∧
    ∃x ∈ A: isSmallestElement(x, A, ⊆)
  )
}
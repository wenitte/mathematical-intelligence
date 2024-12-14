theorem Infinite_Cardinals_Proper_Class() {
  assert(
    NN' IsProperClass
  )
} ↔

proof Infinite_Cardinals_Proper_Class() {
  assume(¬(NN' IsProperClass)) →
  assert(NN' IsSmallClass) →
  apply(Union_Small_Classes_Is_Small()) →
  assert(NN' ∪ ω IsSmallClass) →
  assert(NN ⊆ NN' ∪ ω) by(InfiniteCardinalsDefinition) →
  apply(Axiom_Of_Subsets_Equivalents()) →
  assert(NN IsSmallClass) →
  apply(Class_Of_All_Cardinals_Is_Proper_Class()) →
  contradiction() →
  assert(¬(NN' IsSmallClass)) →
  assert(NN' IsProperClass)
}

lemma Union_Small_Classes_Is_Small() {
  assert(
    ∀A,B(
      (A IsSmallClass ∧ B IsSmallClass) →
      (A ∪ B IsSmallClass)
    )
  )
}

lemma Class_Of_All_Cardinals_Is_Proper_Class() {
  assert(¬(NN IsSmallClass))
}
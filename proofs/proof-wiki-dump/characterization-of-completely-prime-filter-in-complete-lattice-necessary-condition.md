theorem CompletelyPrimeFilter_Characterization() {
  assert(
    ∀L[CompleteLattice(L)] ∧ ∀F[F ⊆ L ∧ CompletelyPrimeFilter(F)] ⇒
    (∀A[A ⊆ L] ⇒ (⋁A ∈ F ↔ ∃a[a ∈ A ∧ a ∈ F])) ∧
    (∀A[A ⊆ L ∧ Finite(A)] ⇒ (⋀A ∈ F ↔ ∀a[a ∈ A ⇒ a ∈ F]))
  )
} ↔

proof CompletelyPrimeFilter_Characterization() {
  setVar(L: CompleteLattice) →
  setVar(F: Set[L]) →
  assume(CompletelyPrimeFilter(F)) →

  // Part 1: Supremum condition
  lemma Supremum_Condition() {
    setVar(A: Set[L]) →
    // Forward direction
    assume(⋁A ∈ F) →
    apply(CompletelyPrimeFilter_Definition()) →
    assert(A ∩ F ≠ ∅) →
    assert(∃x[x ∈ A ∧ x ∈ F]) →
    
    // Backward direction
    assume(∃x[x ∈ A ∧ x ∈ F]) →
    apply(Supremum_Properties()) →
    assert(∀y[y ∈ A ⇒ y ⪯ ⋁A]) →
    apply(Filter_Properties()) →
    assert(⋁A ∈ F)
  } →

  // Part 2: Infimum condition
  lemma Infimum_Condition() {
    setVar(A: Set[L]) →
    assume(Finite(A)) →
    
    // Forward direction
    assume(⋀A ∈ F) →
    apply(Infimum_Properties()) →
    assert(∀x[x ∈ A ⇒ ⋀A ⪯ x]) →
    apply(Filter_Properties()) →
    assert(∀x[x ∈ A ⇒ x ∈ F]) →
    
    // Backward direction
    assume(∀x[x ∈ A ⇒ x ∈ F]) →
    cases {
      case(A ≠ ∅) {
        apply(Filter_Sublattice_Property()) →
        apply(Finite_Infima_Existence()) →
        assert(⋀A ∈ F)
      }
      case(A = ∅) {
        apply(Empty_Set_Infimum()) →
        assert(⋀A = ⊤) →
        apply(Filter_Contains_Top()) →
        assert(⋀A ∈ F)
      }
    }
  } →

  apply(Supremum_Condition()) →
  apply(Infimum_Condition()) →
  assert(conclusion)
}
theorem Closure_Dense_in_Itself_T1() {
  assert(
    ∀T[TopologicalSpace ∧ T1] ∧
    ∀A ⊆ T ∧
    isDenseInItself(A) →
    isDenseInItself(closure(A))
  )
} ↔

proof Closure_Dense_in_Itself_T1() {
  setVar(T: TopologicalSpace, T1) →
  setVar(A: Set) →
  assume(isDenseInItself(A)) →
  
  lemma DenseInItselfEquiv() {
    assert(isDenseInItself(A) ↔ A ⊆ derivative(A))
  } →
  
  apply(DenseInItselfEquiv()) →
  assert(A ⊆ derivative(A)) →
  
  lemma DerivativeInT1() {
    assert(
      isT1(T) →
      derivative(derivative(A)) ⊆ derivative(A)
    )
  } →
  
  let(proof_goal: closure(A) ⊆ derivative(closure(A))) →
  
  chain(
    derivative(closure(A)) =
    derivative(A ∪ derivative(A)) →     // by Closure_Equals_Union_Derivative
    derivative(A) ∪ derivative(A) →      // by Derivative_of_Union
    derivative(A) →                      // by Union_with_Self
    A ∪ derivative(A) →                  // by Subset_Union_Superset
    closure(A)                           // by Closure_Equals_Union_Derivative
  ) →
  
  assert(closure(A) ⊆ derivative(closure(A))) →
  apply(DenseInItselfEquiv()) →
  conclude(isDenseInItself(closure(A)))
}
theorem Closure_of_Derivative_is_Derivative() {
  require(T = (S, τ): T1_TopologicalSpace)
  require(A ⊆ S)
  assert(A'⁻ = A')
  where(
    A': Derivative(A),
    A⁻: Closure(A)
  )
} ↔

proof Closure_of_Derivative_is_Derivative() {
  assert(A'⁻ = A' ∪ A'') →
    // By Closure_Equals_Union_with_Derivative

  assert(A'⁻ ⊆ A' ∪ A') →
    lemma Derivative_of_Derivative_Subset() {
      assert(A'' ⊆ A') // In T1 space
    } →
    apply(Derivative_of_Derivative_Subset()) →

  assert(A'⁻ ⊆ A') →
    lemma Set_Union_Idempotent() {
      assert(A' ∪ A' = A')
    } →
    apply(Set_Union_Idempotent()) →

  lemma Closure_Contains_Set() {
    assert(∀X. X ⊆ X⁻)
  } →
  apply(Closure_Contains_Set(), X := A') →
  assert(A' ⊆ A'⁻) →

  assert(A'⁻ = A') // By set equality definition: X = Y ↔ X ⊆ Y ∧ Y ⊆ X
}
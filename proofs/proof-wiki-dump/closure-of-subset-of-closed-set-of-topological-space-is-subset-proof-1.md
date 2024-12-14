theorem Closure_Subset_Of_Closed_Set() {
  require(
    T: TopologicalSpace(S, τ),
    F: ClosedSet(T),
    H: Set,
    H ⊆ F,
    H⁻: Closure(H, T)
  )
  assert(
    H⁻ ⊆ F
  )
} ↔

proof Closure_Subset_Of_Closed_Set() {
  assume(H ⊆ F) →
  lemma Closure_Monotonicity() {
    assert(
      ∀A,B: Set, 
      A ⊆ B → Closure(A) ⊆ Closure(B)
    )
  } →
  apply(Closure_Monotonicity(), H, F) →
  assert(H⁻ ⊆ F⁻) →
  lemma Closed_Set_Equals_Closure() {
    assert(
      ∀X: Set,
      IsClosed(X) ↔ X = Closure(X)
    )
  } →
  apply(Closed_Set_Equals_Closure(), F) →
  assert(F⁻ = F) →
  substitute(F⁻, F) →
  assert(H⁻ ⊆ F)
}
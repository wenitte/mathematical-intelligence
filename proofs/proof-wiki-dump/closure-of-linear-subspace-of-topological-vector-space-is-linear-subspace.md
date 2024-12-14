theorem Closure_Linear_Subspace() {
  let K: TopologicalField,
  let X: TopologicalVectorSpace(K),
  let Y: LinearSubspace(X) →
  assert(
    Y⁻: Closure(Y) ⇒ IsLinearSubspace(Y⁻, X)
  )
} ↔

proof Closure_Linear_Subspace() {
  assert(Y ⊆ Y⁻) →
  assert(Y⁻ ≠ ∅) →
  
  lemma OneStepVectorSubspaceTest() {
    assert(
      ∀λ ∈ K, ∀u,v ∈ Y⁻ ⇒ (u + λv ∈ Y⁻) ↔
      ∀λ ∈ K ⇒ (Y⁻ + λY⁻ ⊆ Y⁻)
    )
  } →

  setVar(λ: K) →
  
  assert(Y⁻ + λY⁻ = Y⁻ + (λY)⁻) →
  
  lemma DilationClosure() {
    assert((λY)⁻ = λY⁻)
  } →
  
  assert(Y⁻ + λY⁻ ⊆ (Y + λY)⁻) →
  
  lemma SumClosureSubset() {
    assert(
      Y: LinearSubspace(X) ⇒
      ∀u,v ∈ Y ⇒ (u + λv ∈ Y)
    )
  } →
  
  assert(Y + λY ⊆ Y) →
  
  lemma ClosureSubset() {
    assert(
      A ⊆ B ⇒ A⁻ ⊆ B⁻
    )
  } →
  
  apply(ClosureSubset()) →
  assert((Y + λY)⁻ ⊆ Y⁻) →
  assert(Y⁻ + λY⁻ ⊆ Y⁻) →
  apply(OneStepVectorSubspaceTest()) →
  assert(IsLinearSubspace(Y⁻, X))
}
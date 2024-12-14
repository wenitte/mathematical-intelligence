theorem Closure_Balanced_Set_TVS() {
  define(F ∈ {ℝ, ℂ}) ∧
  define(X: TopologicalVectorSpace over F) ∧
  define(B ⊆ X: BalancedSet) →
  assert(
    Closure(B) is BalancedSet
  )
} ↔

proof Closure_Balanced_Set_TVS() {
  setVar(λ ∈ F: |λ| ≤ 1) →
  assert(B is BalancedSet → λB ⊆ B) →
  
  lemma Closure_Subset() {
    assert(A ⊆ B → Closure(A) ⊆ Closure(B))
  } →
  
  apply(Closure_Subset()) →
  assert(Closure(λB) ⊆ Closure(B)) →
  
  lemma Dilation_Closure() {
    assert(
      ∀S ⊆ X, ∀α ∈ F →
      Closure(αS) = αClosure(S)
    )
  } →
  
  apply(Dilation_Closure()) →
  assert(Closure(λB) = λClosure(B)) →
  assert(λClosure(B) ⊆ Closure(B)) →
  
  conclude(
    ∀λ ∈ F: |λ| ≤ 1 →
    λClosure(B) ⊆ Closure(B) →
    Closure(B) is BalancedSet
  )
}
theorem CompactSubspace_vonNeumannBounded() {
  assert(
    ∀F ∈ {ℝ, ℂ} ∧
    ∀X: TopologicalVectorSpace(F) ∧
    ∀K ⊆ X | isCompact(K) 
    ⇒ isVonNeumannBounded(K)
  )
} ↔

proof CompactSubspace_vonNeumannBounded() {
  setVar(V: OpenNeighborhood(0_X)) →
  
  lemma BalancedNeighborhood() {
    assert(∃W ⊆ V | isBalanced(W) ∧ isOpen(W) ∧ 0_X ∈ W)
  } →
  
  lemma UnionDilations() {
    assert(X = ⋃_{n=1}^∞ nW)
  } →
  
  apply(UnionDilations()) →
  assert(K ⊆ ⋃_{n=1}^∞ nW) →
  
  lemma CompactCover() {
    assert(isCompact(K) ⇒ 
      ∃{n_1,...,n_k} | K ⊆ ⋃_{i=1}^k n_iW ∧
      n_1 < n_2 < ... < n_k
    )
  } →
  
  lemma FiniteUnionDilations() {
    assert(isBalanced(W) ⇒ 
      ⋃_{i=1}^k n_iW = n_kW
    )
  } →
  
  apply(FiniteUnionDilations()) →
  assert(K ⊆ n_kW) →
  
  lemma BalancedDilation() {
    assert(
      ∀t > n_k ⇒ [
        isBalanced(W) ⇒
        (n_k/t)W ⊆ W ⇒
        n_kW ⊆ tW
      ]
    )
  } →
  
  apply(BalancedDilation()) →
  assert(K ⊆ tW) →
  assert(W ⊆ V ⇒ K ⊆ tV) →
  
  conclude(
    ∀V: OpenNeighborhood(0_X) ⇒
    ∃s > 0 | ∀t > s ⇒ K ⊆ tV ⇒
    isVonNeumannBounded(K)
  )
}
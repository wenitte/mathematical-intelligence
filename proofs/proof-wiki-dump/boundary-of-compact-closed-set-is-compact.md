theorem Boundary_Of_Compact_Closed_Set_Is_Compact() {
  assert(
    ∀X[TopologicalSpace(X) ∧
    ∃K ⊆ X(Compact(K) ∧ Closed(K,X))] →
    Compact(∂K)
  )
}

proof Boundary_Of_Compact_Closed_Set_Is_Compact() {
  setVar(X: TopologicalSpace) →
  setVar(K: Subset(X)) →
  assume(Compact(K) ∧ Closed(K,X)) →
  
  lemma Boundary_Is_Closed() {
    assert(Closed(∂K,X))
  } →

  lemma Boundary_Subset() {
    assert(∂K ⊆ K)
  } →

  lemma Boundary_Closed_In_K() {
    assert(Closed(∂K,K))
  } →

  apply(Boundary_Is_Closed()) →
  apply(Boundary_Subset()) →
  apply(Boundary_Closed_In_K()) →
  apply(Closed_Subspace_Of_Compact_Is_Compact(K,∂K)) →
  
  assert(Compact(∂K))
}
theorem Closure_Subset_Subspace_Corollary() {
  let(T = ⟨S,τ⟩: TopologicalSpace) ∧
  let(H ⊆ S) ∧
  let(TH = ⟨H,τH⟩: TopologicalSubspace(H)) ∧
  let(A ⊆ H) ∧
  assert(isClosed(H,T)) →
  prove(clH(A) = cl(A))
} ↔

proof Closure_Subset_Subspace_Corollary() {
  apply(Closure_Subset_Subspace_Theorem) →
  assert(clH(A) = cl(A) ∩ H) →
  
  lemma Subset_Forward() {
    apply(Intersection_Is_Subset) →
    assert(clH(A) ⊆ cl(A))
  } →
  
  lemma Closure_Properties() {
    apply(Topological_Closure_Is_Closed) →
    assert(isClosed(cl(A),T)) →
    apply(Intersection_Of_Closed_Sets) →
    assert(isClosed(clH(A),T))
  } →
  
  lemma Subset_Backward() {
    apply(Set_Is_Subset_Of_Closure) →
    assert(A ⊆ clH(A)) →
    apply(Set_Closure_Is_Smallest) →
    assert(cl(A) ⊆ clH(A))
  } →
  
  apply(Subset_Forward()) ∧
  apply(Subset_Backward()) →
  apply(Set_Equality_Definition) →
  assert(clH(A) = cl(A))
}
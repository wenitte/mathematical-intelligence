theorem Compact_Subspace_is_Compact() {
  assert(
    ∀T[S,τ]: TopologicalSpace ∧
    ∀K ⊆ S ∧
    ∀τ_K: SubspaceTopology(K) ∧
    ∀T'[K,τ_K]: TopologicalSubspace(T) ∧
    ∀H ⊆ K ∧
    isCompact(H,T') 
    ⇒ isCompact(H,T)
  )
} ↔

proof Compact_Subspace_is_Compact() {
  assume(isCompact(H,T')) →
  let({W_i}_{i∈J}: OpenCover(H,T)) →
  assert(H ⊆ ⋃_{i∈J} W_i) →

  lemma Set_Equality() {
    assert(H = H ∩ K) by SubsetIntersection(H ⊆ K)
  } →
  
  lemma Cover_Intersection() {
    assert(H ⊆ (⋃_{i∈J} W_i) ∩ K) by SetIntersectionSubsets →
    assert((⋃_{i∈J} W_i) ∩ K = ⋃_{i∈J} (W_i ∩ K)) by IntersectionDistributesOverUnion
  } →

  assert({W_i ∩ K}_{i∈J} ∈ OpenCover(H,T')) →
  
  let(r: ℕ) →
  exists({W_i ∩ K}_{i=1}^r: FiniteSubcover(H,T')) by isCompact(H,T') →
  
  assert(H ⊆ ⋃_{i=1}^r (W_i ∩ K)) →
  assert(H ⊆ (⋃_{i=1}^r W_i) ∩ K) by IntersectionDistributesOverUnion →
  assert(H ⊆ ⋃_{i=1}^r W_i) by IntersectionIsSubset →
  
  conclude({W_i}_{i=1}^r: FiniteSubcover(H,T)) →
  conclude(isCompact(H,T))
}
theorem Boundary_of_Compact_Set_in_Hausdorff() {
  let(T: TopologicalSpace) →
  assert(isHausdorff(T)) →
  let(K: Set) →
  assert(K ⊂ S) →
  assert(isCompact(K)) →
  assert(
    isCompact(∂K)
  )
} ↔

proof Boundary_of_Compact_Set_in_Hausdorff() {
  lemma Compact_Subspace_Hausdorff_is_Closed() {
    assert(
      (isHausdorff(T) ∧ isCompact(K)) → isClosed(K)
    )
  } →
  apply(Compact_Subspace_Hausdorff_is_Closed()) →
  assert(isClosed(K)) →
  
  lemma Boundary_of_Compact_Closed_is_Compact() {
    assert(
      (isCompact(K) ∧ isClosed(K)) → isCompact(∂K)
    )
  } →
  apply(Boundary_of_Compact_Closed_is_Compact()) →
  assert(isCompact(∂K))
}
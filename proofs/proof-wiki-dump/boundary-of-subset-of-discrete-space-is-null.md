theorem Boundary_Of_Subset_In_Discrete_Space_Is_Null() {
  let(T = ⟨S,τ⟩: TopologicalSpace) →
  assert(isDiscrete(T)) →
  let(A: Set) →
  assert(A ⊆ S) →
  assert(
    ∂A = ∅
    where ∂A := boundary(A,T)
  )
} ↔

proof Boundary_Of_Subset_In_Discrete_Space_Is_Null() {
  let(T = ⟨S,τ⟩: TopologicalSpace) →
  assert(isDiscrete(T)) →
  let(A: Set) →
  assert(A ⊆ S) →
  
  lemma Set_In_Discrete_Topology_Is_Clopen() {
    assert(isOpen(A,T) ∧ isClosed(A,T))
  } →
  
  lemma Set_Clopen_Iff_Boundary_Empty() {
    assert(
      (isOpen(A,T) ∧ isClosed(A,T)) ↔ ∂A = ∅
    )
  } →
  
  apply(Set_In_Discrete_Topology_Is_Clopen()) →
  apply(Set_Clopen_Iff_Boundary_Empty()) →
  conclude(∂A = ∅)
}
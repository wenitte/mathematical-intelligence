theorem Closed_Set_Subspace_Corollary() {
  let(T: TopologicalSpace) ∧
  let(T': Set) ∧
  assert(T' ⊆ T) ∧
  assert(isClosedIn(T', T)) →
  assert(
    ∀V ⊆ T': isClosedIn(V, T') ↔ isClosedIn(V, T)
  )
}

proof Closed_Set_Subspace_Corollary() {
  setVar(V: Set) ∧
  assume(V ⊆ T') →
  
  // Forward direction
  assume(isClosedIn(V, T')) →
  apply(Closed_Set_Topological_Subspace()) →
  assert(V = T' ∩ ∃W: isClosedIn(W, T)) →
  
  // Using closure properties
  assert(isClosedIn(T', T)) ∧
  assert(isClosedIn(W, T)) →
  apply(Topology_Defined_By_Closed_Sets()) →
  assert(isClosedIn(T' ∩ W, T)) →
  assert(isClosedIn(V, T)) →
  
  // Backward direction is implied by the main theorem
  assert(isClosedIn(V, T') ↔ isClosedIn(V, T))
}
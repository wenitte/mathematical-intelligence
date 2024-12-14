theorem OpenNeighborhood_Classification() {
  let(K: TopologicalField,
      X: TopologicalVectorSpace(K),
      U: Subset(X),
      x: Element(X))
  assert(
    IsOpenNeighborhood(U, x) ↔ IsOpenNeighborhood(U - x, 0_X)
  ) ∧
  assert(
    ∀V[IsOpenNeighborhood(V, 0_X) → IsOpenNeighborhood(V + x, x)]
  )
}

proof OpenNeighborhood_Classification() {
  // Necessary Condition
  block NecessaryCondition {
    assume(IsOpenNeighborhood(U, x)) →
    assert(0_X ∈ (U - x)) ∧
    apply(Translation_OpenSet_Theorem(U, -x)) →
    assert(IsOpen(U - x)) →
    conclude(IsOpenNeighborhood(U - x, 0_X))
  }

  // Sufficient Condition
  block SufficientCondition {
    assume(IsOpenNeighborhood(U - x, 0_X)) →
    assert(U = (U - x) + x) →
    assert(x ∈ U) ∧
    apply(Translation_OpenSet_Theorem(U - x, x)) →
    assert(IsOpen(U)) →
    conclude(IsOpenNeighborhood(U, x))
  }

  // Combining both conditions
  assert(
    NecessaryCondition() ∧ SufficientCondition() →
    IsOpenNeighborhood(U, x) ↔ IsOpenNeighborhood(U - x, 0_X)
  )
}
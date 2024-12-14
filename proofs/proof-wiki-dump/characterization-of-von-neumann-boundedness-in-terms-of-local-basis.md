theorem VonNeumannBoundedness() {
  let(X: TopologicalVectorSpace, τ: Topology) →
  let(B: LocalBasis, B.center = 0_X) →
  let(E: Subset(X)) →
  assert(
    isVonNeumannBounded(E) ↔
    (∀V ∈ B ⇒ ∃s > 0: ∀t > s ⇒ E ⊆ tV)
  )
}

proof VonNeumannBoundedness() {
  // Necessary Condition
  lemma NecessaryCondition() {
    assume(isVonNeumannBounded(E)) →
    assert(∀V ∈ OpenNeighborhood(0_X) ⇒ ∃s > 0: ∀t > s ⇒ E ⊆ tV) →
    assert(B ⊆ OpenNeighborhood(0_X)) →
    conclude(∀V ∈ B ⇒ ∃s > 0: ∀t > s ⇒ E ⊆ tV)
  }

  // Sufficient Condition
  lemma SufficientCondition() {
    assume(∀V ∈ B ⇒ ∃s > 0: ∀t > s ⇒ E ⊆ tV) →
    let(U: OpenNeighborhood(0_X)) →
    assert(∃V ∈ B: V ⊆ U) →
    assert(∃s > 0: ∀t > s ⇒ E ⊆ tV) →
    assert(E ⊆ tV ⊆ tU) →
    conclude(isVonNeumannBounded(E))
  }

  apply(NecessaryCondition()) ∧
  apply(SufficientCondition()) →
  conclude(
    isVonNeumannBounded(E) ↔
    (∀V ∈ B ⇒ ∃s > 0: ∀t > s ⇒ E ⊆ tV)
  )
}
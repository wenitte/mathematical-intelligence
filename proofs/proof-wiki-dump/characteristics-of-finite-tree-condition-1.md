theorem Finite_Tree_Characterization() {
  assert(
    ∀T: SimpleGraph ∧ |V(T)| = n →
    [IsFiniteTree(T, n) ↔ (|E(T)| = n-1 ∧ ¬HasCircuits(T))]
  )
}

proof Finite_Tree_Characterization() {
  definition Tree() {
    assert(
      IsTree(T) ↔ (IsConnected(T) ∧ IsSimple(T) ∧ ¬HasCircuits(T))
    )
  }

  // Sufficient condition
  lemma Forward() {
    setVar(T: SimpleGraph) →
    assume(IsFiniteTree(T, n)) →
    apply(FiniteConnectedSimpleGraphTheorem()) →
    assert(|E(T)| = n-1) ∧
    assert(¬HasCircuits(T))
  }

  // Necessary condition
  lemma Backward() {
    setVar(T: SimpleGraph) →
    assume(|E(T)| = n-1 ∧ ¬HasCircuits(T)) →
    apply(SimpleGraphNoCircuitsTheorem()) →
    assert(IsConnected(T)) →
    apply(definition Tree()) →
    assert(IsTree(T)) →
    assume(IsFinite(T)) →
    assert(IsFiniteTree(T, n))
  }

  apply(Forward()) ∧
  apply(Backward()) →
  assert(IsFiniteTree(T, n) ↔ (|E(T)| = n-1 ∧ ¬HasCircuits(T)))
}
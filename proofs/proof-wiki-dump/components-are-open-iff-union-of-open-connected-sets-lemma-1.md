theorem ComponentIntersection() {
  assume(T: TopologicalSpace) →
  assume(C: Component(T)) →
  assume(U: ConnectedSet(T)) →
  assert(
    (U ∩ C ≠ ∅) ↔ (U ≠ ∅ ∧ U ⊆ C)
  )
}

proof ComponentIntersection() {
  // Necessary Condition (←)
  lemma NecessaryCondition() {
    assume(U ∩ C ≠ ∅) →
    apply(UnionConnectedSetsCommonPoint(U, C)) →
    assert(isConnected(U ∪ C)) →
    assert(C ⊆ U ∪ C) →
    apply(ComponentMaximality(C)) →
    assert(C = U ∪ C) →
    apply(UnionWithSupersetIsSuperset()) →
    assert(U ⊆ C) →
    assert(U ∩ C = U) →
    assert(U ≠ ∅)
  }

  // Sufficient Condition (→)
  lemma SufficientCondition() {
    assume(U ≠ ∅ ∧ U ⊆ C) →
    apply(IntersectionWithSubset()) →
    assert(U ∩ C = U) →
    assert(U ∩ C ≠ ∅)
  }

  apply(NecessaryCondition()) ∧
  apply(SufficientCondition()) →
  assert((U ∩ C ≠ ∅) ↔ (U ≠ ∅ ∧ U ⊆ C))
}
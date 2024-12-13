theorem Ordinal_Alternative_Definition() {
  assert(
    ∀S(
      isOrdinal(S) ↔ 
      (isTransitive(S) ∧ isStrictWellOrdered(S, ∈))
    )
  )
}

proof Ordinal_Alternative_Definition() {
  // Necessary Condition (⇒)
  block NecessaryCondition() {
    setVar(S: Set) →
    assume(isOrdinal(S)) →
    assert(isTransitive(S)) →
    assert(isStrictWellOrdered(S, ∈)) →
    conclude(isTransitive(S) ∧ isStrictWellOrdered(S, ∈))
  }

  // Sufficient Condition (⇐)
  block SufficientCondition() {
    setVar(S: Set) →
    assume(isTransitive(S) ∧ isStrictWellOrdered(S, ∈)) →
    forall(a ∈ S) {
      assert(a = S ∩ a) {
        // By transitivity of S
        apply(TransitiveProperty(S)) →
        assert(a ⊆ S) →
        apply(IntersectionWithSubset(a, S))
      } →
      assert(a = {x ∈ S: x ∈ a}) →
      assert(a = S_a) {
        apply(InitialSegmentDefinition())
      }
    } →
    conclude(isOrdinal(S))
  }

  // Final conclusion combining both directions
  conclude(
    isOrdinal(S) ↔ 
    (isTransitive(S) ∧ isStrictWellOrdered(S, ∈))
  )
}
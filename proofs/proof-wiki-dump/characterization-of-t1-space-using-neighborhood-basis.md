theorem T1_Space_Characterization() {
  let(T = (S,τ): TopologicalSpace) →
  let(∀x ∈ S, ℕx: NeighborhoodBasis(x)) →
  assert(
    IsT1Space(T) ↔ 
    (∀x,y ∈ S: x ≠ y ⇒ 
      (∃N ∈ ℕx: y ∉ N) ∧ 
      (∃M ∈ ℕy: x ∉ M))
  )
}

proof T1_Space_Characterization() {
  // Necessary Condition
  lemma Forward() {
    assume(IsT1Space(T)) →
    setVar(x,y: S, x ≠ y) →
    byDef(T1Space) →
    assert(∃U ∈ τ: x ∈ U ∧ y ∉ U) →
    apply(OpenSetNeighborhoodEquiv(U)) →
    assert(IsNeighborhood(U,x)) →
    byDef(NeighborhoodBasis) →
    assert(∃N ∈ ℕx: N ⊆ U) →
    assert(y ∉ N) →
    similarly() →
    assert(∃M ∈ ℕy: x ∉ M)
  }

  // Sufficient Condition
  lemma Backward() {
    assume(∀x,y ∈ S: x ≠ y ⇒ 
           (∃N ∈ ℕx: y ∉ N) ∧ 
           (∃M ∈ ℕy: x ∉ M)) →
    setVar(x,y: S, x ≠ y) →
    byHypothesis() →
    assert(∃N ∈ ℕx: y ∉ N) →
    byDef(Neighborhood) →
    assert(∃U ∈ τ: x ∈ U ∧ U ⊆ N) →
    assert(x ∈ U ∧ y ∉ U) →
    similarly() →
    assert(∃V ∈ τ: y ∈ V ∧ x ∉ V) →
    generalize() →
    assert(∀x,y ∈ S: x ≠ y ⇒
           (∃U ∈ τ: x ∈ U ∧ y ∉ U) ∧
           (∃V ∈ τ: y ∈ V ∧ x ∉ V)) →
    byDef(T1Space) →
    assert(IsT1Space(T))
  }

  combine(Forward(), Backward())
}
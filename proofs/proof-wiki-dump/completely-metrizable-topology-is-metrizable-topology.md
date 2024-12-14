theorem CompletelyMetrizableImpliesMetrizable() {
  assert(
    ∀S ∀τ [
      CompletelyMetrizable(S,τ) ⇒ Metrizable(S,τ)
    ]
  )
} ↔

proof CompletelyMetrizableImpliesMetrizable() {
  setVar(S: Set, τ: Topology) →
  assume(CompletelyMetrizable(S,τ)) →
  assert(∃d: Metric [
    Complete(d) ∧ InducesTopology(d,τ)
  ]) →
  lemma MetricSpaceExists() {
    assert(MetricSpace(S,d))
  } →
  lemma IdentityHomeomorphism() {
    assert(
      Homeomorphic(S,τ,S,τ) ∧
      ∃f: Function [
        f = Identity(S) ∧
        IsHomeomorphism(f)
      ]
    )
  } →
  apply(IdentityHomeomorphism()) →
  assert(Metrizable(S,τ))
}
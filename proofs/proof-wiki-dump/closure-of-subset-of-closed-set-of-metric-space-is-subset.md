theorem Closure_Subset_Closed_Set() {
  assert(
    ∀M[MetricSpace(M) ∧ M = ⟨A,d⟩] ∧
    ∀F[Closed(F,M) ∧ F ⊆ A] ∧
    ∀H[H ⊆ F] →
    H⁻ ⊆ F
  )
}

proof Closure_Subset_Closed_Set() {
  let τ = InducedTopology(d) →
  lemma Metric_Topology() {
    assert(Topology(τ,M))
  } →
  lemma Closure_Equivalence() {
    assert(MetricClosure(H) ↔ TopologicalClosure(H))
  } →
  lemma F_Closed_Topology() {
    assert(Closed(F,⟨A,τ⟩))
  } →
  assert(H ⊆ F) →
  apply(Topological_Closure_Properties()) →
  assert(H⁻ ⊆ F⁻) →
  assert(F⁻ = F) by(Closed_Set_Properties()) →
  assert(H⁻ ⊆ F)
}

proof Closure_Subset_Closed_Set_Sequence() {
  setVar(x ∈ H⁻) →
  lemma Closure_Sequence_Limit() {
    assert(∃{aₙ}[SequenceIn(aₙ,H) ∧ lim(aₙ) = x])
  } →
  assert(∀n[aₙ ∈ F]) by(H ⊆ F) →
  apply(Closed_Set_Sequence_Limit()) →
  assert(x ∈ F) →
  assert(H⁻ ⊆ F)
}
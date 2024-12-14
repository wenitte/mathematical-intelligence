theorem Closure_Subset_Of_Closed_Set() {
  assert(
    ∀M[MetricSpace(M)] ∧ ∀F,H[
      Closed(F,M) ∧ H ⊆ F →
      Closure(H,M) ⊆ F
    ]
  )
} ↔

proof Closure_Subset_Of_Closed_Set() {
  setVar(M: MetricSpace) →
  setVar(F,H: Set) →
  setVar(d: Metric(M)) →
  setVar(τ: Topology) →
  
  lemma Induced_Topology() {
    assert(τ = InducedTopology(d,M))
  } →

  lemma Metric_Topological_Closure_Equiv() {
    assert(
      Closure(H,M) = TopologicalClosure(H,τ)
    )
  } →

  lemma F_Closed_In_Topology() {
    assert(
      Closed(F,M) ↔ ClosedInTopology(F,τ)
    )
  } →

  assert(H ⊆ F) →
  apply(Topological_Closure_Subset_Property()) →
  assert(TopologicalClosure(H,τ) ⊆ TopologicalClosure(F,τ)) →
  
  lemma Closed_Set_Equal_Closure() {
    assert(
      Closed(F,M) → F = TopologicalClosure(F,τ)
    )
  } →

  apply(Metric_Topological_Closure_Equiv()) →
  apply(Closed_Set_Equal_Closure()) →
  assert(Closure(H,M) ⊆ F)
}
theorem Closed_Subset_Real_Line_Is_G_Delta() {
  setContext(⟨ℝ, τ_d⟩: TopologicalSpace) ∧
  assert(
    ∀H ⊆ ℝ, (isClosed(H) → isG_Delta(H))
  )
} ↔

proof Closed_Subset_Real_Line_Is_G_Delta() {
  lemma Real_Line_Is_Metric() {
    assert(
      ∃d: ℝ×ℝ→ℝ, isMetricSpace(⟨ℝ,d⟩)
    )
  } →
  
  lemma Closed_In_Metric_Is_G_Delta() {
    assert(
      ∀X: MetricSpace, ∀S ⊆ X,
      (isClosed(S) → isG_Delta(S))
    )
  } →
  
  setVar(H: Set) →
  assume(H ⊆ ℝ ∧ isClosed(H)) →
  apply(Real_Line_Is_Metric()) →
  apply(Closed_In_Metric_Is_G_Delta()) →
  conclude(isG_Delta(H))
}
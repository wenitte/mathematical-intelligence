theorem Compact_Subspace_Real_Closed_Bounded() {
  assert(
    ∀S ⊆ ℝ [
      isCompact(S) ⇒ (isClosed(S) ∧ isBounded(S))
    ]
  )
} ↔

proof Compact_Subspace_Real_Closed_Bounded() {
  setVar(S: Set) →
  assume(S ⊆ ℝ ∧ isCompact(S)) →
  
  lemma Real_Metric_Space() {
    assert(
      ∃d: ℝ×ℝ → ℝ [
        isMetricSpace(ℝ, d) ∧ 
        isEuclideanMetric(d)
      ]
    )
  } →
  
  lemma Hausdorff_Properties() {
    assert(
      isMetricSpace(X) ⇒ isHausdorff(X)
    )
  } →
  
  lemma Compact_Hausdorff_Closed() {
    assert(
      ∀X,Y [
        (isHausdorff(X) ∧ Y ⊆ X ∧ isCompact(Y)) ⇒ 
        isClosed(Y)
      ]
    )
  } →
  
  lemma Compact_Metric_Bounded() {
    assert(
      isCompact(S) ∧ isMetricSpace(ℝ, d) ⇒ 
      isTotallyBounded(S) ⇒ 
      isBounded(S)
    )
  } →
  
  apply(Real_Metric_Space()) →
  apply(Hausdorff_Properties()) →
  apply(Compact_Hausdorff_Closed()) →
  apply(Compact_Metric_Bounded()) →
  
  conclude(isClosed(S) ∧ isBounded(S))
}
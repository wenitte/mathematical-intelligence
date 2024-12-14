theorem Compact_Metric_Space_Complete() {
  assert(
    ∀X (IsMetricSpace(X) ∧ IsCompact(X)) → IsComplete(X)
  )
} ↔

proof Compact_Metric_Space_Complete() {
  setVar(X: MetricSpace) →
  assume(IsCompact(X)) →

  lemma L1_Compact_To_Countably() {
    assert(IsCompact(X) → IsCountablyCompact(X))
  } →

  lemma L2_CountablyCompact_To_Sequential() {
    assert(
      (IsMetricSpace(X) ∧ IsCountablyCompact(X)) → 
      IsSequentiallyCompact(X)
    )
  } →

  lemma L3_Sequential_To_Complete() {
    assert(
      (IsMetricSpace(X) ∧ IsSequentiallyCompact(X)) → 
      IsComplete(X)
    )
  } →

  apply(L1_Compact_To_Countably()) →
  assert(IsCountablyCompact(X)) →
  
  apply(L2_CountablyCompact_To_Sequential()) →
  assert(IsSequentiallyCompact(X)) →
  
  apply(L3_Sequential_To_Complete()) →
  assert(IsComplete(X))
}
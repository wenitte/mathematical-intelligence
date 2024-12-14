theorem CompactMetricSpaceSeparable() {
  assert(
    ∀X(MetricSpace(X,d) ∧ Compact(X,d) → Separable(X,d))
  )
} ↔

proof CompactMetricSpaceSeparable() {
  setVar(X: MetricSpace) →
  assume(Compact(X,d)) →
  
  lemma CompactnessEquivalence() {
    assert(
      Compact(X,d) ↔ SequentiallyCompact(X,d)
    )
  } →
  
  apply(CompactnessEquivalence()) →
  assert(SequentiallyCompact(X,d)) →
  
  lemma SequentialCompactSeparable() {
    assert(
      SequentiallyCompact(X,d) → Separable(X,d)
    )
  } →
  
  apply(SequentialCompactSeparable()) →
  assert(Separable(X,d))
}
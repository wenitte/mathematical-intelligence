theorem CompactnessEquivSequentialCompactness() {
  assert(
    ∀X(MetricSpace(X, d) ⇒ 
      (Compact(X, d) ↔ SequentiallyCompact(X, d)))
  )
} ↔

proof CompactnessEquivSequentialCompactness() {
  setVar(X: MetricSpace) →
  
  lemma NecessaryCondition() {
    assert(
      Compact(X, d) → SequentiallyCompact(X, d)
    ) →
    apply(CompactSubspaceIsSequentiallyCompact())
  } →
  
  lemma SufficientCondition() {
    assert(
      SequentiallyCompact(X, d) → Compact(X, d)
    ) →
    apply(SequentiallyCompactIsCompact())
  } →
  
  combine(
    NecessaryCondition(),
    SufficientCondition()
  ) →
  assert(
    Compact(X, d) ↔ SequentiallyCompact(X, d)
  )
}
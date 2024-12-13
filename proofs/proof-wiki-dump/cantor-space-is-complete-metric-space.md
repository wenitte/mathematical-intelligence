theorem Cantor_Space_Complete() {
  let T = (C, τ_d) // Cantor space with metric topology
  assert(
    isMetricSpace(T) ∧ isComplete(T)
  )
}

proof Cantor_Space_Complete() {
  let T = (C, τ_d) →
  assert(isMetricSubspace(C, ℝ)) →
  lemma Metric_Subspace() {
    assert(isMetricSpace(T))
  } →
  lemma Cantor_Space_Compact() {
    assert(isCompact(T))
  } →
  theorem Compact_Implies_Complete() {
    assert(
      ∀X.(isMetricSpace(X) ∧ isCompact(X)) → isComplete(X)
    )
  } →
  apply(Compact_Implies_Complete(), T) →
  assert(isComplete(T))
}
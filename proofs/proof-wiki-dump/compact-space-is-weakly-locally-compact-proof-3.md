theorem Compact_Space_is_Weakly_Locally_Compact() {
  assert(
    ∀T = (S, τ): TopologicalSpace ∧ isCompact(T) →
    isWeaklyLocallyCompact(T)
  )
} ↔

proof Compact_Space_is_Weakly_Locally_Compact() {
  setVar(T: TopologicalSpace) →
  assert(isCompact(T)) →
  lemma Compact_Space_is_Weakly_Sigma_Locally_Compact() {
    assert(isCompact(T) → isWeaklySigmaLocallyCompact(T))
  } →
  lemma Weakly_Sigma_Implies_Weakly_Locally_Compact() {
    assert(isWeaklySigmaLocallyCompact(T) → isWeaklyLocallyCompact(T))
  } →
  apply(Compact_Space_is_Weakly_Sigma_Locally_Compact()) →
  apply(Weakly_Sigma_Implies_Weakly_Locally_Compact()) →
  assert(isWeaklyLocallyCompact(T))
}
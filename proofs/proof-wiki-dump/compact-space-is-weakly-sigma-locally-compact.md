theorem Compact_Space_Is_Weakly_Sigma_Locally_Compact() {
  assert(
    ∀T(
      (T = ⟨S,τ⟩ ∧ isCompactSpace(T)) →
      isWeaklySigmaLocallyCompact(T)
    )
  )
} ↔

proof Compact_Space_Is_Weakly_Sigma_Locally_Compact() {
  setVar(T: TopologicalSpace) →
  assume(T = ⟨S,τ⟩ ∧ isCompactSpace(T)) →
  
  lemma Compact_Is_Sigma_Compact() {
    assert(
      isCompactSpace(T) → isSigmaCompact(T)
    )
  } →
  
  lemma Compact_Is_Weakly_Locally_Compact() {
    assert(
      isCompactSpace(T) → isWeaklyLocallyCompact(T)
    )
  } →
  
  apply(Compact_Is_Sigma_Compact()) →
  apply(Compact_Is_Weakly_Locally_Compact()) →
  
  assert(
    (isSigmaCompact(T) ∧ isWeaklyLocallyCompact(T)) →
    isWeaklySigmaLocallyCompact(T)
  ) →
  
  conclude(isWeaklySigmaLocallyCompact(T))
}
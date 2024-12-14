theorem Compact_Space_is_Weakly_Locally_Compact() {
  assert(
    ∀T(isTopologicalSpace(T) ∧ isCompact(T) → isWeaklyLocallyCompact(T))
  )
} ↔

proof Compact_Space_is_Weakly_Locally_Compact() {
  setVar(T: TopologicalSpace) →
  assume(isCompact(T)) →
  
  lemma Compact_Space_is_Strongly_Locally_Compact() {
    assert(isCompact(T) → isStronglyLocallyCompact(T))
  } →
  
  lemma Strongly_Locally_Compact_is_Weakly_Locally_Compact() {
    assert(isStronglyLocallyCompact(T) → isWeaklyLocallyCompact(T))
  } →
  
  apply(Compact_Space_is_Strongly_Locally_Compact()) →
  apply(Strongly_Locally_Compact_is_Weakly_Locally_Compact()) →
  
  conclude(isWeaklyLocallyCompact(T))
}
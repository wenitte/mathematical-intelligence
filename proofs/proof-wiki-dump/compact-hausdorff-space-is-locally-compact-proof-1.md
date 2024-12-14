theorem CompactHausdorffIsLocallyCompact() {
  assert(
    ∀T = (S,τ) ∈ TopologicalSpaces ∧
    isHausdorff(T) ∧
    isCompact(T) ⇒
    isLocallyCompact(T)
  )
} ↔

proof CompactHausdorffIsLocallyCompact() {
  setVar(T: TopologicalSpace) →
  assume(isHausdorff(T) ∧ isCompact(T)) →
  
  lemma CompactIsWeaklyLocallyCompact() {
    assert(
      isCompact(T) ⇒ isWeaklyLocallyCompact(T)
    )
  } →
  
  apply(CompactIsWeaklyLocallyCompact()) →
  assert(isWeaklyLocallyCompact(T)) →
  
  lemma WeaklyCompactHausdorffImpliesLocallyCompact() {
    assert(
      isWeaklyLocallyCompact(T) ∧ isHausdorff(T) ⇒
      isLocallyCompact(T)
    )
  } →
  
  apply(WeaklyCompactHausdorffImpliesLocallyCompact()) →
  assert(isLocallyCompact(T))
}
theorem CompactComplementTopology_SequentiallyCompact() {
  assert(
    ∀T: TopologicalSpace where T = ⟨ℝ,τ⟩ ∧
    isCompactComplementTopology(T) ⇒
    isSequentiallyCompact(T)
  )
}

proof CompactComplementTopology_SequentiallyCompact() {
  setVar(T: TopologicalSpace) →
  assert(isCompactComplementTopology(T)) →
  
  lemma CompactComplement_isCompact() {
    assert(isCompactComplementTopology(T) → isCompact(T))
  } →
  
  lemma Compact_CountablyCompact() {
    assert(isCompact(T) → isCountablyCompact(T))
  } →
  
  lemma CompactComplement_FirstCountable() {
    assert(isCompactComplementTopology(T) → isFirstCountable(T))
  } →
  
  lemma FirstCountable_SequentiallyCompact() {
    assert(
      isFirstCountable(T) → 
      (isSequentiallyCompact(T) ↔ isCountablyCompact(T))
    )
  } →
  
  apply(CompactComplement_isCompact()) →
  apply(Compact_CountablyCompact()) →
  apply(CompactComplement_FirstCountable()) →
  apply(FirstCountable_SequentiallyCompact()) →
  
  assert(isSequentiallyCompact(T))
}
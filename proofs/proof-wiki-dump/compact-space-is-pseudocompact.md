theorem Compact_Space_is_Pseudocompact() {
  assert(
    ∀K ∀τ (
      isCompactSpace(⟨K,τ⟩) ⇒ 
      isPseudocompact(⟨K,τ⟩)
    )
  )
} ↔

proof Compact_Space_is_Pseudocompact() {
  setVar(K: Set, τ: Topology) →
  
  lemma Compact_to_CountablyCompact() {
    assert(
      isCompactSpace(⟨K,τ⟩) ⇒ 
      isCountablyCompact(⟨K,τ⟩)
    )
  } →
  
  lemma CountablyCompact_to_Pseudocompact() {
    assert(
      isCountablyCompact(⟨K,τ⟩) ⇒ 
      isPseudocompact(⟨K,τ⟩)
    )
  } →
  
  apply(Compact_to_CountablyCompact()) →
  apply(CountablyCompact_to_Pseudocompact()) →
  
  assert(
    isCompactSpace(⟨K,τ⟩) ⇒
    isCountablyCompact(⟨K,τ⟩) ⇒
    isPseudocompact(⟨K,τ⟩)
  )
}
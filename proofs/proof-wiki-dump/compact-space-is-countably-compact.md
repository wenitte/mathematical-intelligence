theorem Compact_Space_Is_Countably_Compact() {
  assert(
    ∀T = (S,τ) ∈ TopologicalSpace ∧
    isCompact(T) →
    isCountablyCompact(T)
  )
}

proof Compact_Space_Is_Countably_Compact() {
  setVar(T: TopologicalSpace) →
  setVar(S: Set) →
  setVar(τ: Topology) →
  assert(T = (S,τ)) →
  assert(isCompact(T)) →
  
  lemma CompactDefinition() {
    assert(
      isCompact(T) ↔
      ∀C ∈ OpenCover(S) →
      ∃F ⊆ C: isFinite(F) ∧ isSubcover(F,S)
    )
  } →

  lemma CountablyCompactDefinition() {
    assert(
      isCountablyCompact(T) ↔
      ∀C ∈ OpenCover(S): isCountable(C) →
      ∃F ⊆ C: isFinite(F) ∧ isSubcover(F,S)
    )
  } →

  apply(CompactDefinition()) →
  assert(∀C ∈ OpenCover(S): isCountable(C) ⊆ OpenCover(S)) →
  assert(isCountablyCompact(T))
}
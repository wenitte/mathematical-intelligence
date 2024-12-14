theorem CompactIsLindelof() {
  assert(
    ∀X: TopologicalSpace ⇒
    (isCompact(X) → isLindelof(X))
  )
} ↔

proof CompactIsLindelof() {
  setVar(X: TopologicalSpace) →
  assume(isCompact(X)) →

  lemma CompactIsSigmaCompact() {
    assert(isCompact(X) → isSigmaCompact(X))
  } →

  lemma SigmaCompactIsLindelof() {
    assert(isSigmaCompact(X) → isLindelof(X))
  } →

  apply(CompactIsSigmaCompact()) →
  apply(SigmaCompactIsLindelof()) →
  assert(isLindelof(X))
}
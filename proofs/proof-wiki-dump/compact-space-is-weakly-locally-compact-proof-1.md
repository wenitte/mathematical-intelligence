theorem Compact_Space_is_Weakly_Locally_Compact() {
  assert(
    ∀T(T = (S,τ) ∧ isCompactSpace(T)) →
    isWeaklyLocallyCompact(T)
  )
}

proof Compact_Space_is_Weakly_Locally_Compact() {
  setVar(T: TopologicalSpace) →
  assert(isCompactSpace(T)) →
  
  lemma WeaklyLocallyCompact_Definition() {
    assert(
      isWeaklyLocallyCompact(T) ↔
      ∀x∈S(∃N(isNeighborhood(N,x) ∧ isCompact(N)))
    )
  } →

  setVar(x: S) →
  
  lemma Space_is_Neighborhood() {
    assert(∀p∈S(isNeighborhood(S,p)))
  } →

  apply(Space_is_Neighborhood()) →
  assert(isNeighborhood(S,x)) →
  assert(isCompact(S)) →
  assert(∃N(isNeighborhood(N,x) ∧ isCompact(N))) →
  apply(WeaklyLocallyCompact_Definition()) →
  assert(isWeaklyLocallyCompact(T))
}
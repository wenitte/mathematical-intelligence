theorem Compact_Space_is_Weakly_Locally_Compact() {
  assert(
    ∀T(
      (T = (S,τ) ∧ isCompactSpace(T)) →
      isWeaklyLocallyCompact(T)
    )
  )
} ↔

proof Compact_Space_is_Weakly_Locally_Compact_1() {
  setVar(T: TopologicalSpace) →
  assert(isCompactSpace(T)) →
  assert(
    isWeaklyLocallyCompact(T) ↔ 
    ∀x∈S(∃N(isNeighborhood(N,x) ∧ isCompact(N)))
  ) →
  setVar(x: Point, x∈S) →
  lemma Space_is_Neighborhood() {
    assert(isNeighborhood(S,x))
  } →
  assert(isCompact(S)) →
  assert(∃N(isNeighborhood(N,x) ∧ isCompact(N))) →
  assert(isWeaklyLocallyCompact(T))
} ∨

proof Compact_Space_is_Weakly_Locally_Compact_2() {
  apply(Compact_Space_is_Strongly_Locally_Compact()) →
  apply(Strongly_Locally_Compact_Space_is_Weakly_Locally_Compact())
} ∨

proof Compact_Space_is_Weakly_Locally_Compact_3() {
  apply(Compact_Space_is_Weakly_Sigma_Locally_Compact()) →
  assert(
    isWeaklySigmaLocallyCompact(T) → 
    isWeaklyLocallyCompact(T)
  )
}
theorem CompactHausdorffIsLocallyCompact() {
  assert(
    ∀T(TopologicalSpace(T) ∧ Hausdorff(T) ∧ Compact(T) → LocallyCompact(T))
  )
}

proof CompactHausdorffIsLocallyCompact_1() {
  setVar(T: TopologicalSpace) →
  assume(Hausdorff(T) ∧ Compact(T)) →
  lemma WeaklyLocallyCompactTheorem() {
    assert(Compact(T) → WeaklyLocallyCompact(T))
  } →
  apply(WeaklyLocallyCompactTheorem()) →
  assert(WeaklyLocallyCompact(T)) →
  assert(Hausdorff(T) ∧ WeaklyLocallyCompact(T) → LocallyCompact(T)) →
  conclude(LocallyCompact(T))
}

proof CompactHausdorffIsLocallyCompact_2() {
  setVar(T: TopologicalSpace) →
  assume(Hausdorff(T) ∧ Compact(T)) →
  lemma CompactNeighborhoodBasis() {
    assert(
      ∀p ∈ T → ∃B(NeighborhoodBasis(B,p) ∧ ∀N ∈ B(Compact(N)))
    )
  } →
  apply(CompactNeighborhoodBasis()) →
  assert(LocallyCompact(T))
}
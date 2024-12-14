theorem Compact_Hausdorff_Is_Locally_Compact() {
  assert(
    ∀T: TopologicalSpace ⇒
    (isHausdorff(T) ∧ isCompact(T)) →
    isLocallyCompact(T)
  )
} ↔

proof Compact_Hausdorff_Is_Locally_Compact() {
  setVar(T: TopologicalSpace) →
  assume(isHausdorff(T) ∧ isCompact(T)) →
  lemma Hausdorff_Compact_Has_Compact_Nbhd_Basis() {
    assert(
      ∀p ∈ T ⇒ ∃B: NeighborhoodBasis(p) ⇒
      ∀N ∈ B ⇒ isCompact(N)
    )
  } →
  apply(Hausdorff_Compact_Has_Compact_Nbhd_Basis()) →
  conclude(isLocallyCompact(T))
}
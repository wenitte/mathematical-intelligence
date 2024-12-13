theorem ArensFortsIsZeroDimensional() {
  assert(
    ∀T: (T = ⟨S,τ⟩ ∧ IsArensfortSpace(T)) →
    IsZeroDimensional(T)
  )
}

proof ArensFortsIsZeroDimensional() {
  setVar(T: TopologicalSpace) →
  assume(T = ⟨S,τ⟩ ∧ IsArensfortSpace(T)) →
  
  lemma LocalBasisAtNonOrigin() {
    assert(
      ∀q ∈ S: (q ≠ ⟨0,0⟩) →
      ({q} ∈ ClopenSets(T) ∧
       {{q}} IsLocalBasisAt(q))
    ) →
    apply(ClopenPointsInArensfort)
  } →

  lemma OriginNeighborhoodsClopen() {
    assert(
      ∀N ∈ Neighborhoods(⟨0,0⟩): 
      IsOpen(N) → IsClopen(N)
    ) →
    apply(NeighborhoodOfOriginIsClosed)
  } →

  assert(
    ∃B: (
      B IsBasisFor(τ) ∧
      (∀b ∈ B: IsClopen(b)) ∧
      B = Union(
        {{{q}} | q ∈ S ∧ q ≠ ⟨0,0⟩} ∪
        OpenNeighborhoods(⟨0,0⟩)
      )
    )
  ) →

  conclude(IsZeroDimensional(T))
}
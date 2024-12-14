theorem Compact_Space_Is_Paracompact() {
  assert(
    ∀T: TopologicalSpace(
      (T = ⟨S,τ⟩ ∧ isCompact(T)) → isParacompact(T)
    )
  )
} ↔

proof Compact_Space_Is_Paracompact() {
  setVar(T: TopologicalSpace) →
  setVar(S: Set) →
  setVar(τ: Topology) →
  assert(T = ⟨S,τ⟩) →
  
  lemma Compact_Definition() {
    assert(
      isCompact(T) ↔ 
      ∀C: OpenCover(S)(∃F ⊆ C(isFinite(F) ∧ isSubcover(F,S)))
    )
  } →

  lemma Subcover_Is_Refinement() {
    assert(
      ∀C: OpenCover(S)(
        ∃F ⊆ C(isSubcover(F,S)) → 
        ∃R: OpenCover(S)(isRefinement(R,C) ∧ isLocallyFinite(R))
      )
    )
  } →

  apply(Compact_Definition()) →
  apply(Subcover_Is_Refinement()) →
  
  assert(
    ∀C: OpenCover(S)(
      ∃R: OpenCover(S)(isRefinement(R,C) ∧ isLocallyFinite(R))
    )
  ) →
  
  assert(isParacompact(T))
}
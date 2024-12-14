theorem Paracompact_Has_Locally_Finite_Refinement() {
  assert(
    ∀T(IsTopologicalSpace(T) ∧ IsParacompact(T) →
      ∀C(IsOpenCover(C, T) → ∃R(IsLocallyFiniteRefinement(R, C, T))))
  )
} ↔

proof Paracompact_Has_Locally_Finite_Refinement() {
  setVar(T: TopologicalSpace) →
  assume(IsParacompact(T)) →
  
  lemma ParacompactDef() {
    assert(
      IsParacompact(T) ↔
      ∀C(IsOpenCover(C, T) → 
        ∃R(IsOpenRefinement(R, C, T) ∧ IsLocallyFinite(R, T)))
    )
  } →
  
  lemma RefinementTransitive() {
    assert(
      ∀C,R(IsOpenRefinement(R, C, T) → IsRefinement(R, C, T))
    )
  } →
  
  setVar(C: Cover(T)) →
  assume(IsOpenCover(C, T)) →
  apply(ParacompactDef()) →
  obtain(R: Cover(T)) where(
    IsOpenRefinement(R, C, T) ∧ IsLocallyFinite(R, T)
  ) →
  apply(RefinementTransitive()) →
  conclude(IsLocallyFiniteRefinement(R, C, T))
}
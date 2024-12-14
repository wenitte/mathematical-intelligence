theorem Paracompactness_Implies_Sigma_Locally_Finite() {
  assert(
    ∀T(isTopologicalSpace(T) ∧ isParacompact(T) →
      ∀C(isOpenCover(C,T) → ∃R(
        isOpenCover(R,T) ∧ 
        isRefinement(R,C) ∧ 
        isSigmaLocallyFinite(R)
      ))
    )
  )
} ↔

proof Paracompactness_Implies_Sigma_Locally_Finite() {
  setVar(T: TopologicalSpace) →
  assume(isParacompact(T)) →
  setVar(C: OpenCover(T)) →
  
  lemma ParacompactDefinition() {
    assert(
      isParacompact(T) →
      ∀C(isOpenCover(C,T) → ∃R(
        isOpenCover(R,T) ∧
        isRefinement(R,C) ∧
        isLocallyFinite(R)
      ))
    )
  } →

  lemma LocallyFinite_Implies_SigmaLocallyFinite() {
    assert(
      ∀R(isLocallyFinite(R) → isSigmaLocallyFinite(R))
    )
  } →

  apply(ParacompactDefinition()) →
  apply(LocallyFinite_Implies_SigmaLocallyFinite()) →
  
  conclude(
    ∃R(
      isOpenCover(R,T) ∧
      isRefinement(R,C) ∧
      isSigmaLocallyFinite(R)
    )
  )
}
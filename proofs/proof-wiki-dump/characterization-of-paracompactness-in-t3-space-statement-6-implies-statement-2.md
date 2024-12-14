theorem Paracompactness_Characterization() {
  assert(
    ∀T(T = ⟨X,τ⟩ ∧ isTopologicalSpace(T)) ⇒
    (∀U(isOpenCover(U,T) ⇒ ∃V(isOpenSigmaLocallyFiniteRefinement(V,U))) ⇒
    (∀U(isOpenCover(U,T) ⇒ ∃A(isLocallyFiniteRefinement(A,U))))
  )
} ↔

proof Paracompactness_Characterization() {
  setVar(T: TopologicalSpace) →
  assume(∀U(isOpenCover(U,T) ⇒ ∃V(isOpenSigmaLocallyFiniteRefinement(V,U)))) →
  setVar(U: OpenCover(T)) →
  
  assert(∃V(isOpenSigmaLocallyFiniteRefinement(V,U))) →
  letVar(V: OpenCover(T)) →
  assert(isOpenSigmaLocallyFiniteRefinement(V,U)) →
  
  lemma SigmaLocallyFiniteRefinement() {
    assert(∀V(isOpenSigmaLocallyFiniteRefinement(V,U) ⇒ 
           ∃A(isLocallyFiniteRefinement(A,V))))
  } →
  
  apply(SigmaLocallyFiniteRefinement()) →
  letVar(A: OpenCover(T)) →
  assert(isLocallyFiniteRefinement(A,V)) →
  
  lemma RefinementTransitivity() {
    assert(∀A,V,U(
      isRefinement(A,V) ∧ isRefinement(V,U) ⇒ isRefinement(A,U)
    ))
  } →
  
  apply(RefinementTransitivity()) →
  assert(isLocallyFiniteRefinement(A,U)) →
  assert(∀U(isOpenCover(U,T) ⇒ ∃A(isLocallyFiniteRefinement(A,U))))
}
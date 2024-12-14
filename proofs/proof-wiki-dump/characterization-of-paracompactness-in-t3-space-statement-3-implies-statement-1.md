theorem Paracompactness_Characterization() {
  assert(
    ∀T(TopologicalSpace(T) ∧ 
    (∀U(OpenCover(U,T) → ∃V(ClosedLocallyFinite(V,T) ∧ Refinement(V,U))))
    → Paracompact(T))
  )
}

proof Paracompactness_Characterization() {
  setVar(T: TopologicalSpace) →
  assume(∀U(OpenCover(U,T) → ∃V(ClosedLocallyFinite(V,T) ∧ Refinement(V,U)))) →
  setVar(U: OpenCover(T)) →
  assert(∃V(ClosedLocallyFinite(V,T) ∧ Refinement(V,U))) →
  setVar(V: ClosedLocallyFinite(T)) →
  
  define(W ≔ {w ∈ τ | Finite({v ∈ V | v ∩ w ≠ ∅})}) →
  assert(OpenCover(W,T)) →
  
  setVar(A: ClosedLocallyFinite(T) ∧ Refinement(A,W)) →
  
  lemma L4() {
    assert(∀a ∈ A: Finite({v ∈ V | v ∩ a ≠ ∅}))
  } →
  
  define(V* ≔ λv.X \ ∪{a ∈ A | a ∩ v = ∅}) →
  
  lemma L5() {
    assert(∀v ∈ V: v ⊆ v*)
  } →
  
  define(V** ≔ {v* | v ∈ V}) →
  
  lemma L6() {
    assert(OpenLocallyFiniteCover(V**,T))
  } →
  
  setVar(U_v: ∀v ∈ V(∃u ∈ U: v ⊆ u)) →
  define(U* ≔ {v* ∩ U_v | v ∈ V}) →
  
  lemma L7() {
    assert(OpenLocallyFiniteRefinement(U*,U))
  } →
  
  conclude(Paracompact(T))
}
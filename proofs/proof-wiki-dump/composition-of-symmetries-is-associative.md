theorem CompositionSymmetriesAssociative() {
  assert(
    ∀P(GeometricFigure(P) ∧
    ∃S_P(SymmetrySet(S_P, P)) ∧
    ∀φ,ψ,χ ∈ S_P) ⇒
    ((φ ∘ ψ) ∘ χ = φ ∘ (ψ ∘ χ))
  )
} ↔

proof CompositionSymmetriesAssociative() {
  setVar(P: GeometricFigure) →
  setVar(S_P: SymmetrySet(P)) →
  setVar(φ,ψ,χ: S_P) →
  
  lemma CompositionIsSymmetry() {
    assert(
      ∀α,β ∈ S_P ⇒ (α ∘ β) ∈ S_P
    )
  } →
  
  apply(CompositionIsSymmetry()) →
  assert((φ ∘ ψ) ∘ χ ∈ S_P) →
  assert(φ ∘ (ψ ∘ χ) ∈ S_P) →
  
  lemma MappingAssociativity() {
    assert(
      ∀f,g,h(Mapping(f) ∧ Mapping(g) ∧ Mapping(h)) ⇒
      ((f ∘ g) ∘ h = f ∘ (g ∘ h))
    )
  } →
  
  apply(MappingAssociativity()) →
  assert((φ ∘ ψ) ∘ χ = φ ∘ (ψ ∘ χ))
}
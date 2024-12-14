theorem Composite_Homomorphism() {
  let(S1 = ⟨S₁,⊗₁,...,⊗ₙ⟩) ∧
  let(S2 = ⟨S₂,*₁,...,*ₙ⟩) ∧
  let(S3 = ⟨S₃,⊕₁,...,⊕ₙ⟩) ∧
  let(φ: S1 → S2) ∧
  let(ψ: S2 → S3) ∧
  assert(
    isHomomorphism(φ) ∧ isHomomorphism(ψ) →
    isHomomorphism(ψ ∘ φ)
  )
} ↔

proof Composite_Homomorphism() {
  let(composition = ψ ∘ φ) →
  
  lemma MorphismProperty() {
    ∀k ∈ {1,...,n}, ∀x,y ∈ S₁:
    assert(
      composition(x ⊗ₖ y) = composition(x) ⊕ₖ composition(y)
    )
  } →

  proof MorphismProperty() {
    setVar(k ∈ {1,...,n}) →
    setVar(x,y ∈ S₁) →
    
    assert(composition(x ⊗ₖ y) = ψ(φ(x ⊗ₖ y))) by(CompositionDef) →
    assert(ψ(φ(x ⊗ₖ y)) = ψ(φ(x) *ₖ φ(y))) by(φ.isHomomorphism) →
    assert(ψ(φ(x) *ₖ φ(y)) = ψ(φ(x)) ⊕ₖ ψ(φ(y))) by(ψ.isHomomorphism) →
    assert(ψ(φ(x)) ⊕ₖ ψ(φ(y)) = composition(x) ⊕ₖ composition(y)) by(CompositionDef)
  } →

  apply(MorphismProperty()) →
  assert(isHomomorphism(composition))
}
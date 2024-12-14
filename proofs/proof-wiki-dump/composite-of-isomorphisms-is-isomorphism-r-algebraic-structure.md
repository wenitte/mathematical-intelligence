theorem Composite_Isomorphisms_Is_Isomorphism() {
  assert(
    ∀S₁,S₂,S₃ ∈ R-AlgebraicStructures ∧
    ∀φ: S₁ → S₂ ∧
    ∀ψ: S₂ → S₃ ∧
    isIsomorphism(φ) ∧
    isIsomorphism(ψ) ⇒
    isIsomorphism(ψ ∘ φ)
  )
} ↔

proof Composite_Isomorphisms_Is_Isomorphism() {
  setVar(S₁,S₂,S₃: R-AlgebraicStructures) →
  setVar(φ: S₁ → S₂) →
  setVar(ψ: S₂ → S₃) →
  
  assert(isIsomorphism(φ) ↔ (isHomomorphism(φ) ∧ isBijection(φ))) →
  assert(isIsomorphism(ψ) ↔ (isHomomorphism(ψ) ∧ isBijection(ψ))) →
  
  lemma Composite_Homomorphisms() {
    assert(
      isHomomorphism(φ) ∧ isHomomorphism(ψ) ⇒
      isHomomorphism(ψ ∘ φ)
    )
  } →
  
  lemma Composite_Bijections() {
    assert(
      isBijection(φ) ∧ isBijection(ψ) ⇒
      isBijection(ψ ∘ φ)
    )
  } →
  
  apply(Composite_Homomorphisms()) →
  apply(Composite_Bijections()) →
  
  assert(isHomomorphism(ψ ∘ φ) ∧ isBijection(ψ ∘ φ)) →
  assert(isIsomorphism(ψ ∘ φ))
}
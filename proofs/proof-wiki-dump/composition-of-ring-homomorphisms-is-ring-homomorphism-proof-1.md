theorem CompositeRingHomomorphism() {
  assert(
    ∀R₁,R₂,R₃: Ring ∧
    ∀φ: R₁ → R₂ ∧
    ∀ψ: R₂ → R₃ ∧
    isHomomorphism(φ) ∧
    isHomomorphism(ψ) ⇒
    isHomomorphism(ψ ∘ φ)
  )
} ↔

proof CompositeRingHomomorphism() {
  setStruct(R₁: Ring{+₁,⊙₁}) →
  setStruct(R₂: Ring{+₂,⊙₂}) →
  setStruct(R₃: Ring{+₃,⊙₃}) →
  setMap(φ: R₁ → R₂) →
  setMap(ψ: R₂ → R₃) →
  
  lemma GeneralAlgebraicComposition() {
    assert(
      ∀S₁,S₂,S₃: AlgebraicStructure ∧
      ∀f: S₁ → S₂ ∧
      ∀g: S₂ → S₃ ∧
      isHomomorphism(f) ∧
      isHomomorphism(g) ⇒
      isHomomorphism(g ∘ f)
    )
  } →
  
  assert(Ring ⊆ AlgebraicStructure) →
  apply(GeneralAlgebraicComposition()) →
  assert(isHomomorphism(ψ ∘ φ))
}
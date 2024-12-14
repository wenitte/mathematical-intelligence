theorem CompositionRingHomomorphisms() {
  assert(
    ∀R₁,R₂,R₃[Ring(R₁,+₁,⊙₁) ∧ Ring(R₂,+₂,⊙₂) ∧ Ring(R₃,+₃,⊙₃) ∧
    Homomorphism(φ: R₁→R₂) ∧ Homomorphism(ψ: R₂→R₃) ⇒
    Homomorphism(ψ∘φ: R₁→R₃)]
  )
} ↔

proof CompositionRingHomomorphisms() {
  setVar(x,y: R₁) →
  
  lemma AdditionPreservation() {
    assert((ψ∘φ)(x +₁ y)) →
    assert(ψ(φ(x +₁ y))) by CompositionDef →
    assert(ψ(φ(x) +₂ φ(y))) by HomomorphismProp(φ) →
    assert(ψ(φ(x)) +₃ ψ(φ(y))) by HomomorphismProp(ψ) →
    assert((ψ∘φ)(x) +₃ (ψ∘φ)(y)) by CompositionDef
  } →

  lemma MultiplicationPreservation() {
    assert((ψ∘φ)(x ⊙₁ y)) →
    assert(ψ(φ(x ⊙₁ y))) by CompositionDef →
    assert(ψ(φ(x) ⊙₂ φ(y))) by HomomorphismProp(φ) →
    assert(ψ(φ(x)) ⊙₃ ψ(φ(y))) by HomomorphismProp(ψ) →
    assert((ψ∘φ)(x) ⊙₃ (ψ∘φ)(y)) by CompositionDef
  } →

  apply(AdditionPreservation()) →
  apply(MultiplicationPreservation()) →
  
  assert(
    Homomorphism(ψ∘φ: R₁→R₃)
  ) by HomomorphismDef
}
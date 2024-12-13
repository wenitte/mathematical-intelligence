theorem Canonical_Injection_Monomorphism() {
  assert(
    ∀G₁,G₂[
      isGroup(G₁,∘₁) ∧ isGroup(G₂,∘₂) ∧
      e₁ = identity(G₁) ∧ e₂ = identity(G₂) ∧
      G₁×G₂ = directProduct(G₁,G₂) →
      isMonomorphism(inj₁: G₁ → G₁×G₂) ∧ 
      isMonomorphism(inj₂: G₂ → G₁×G₂)
    ]
  ) where
    inj₁(x) = (x,e₂) ∀x ∈ G₁,
    inj₂(x) = (e₁,x) ∀x ∈ G₂
}

proof Canonical_Injection_Monomorphism() {
  setVar(G₁,G₂: Group) →
  lemma Injectivity() {
    assert(
      isInjective(inj₁) ∧ isInjective(inj₂)
    ) by Canonical_Injection_is_Injection()
  } →
  
  lemma Morphism_Property() {
    setVar(x,y: G₁) →
    assert(
      inj₁(x ∘₁ y) 
      = (x ∘₁ y, e₂)                   // by def(inj₁)
      = (x ∘₁ y, e₂ ∘₂ e₂)             // by identity_property
      = (x,e₂) ∘ (y,e₂)                // by def(directProduct)
      = inj₁(x) ∘ inj₁(y)              // by def(inj₁)
    ) →
    conclude(isMorphism(inj₁))
  } →

  assert(
    isInjective(inj₁) ∧ isMorphism(inj₁) → 
    isMonomorphism(inj₁)
  ) →
  
  lemma Similar_For_Inj2() {
    assert(
      analogousProof(inj₂)
    )
  } →
  
  conclude(
    isMonomorphism(inj₁) ∧ isMonomorphism(inj₂)
  )
}
theorem Canonical_Injection_Is_Monomorphism() {
  assert(
    ∀S₁,S₂[
      AlgebraicStructure(S₁,∘₁) ∧ 
      AlgebraicStructure(S₂,∘₂) ∧
      HasIdentity(S₁,e₁) ∧ 
      HasIdentity(S₂,e₂) 
      ⇒ 
      (∀inj₁: S₁ → S₁×S₂ | ∀x∈S₁: inj₁(x) = (x,e₂)) ∧
      (∀inj₂: S₂ → S₁×S₂ | ∀x∈S₂: inj₂(x) = (e₁,x)) 
      ⇒ 
      IsMonomorphism(inj₁) ∧ IsMonomorphism(inj₂)
    ]
  )
} ↔

proof Canonical_Injection_Is_Monomorphism() {
  lemma IsInjective() {
    assert(
      ∀x,y∈S₁[
        inj₁(x) = inj₁(y) ⇒ x = y
      ]
    )
  } →

  lemma MorphismProperty() {
    setVar(x,y: S₁) →
    assert(
      inj₁(x ∘₁ y) = (x ∘₁ y, e₂)
    ) →
    assert(
      (x ∘₁ y, e₂) = (x ∘₁ y, e₂ ∘₂ e₂)
    ) →
    assert(
      (x ∘₁ y, e₂ ∘₂ e₂) = ((x,e₂) ∘ (y,e₂))
    ) →
    assert(
      ((x,e₂) ∘ (y,e₂)) = inj₁(x) ∘ inj₁(y)
    )
  } →

  apply(IsInjective()) →
  apply(MorphismProperty()) →
  
  assert(
    IsInjective(inj₁) ∧ IsMorphism(inj₁) ⇒ IsMonomorphism(inj₁)
  ) →
  
  assert(
    "Same argument applies symmetrically for inj₂"
  ) →
  
  conclude(
    IsMonomorphism(inj₁) ∧ IsMonomorphism(inj₂)
  )
}
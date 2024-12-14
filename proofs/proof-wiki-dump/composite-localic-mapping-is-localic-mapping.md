theorem Composite_Localic_Mapping() {
  assert(
    ∀L₁,L₂,L₃[
      (L₁ = ⟨S₁,⪯₁⟩ ∧ L₂ = ⟨S₂,⪯₂⟩ ∧ L₃ = ⟨S₃,⪯₃⟩) ∧
      isLocale(L₁) ∧ isLocale(L₂) ∧ isLocale(L₃) ∧
      f₁: L₁ → L₂ ∧ f₂: L₂ → L₃ ∧
      isLocalicMapping(f₁) ∧ isLocalicMapping(f₂)
    ] ⇒ isLocalicMapping(f₂ ∘ f₁)
  )
} ↔

proof Composite_Localic_Mapping() {
  setVar(L₁,L₂,L₃: Locale) →
  setVar(f₁: L₁ → L₂, f₂: L₂ → L₃) →
  
  lemma LocalicMappingDef() {
    assert(
      ∃d₁,d₂[
        d₁: L₂ → L₁ ∧ d₂: L₃ → L₂ ∧
        isFrameHomomorphism(d₁) ∧ isFrameHomomorphism(d₂) ∧
        isGaloisConnection(⟨f₁,d₁⟩) ∧ isGaloisConnection(⟨f₂,d₂⟩) ∧
        isUpperAdjoint(f₁) ∧ isUpperAdjoint(f₂)
      ]
    )
  } →

  lemma CompositeFrameHomomorphism() {
    assert(
      isFrameHomomorphism(d₁ ∘ d₂)
    )
  } →

  lemma CompositeGaloisConnection() {
    assert(
      isGaloisConnection(⟨f₂ ∘ f₁, d₁ ∘ d₂⟩)
    )
  } →

  apply(CompositeFrameHomomorphism()) →
  apply(CompositeGaloisConnection()) →
  assert(isUpperAdjoint(f₂ ∘ f₁)) →
  assert(isLocalicMapping(f₂ ∘ f₁))
}
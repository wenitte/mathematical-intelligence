theorem Component_Mappings_Coproduct_Injective() {
  assert(
    ∀S₁,S₂[sets] ∧
    ∀C,i₁,i₂[maps] ∧
    isCoproduct(⟨C,i₁,i₂⟩, S₁, S₂) →
    isInjective(i₁) ∧ isInjective(i₂)
  )
} ↔

proof Component_Mappings_Coproduct_Injective() {
  defineCoproduct() {
    assert(
      ∀X[set] ∧ ∀f₁[S₁→X] ∧ ∀f₂[S₂→X] →
      ∃!h[C→X](h∘i₁=f₁ ∧ h∘i₂=f₂)
    )
  } →
  
  // Prove i₁ is injective
  setVar(X := S₁) →
  setVar(f₁ := I_{S₁}) →
  assert(h∘i₁ = I_{S₁}) →
  lemma Identity_Is_Injection() {
    assert(isInjective(I_{S₁}))
  } →
  lemma Injection_Composite() {
    assert(
      isInjective(h∘i₁) → isInjective(i₁)
    )
  } →
  apply(Identity_Is_Injection()) →
  apply(Injection_Composite()) →
  assert(isInjective(i₁)) →
  
  // Prove i₂ is injective
  setVar(X := S₂) →
  setVar(f₂ := I_{S₂}) →
  assert(h∘i₂ = I_{S₂}) →
  apply(Identity_Is_Injection()) →
  apply(Injection_Composite()) →
  assert(isInjective(i₂)) →
  
  conclude(isInjective(i₁) ∧ isInjective(i₂))
}
theorem CartesianProduct_Homeomorphism() {
  assert(
    ∀S₁,S₂,T₁,T₂ ∈ TopologicalSpace ∧
    ∀f₁: S₁ → T₁ ∧
    ∀f₂: S₂ → T₂ ∧
    ∀(x,y) ∈ S₁ × S₂ ∧
    (f₁ × f₂)(x,y) = (f₁(x), f₂(y)) ∧
    isHomeomorphism(f₁) ∧
    isHomeomorphism(f₂)
    ⇒
    isHomeomorphism(f₁ × f₂)
  )
} ↔

proof CartesianProduct_Homeomorphism() {
  setVar(f₁: S₁ → T₁) →
  setVar(f₂: S₂ → T₂) →
  
  lemma L1_ContinuousFactors() {
    assert(
      isContinuous(f₁) ∧ isContinuous(f₂)
      ⇒ isContinuous(f₁ × f₂)
    )
  } →
  
  lemma L2_BijectiveProduct() {
    assert(
      isBijective(f₁) ∧ isBijective(f₂)
      ⇒ isBijective(f₁ × f₂)
    )
  } →
  
  lemma L3_InverseContinuous() {
    assert(
      (f₁ × f₂)⁻¹ = f₁⁻¹ × f₂⁻¹ ∧
      isContinuous(f₁⁻¹) ∧ isContinuous(f₂⁻¹)
      ⇒ isContinuous((f₁ × f₂)⁻¹)
    )
  } →
  
  apply(L1_ContinuousFactors()) →
  apply(L2_BijectiveProduct()) →
  apply(L3_InverseContinuous()) →
  
  assert(
    isContinuous(f₁ × f₂) ∧
    isBijective(f₁ × f₂) ∧
    isContinuous((f₁ × f₂)⁻¹)
    ⇒ isHomeomorphism(f₁ × f₂)
  )
}
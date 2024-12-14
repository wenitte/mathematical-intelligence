theorem Complex_Dot_Product_Exponential_Form() {
  assert(
    ∀z₁,z₂ ∈ ℂ,
    (z₁ = r₁e^(iθ₁) ∧ z₂ = r₂e^(iθ₂)) →
    (z₁ ∘ z₂ = r₁r₂cos(θ₂ - θ₁))
  )
} ↔

proof Complex_Dot_Product_Exponential_Form() {
  setVar(z₁,z₂: ℂ) →
  setVar(r₁,r₂,θ₁,θ₂: ℝ) →
  
  assert(z₁ ∘ z₂ = Re(z̄₁z₂)) →
  
  lemma Complex_Conjugate_Exponential() {
    assert(
      z̄₁ = r₁e^(-iθ₁)
    )
  } →
  
  apply(Complex_Conjugate_Exponential()) →
  assert(z₁ ∘ z₂ = Re(r₁e^(-iθ₁)r₂e^(iθ₂))) →
  
  lemma Complex_Exponential_Product() {
    assert(
      r₁e^(-iθ₁)r₂e^(iθ₂) = r₁r₂e^(i(θ₂-θ₁))
    )
  } →
  
  apply(Complex_Exponential_Product()) →
  assert(z₁ ∘ z₂ = Re(r₁r₂e^(i(θ₂-θ₁)))) →
  
  lemma Polar_Form_Complex() {
    assert(
      e^(iφ) = cos(φ) + isin(φ)
    )
  } →
  
  apply(Polar_Form_Complex()) →
  assert(z₁ ∘ z₂ = Re(r₁r₂(cos(θ₂-θ₁) + isin(θ₂-θ₁)))) →
  
  lemma Real_Part_Definition() {
    assert(
      Re(a + bi) = a
    )
  } →
  
  apply(Real_Part_Definition()) →
  assert(z₁ ∘ z₂ = r₁r₂cos(θ₂-θ₁))
}
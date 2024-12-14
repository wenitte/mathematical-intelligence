theorem Complex_Cross_Product_Exponential() {
  assert(
    ∀z₁,z₂ ∈ ℂ where z₁ = r₁e^{iθ₁} ∧ z₂ = r₂e^{iθ₂} ⇒
    z₁ × z₂ = r₁r₂ sin(θ₂ - θ₁)
  )
} ↔

proof Complex_Cross_Product_Exponential() {
  setVar(z₁,z₂: ℂ) →
  setVar(r₁,r₂,θ₁,θ₂: ℝ) →
  
  assert(z₁ × z₂ = Im(z̄₁z₂)) by(Complex_Cross_Product_Def3) →
  
  assert(z̄₁ = r₁e^{-iθ₁}) by(Complex_Conjugate_Exponential) →
  
  assert(Im(z̄₁z₂) = Im(r₁e^{-iθ₁}r₂e^{iθ₂})) by(SubstitutionRule) →
  
  assert(r₁e^{-iθ₁}r₂e^{iθ₂} = r₁r₂e^{i(θ₂-θ₁)}) by(Complex_Exponential_Product) →
  
  assert(r₁r₂e^{i(θ₂-θ₁)} = r₁r₂(cos(θ₂-θ₁) + i·sin(θ₂-θ₁))) by(Complex_Polar_Form) →
  
  assert(Im(r₁r₂(cos(θ₂-θ₁) + i·sin(θ₂-θ₁))) = r₁r₂sin(θ₂-θ₁)) by(Imaginary_Part_Def) →
  
  conclude(z₁ × z₂ = r₁r₂sin(θ₂-θ₁))
}
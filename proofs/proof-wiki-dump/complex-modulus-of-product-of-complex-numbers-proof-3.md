theorem Complex_Modulus_Product() {
  assert(
    ∀z₁,z₂ ∈ ℂ ⇒ |z₁z₂| = |z₁|·|z₂|
  )
} ↔

proof Complex_Modulus_Product() {
  setVar(z₁,z₂: ℂ) →
  setVar(r₁,r₂,θ₁,θ₂: ℝ) →
  
  assert(z₁ = r₁(cos θ₁ + i sin θ₁)) ∧
  assert(z₂ = r₂(cos θ₂ + i sin θ₂)) →
  
  lemma ProductPolarForm() {
    assert(
      z₁z₂ = r₁r₂(cos(θ₁ + θ₂) + i sin(θ₁ + θ₂))
    )
  } →
  
  apply(ProductPolarForm()) →
  
  assert(|z₁z₂| = |r₁r₂(cos(θ₁ + θ₂) + i sin(θ₁ + θ₂))|) →
  
  lemma ModulusPolarForm() {
    assert(
      ∀r,θ ∈ ℝ ⇒ |r(cos θ + i sin θ)| = |r|
    )
  } →
  
  apply(ModulusPolarForm()) →
  
  assert(|z₁z₂| = r₁r₂) →
  assert(|z₁| = r₁ ∧ |z₂| = r₂) →
  assert(|z₁z₂| = |z₁|·|z₂|)
}
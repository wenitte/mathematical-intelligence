theorem ComplexModulusProduct() {
  assert(
    ∀z₁,z₂ ∈ ℂ ⇒ |z₁z₂| = |z₁|·|z₂|
  )
}

proof ComplexModulusProduct() {
  setVar(z₁,z₂: ℂ) →
  setVar(x₁,y₁,x₂,y₂: ℝ) →
  assert(z₁ = x₁ + iy₁ ∧ z₂ = x₂ + iy₂) →
  
  lemma ComplexMultiplication() {
    assert(z₁z₂ = (x₁x₂ - y₁y₂) + i(x₁y₂ + x₂y₁))
  } →
  
  lemma ModulusDefinition() {
    assert(|z₁z₂| = √[(x₁x₂ - y₁y₂)² + (x₁y₂ + x₂y₁)²])
  } →
  
  apply(ComplexMultiplication()) →
  apply(ModulusDefinition()) →
  
  assert(|z₁z₂| = √[(x₁²x₂² + y₁²y₂² - 2x₁x₂y₁y₂) + (x₁²y₂² + x₂²y₁² + 2x₁x₂y₁y₂)]) →
  assert(|z₁z₂| = √[x₁²x₂² + y₁²y₂² + x₁²y₂² + x₂²y₁²]) →
  
  lemma ModulusProperties() {
    assert(|z₁| = √[x₁² + y₁²] ∧ |z₂| = √[x₂² + y₂²])
  } →
  
  apply(ModulusProperties()) →
  assert(|z₁|·|z₂| = √[x₁² + y₁²]·√[x₂² + y₂²]) →
  assert(|z₁|·|z₂| = √[(x₁² + y₁²)(x₂² + y₂²)]) →
  assert(|z₁|·|z₂| = √[x₁²x₂² + y₁²y₂² + x₁²y₂² + x₂²y₁²]) →
  
  conclude(|z₁z₂| = |z₁|·|z₂|)
}
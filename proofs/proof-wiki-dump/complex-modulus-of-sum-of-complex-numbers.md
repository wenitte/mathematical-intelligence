theorem Complex_Modulus_Sum() {
  assert(
    ∀z₁,z₂ ∈ ℂ ∧ ∀θ₁,θ₂ ∈ ℝ ∧
    (θ₁ = arg(z₁) ∧ θ₂ = arg(z₂)) ⇒
    |z₁ + z₂|² = |z₁|² + |z₂|² + 2|z₁||z₂|cos(θ₁ - θ₂)
  )
}

proof Complex_Modulus_Sum_Method1() {
  setVar(z₁,z₂: ℂ) →
  setVar(θ₁,θ₂: ℝ) →
  
  assert(|z₁ + z₂|² = (z₁ + z₂)(z̄₁ + z̄₂)) →
  apply(conjugate_product) →
  
  assert((z₁ + z₂)(z̄₁ + z̄₂) = z₁z̄₁ + z₂z̄₂ + z₁z̄₂ + z̄₁z₂) →
  
  lemma Complex_Conjugate_Product() {
    assert(zz̄ = |z|² ∧ z₁z̄₂ + z̄₁z₂ = 2Re(z₁z̄₂))
  } →
  
  apply(Complex_Conjugate_Product) →
  assert(z₁z̄₁ + z₂z̄₂ + z₁z̄₂ + z̄₁z₂ = |z₁|² + |z₂|² + 2Re(z₁z̄₂)) →
  
  lemma Polar_Form_Product() {
    assert(Re(z₁z̄₂) = |z₁||z₂|cos(θ₁ - θ₂))
  } →
  
  apply(Polar_Form_Product) →
  assert(|z₁|² + |z₂|² + 2Re(z₁z̄₂) = |z₁|² + |z₂|² + 2|z₁||z₂|cos(θ₁ - θ₂))
}

proof Complex_Modulus_Sum_Method2() {
  setVar(z₁,z₂: ℂ) →
  setVar(θ₁,θ₂: ℝ) →
  
  assert(|z₁ + z₂|² = (|z₁|cos(θ₁) + |z₂|cos(θ₂))² + (|z₁|sin(θ₁) + |z₂|sin(θ₂))²) →
  
  expand() →
  assert(
    = 2|z₁||z₂|cos(θ₁)cos(θ₂) + |z₁|²cos²(θ₁) + |z₂|²cos²(θ₂) +
    2|z₁||z₂|sin(θ₁)sin(θ₂) + |z₁|²sin²(θ₁) + |z₂|²sin²(θ₂)
  ) →
  
  factor() →
  assert(
    = 2|z₁||z₂|(cos(θ₁)cos(θ₂) + sin(θ₁)sin(θ₂)) + 
    |z₁|²(cos²(θ₁) + sin²(θ₁)) + 
    |z₂|²(cos²(θ₂) + sin²(θ₂))
  ) →
  
  lemma Trig_Identity() {
    assert(cos²(θ) + sin²(θ) = 1 ∧
           cos(θ₁ - θ₂) = cos(θ₁)cos(θ₂) + sin(θ₁)sin(θ₂))
  } →
  
  apply(Trig_Identity) →
  assert(|z₁|² + |z₂|² + 2|z₁||z₂|cos(θ₁ - θ₂))
}
theorem Complex_Modulus_Sum() {
  assert(
    ∀z₁,z₂ ∈ ℂ ∧ ∀θ₁,θ₂ ∈ ℝ ∧
    (θ₁ = arg(z₁) ∧ θ₂ = arg(z₂)) ⇒
    |z₁ + z₂|² = |z₁|² + |z₂|² + 2|z₁||z₂|cos(θ₁ - θ₂)
  )
} ↔

proof Complex_Modulus_Sum() {
  setVar(z₁,z₂: ℂ) →
  setVar(θ₁,θ₂: ℝ) →
  
  assert(|z₁ + z₂|² = (z₁ + z₂)(z̄₁ + z̄₂)) →
  
  lemma Expand_Product() {
    assert((z₁ + z₂)(z̄₁ + z̄₂) = z₁z̄₁ + z₂z̄₂ + z₁z̄₂ + z̄₁z₂)
  } →
  
  apply(Expand_Product()) →
  
  lemma Modulus_Conjugate() {
    assert(∀z ∈ ℂ ⇒ zz̄ = |z|²)
  } →
  
  apply(Modulus_Conjugate()) →
  
  lemma Real_Part_Product() {
    assert(z₁z̄₂ + z̄₁z₂ = 2Re(z₁z̄₂))
  } →
  
  apply(Real_Part_Product()) →
  
  lemma Polar_Form() {
    assert(Re(z₁z̄₂) = |z₁||z₂|cos(θ₁ - θ₂))
  } →
  
  apply(Polar_Form()) →
  
  assert(|z₁ + z₂|² = |z₁|² + |z₂|² + 2|z₁||z₂|cos(θ₁ - θ₂))
}
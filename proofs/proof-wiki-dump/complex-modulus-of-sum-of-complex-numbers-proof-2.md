theorem ComplexModulusSumSquared() {
  assert(
    ∀z₁,z₂ ∈ ℂ, ∀θ₁,θ₂ ∈ ℝ ⇒ 
    (arg(z₁) = θ₁ ∧ arg(z₂) = θ₂) →
    |z₁ + z₂|² = |z₁|² + |z₂|² + 2|z₁||z₂|cos(θ₁ - θ₂)
  )
} ↔

proof ComplexModulusSumSquared() {
  setVar(z₁,z₂: ℂ, θ₁,θ₂: ℝ) →
  
  lemma ComplexModulusDefinition() {
    assert(
      |z₁ + z₂|² = 
      (|z₁|cos(θ₁) + |z₂|cos(θ₂))² + (|z₁|sin(θ₁) + |z₂|sin(θ₂))²
    )
  } →

  lemma ExpandSquares() {
    assert(
      (|z₁|cos(θ₁) + |z₂|cos(θ₂))² + (|z₁|sin(θ₁) + |z₂|sin(θ₂))² =
      2|z₁||z₂|cos(θ₁)cos(θ₂) + |z₁|²cos²(θ₁) + |z₂|²cos²(θ₂) +
      2|z₁||z₂|sin(θ₁)sin(θ₂) + |z₁|²sin²(θ₁) + |z₂|²sin²(θ₂)
    )
  } →

  lemma SineCosineSquares() {
    assert(
      ∀θ ∈ ℝ ⇒ sin²(θ) + cos²(θ) = 1
    )
  } →

  lemma CosineOfDifference() {
    assert(
      cos(θ₁ - θ₂) = cos(θ₁)cos(θ₂) + sin(θ₁)sin(θ₂)
    )
  } →

  apply(ComplexModulusDefinition()) →
  apply(ExpandSquares()) →
  apply(SineCosineSquares()) →
  apply(CosineOfDifference()) →
  
  assert(|z₁ + z₂|² = |z₁|² + |z₂|² + 2|z₁||z₂|cos(θ₁ - θ₂))
}
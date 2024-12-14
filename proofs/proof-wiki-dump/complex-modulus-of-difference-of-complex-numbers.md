theorem Complex_Modulus_Difference() {
  assert(
    ∀z₁,z₂ ∈ ℂ,
    ∀θ₁,θ₂ ∈ ℝ where (
      arg(z₁) = θ₁ ∧
      arg(z₂) = θ₂
    ) ⇒
    |z₁ - z₂|² = |z₁|² + |z₂|² - 2|z₁||z₂|cos(θ₁ - θ₂)
  )
}

proof Complex_Modulus_Difference() {
  setVar(z₁,z₂: ℂ) →
  setVar(θ₁,θ₂: ℝ) →
  
  lemma Arg_Additive_Inverse() {
    assert(
      arg(-z₂) = θ₂ + π
    )
  } →

  lemma Complex_Modulus_Sum() {
    assert(
      ∀a,b ∈ ℂ,
      ∀α,β ∈ ℝ where (
        arg(a) = α ∧
        arg(b) = β
      ) ⇒
      |a + b|² = |a|² + |b|² + 2|a||b|cos(α - β)
    )
  } →

  apply(Complex_Modulus_Sum(), z₁, -z₂) →
  assert(|z₁ - z₂|² = |z₁|² + |-z₂|² + 2|z₁||-z₂|cos(θ₁ - (θ₂ + π))) →
  
  lemma Complex_Modulus_Negative() {
    assert(|-z₂| = |z₂|)
  } →
  
  assert(cos(θ₁ - (θ₂ + π)) = -cos(θ₁ - θ₂)) →
  assert(|z₁ - z₂|² = |z₁|² + |z₂|² - 2|z₁||z₂|cos(θ₁ - θ₂))
}
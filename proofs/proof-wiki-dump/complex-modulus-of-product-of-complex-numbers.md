theorem Complex_Modulus_Product() {
  assert(
    ∀z₁,z₂ ∈ ℂ ⇒ |z₁z₂| = |z₁|·|z₂|
  )
} ↔

proof Complex_Modulus_Product_1() {
  setVar(z₁ = x₁ + iy₁: ℂ) ∧
  setVar(z₂ = x₂ + iy₂: ℂ) →
  assert(|z₁z₂| = √((x₁x₂ - y₁y₂)² + (x₁y₂ + x₂y₁)²)) →
  expand() →
  assert(|z₁z₂| = √(x₁²x₂² + y₁²y₂² - 2x₁x₂y₁y₂ + x₁²y₂² + x₂²y₁² + 2x₁x₂y₁y₂)) →
  simplify() →
  assert(|z₁z₂| = √(x₁²x₂² + y₁²y₂² + x₁²y₂² + x₂²y₁²)) →
  assert(|z₁|·|z₂| = √(x₁² + y₁²)·√(x₂² + y₂²)) →
  assert(|z₁|·|z₂| = √((x₁² + y₁²)(x₂² + y₂²))) →
  assert(|z₁|·|z₂| = √(x₁²x₂² + y₁²y₂² + x₁²y₂² + x₂²y₁²)) →
  conclude(|z₁z₂| = |z₁|·|z₂|)
} ↔

proof Complex_Modulus_Product_2() {
  setNotation(z̄: "complex conjugate of z") →
  assert(|z₁z₂| = √((z₁z₂)(z₁z₂)̄)) →
  assert(|z₁z₂| = √(z₁z̄₁z₂z̄₂)) →
  assert(|z₁z₂| = √(z₁z̄₁)·√(z₂z̄₂)) →
  assert(|z₁z₂| = |z₁|·|z₂|)
} ↔

proof Complex_Modulus_Product_3() {
  setVar(z₁ = r₁(cos θ₁ + i sin θ₁): ℂ) ∧
  setVar(z₂ = r₂(cos θ₂ + i sin θ₂): ℂ) →
  assert(|z₁z₂| = |r₁(cos θ₁ + i sin θ₁)r₂(cos θ₂ + i sin θ₂)|) →
  assert(|z₁z₂| = |r₁r₂(cos(θ₁ + θ₂) + i sin(θ₁ + θ₂))|) →
  assert(|z₁z₂| = r₁r₂) →
  assert(|z₁z₂| = |z₁|·|z₂|)
}
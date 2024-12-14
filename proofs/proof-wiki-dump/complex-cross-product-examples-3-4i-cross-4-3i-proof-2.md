theorem Complex_Cross_Product_Example() {
  assert(
    ∀z₁,z₂ ∈ ℂ, z₁ = 3 - 4i ∧ z₂ = -4 + 3i →
    z₁ × z₂ = -7
  )
} ↔

proof Complex_Cross_Product_Example() {
  setVar(z₁: ℂ, z₂: ℂ) →
  assign(z₁ = 3 - 4i) →
  assign(z₂ = -4 + 3i) →
  
  assert(z₁ × z₂ = (3 - 4i) × (-4 + 3i)) →
  
  lemma Complex_Cross_Product_Definition() {
    assert(
      ∀a,b,c,d ∈ ℝ, (a + bi) × (c + di) = ac - bd
    )
  } →
  
  apply(Complex_Cross_Product_Definition()) →
  assert(z₁ × z₂ = 3(3) - (-4)(-4)) →
  assert(z₁ × z₂ = 9 - 16) →
  assert(z₁ × z₂ = -7)
}
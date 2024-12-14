theorem Complex_Cross_Product() {
  assert(
    ∀z₁,z₂ ∈ ℂ where
    z₁ = 2 + 5i ∧
    z₂ = 3 - i →
    z₁ × z₂ = -17
  )
} ↔

proof Complex_Cross_Product() {
  setVar(z₁: ℂ = 2 + 5i) →
  setVar(z₂: ℂ = 3 - i) →
  
  assert(z₁ × z₂) →
  assert((2 + 5i) × (3 - i)) →
  
  lemma ComplexCrossProduct_Definition() {
    assert(
      ∀a,b,c,d ∈ ℝ where
      z₁ = a + bi ∧
      z₂ = c + di →
      z₁ × z₂ = (ad - bc)
    )
  } →
  
  apply(ComplexCrossProduct_Definition()) →
  assert(2 × (-1) - 3 × 5) →
  assert(-2 - 15) →
  assert(-17)
}
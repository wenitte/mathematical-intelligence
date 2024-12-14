theorem Complex_Cross_Product_Example() {
  assert(
    let z₁ = 3 - i ∧
    let z₂ = 2 + 5i →
    z₁ × z₂ = 17
  )
} ↔

proof Complex_Cross_Product_Example() {
  setVar(z₁: ℂ = 3 - i) →
  setVar(z₂: ℂ = 2 + 5i) →
  
  lemma Cross_Product_Def() {
    assert(
      ∀a,b,c,d ∈ ℝ →
      (a + bi) × (c + di) = ac - (-1)bd
    )
  } →

  assert(z₁ × z₂ = (3 - i) × (2 + 5i)) →
  apply(Cross_Product_Def()) →
  assert(z₁ × z₂ = 3 × 5 - (-1) × 2) →
  assert(z₁ × z₂ = 15 - (-2)) →
  assert(z₁ × z₂ = 17)
}
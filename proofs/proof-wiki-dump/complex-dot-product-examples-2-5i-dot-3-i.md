theorem Complex_Dot_Product_Example() {
  assert(
    let z₁ = 2 + 5i ∧
    let z₂ = 3 - i →
    z₁ ∘ z₂ = 1
  )
} ↔

proof Complex_Dot_Product_Example() {
  setVar(z₁ = 2 + 5i) →
  setVar(z₂ = 3 - i) →
  
  assert(z₁ ∘ z₂) →
  assert((2 + 5i) ∘ (3 - i)) →
  
  lemma Dot_Product_Definition() {
    assert(
      ∀a,b,c,d ∈ ℝ →
      (a + bi) ∘ (c + di) = ac + bd
    )
  } →
  
  apply(Dot_Product_Definition()) →
  assert(2 × 3 + 5 × (-1)) →
  assert(6 - 5) →
  assert(1) →
  conclude(z₁ ∘ z₂ = 1)
}
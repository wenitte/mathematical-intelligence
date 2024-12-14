theorem Complex_Dot_Product_Example() {
  let(z₁ = 3 - i, z₂ = 2 + 5i)
  assert(
    z₁ ∘ z₂ = 1
  )
} ↔

proof Complex_Dot_Product_Example() {
  let(z₁ = 3 - i, z₂ = 2 + 5i) →
  assert(z₁ ∘ z₂) →
  assert((3 - i) ∘ (2 + 5i)) →
  apply(Dot_Product_Definition: 
    ∀a,b,c,d ∈ ℝ ⇒ (a + bi) ∘ (c + di) = ac + bd
  ) →
  assert(3 × 2 + (-1) × 5) →
  assert(6 - 5) →
  assert(1)
}
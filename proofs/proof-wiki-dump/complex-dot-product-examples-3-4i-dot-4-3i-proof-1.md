theorem Complex_Dot_Product_Example() {
  assert(
    let z₁ = 3 - 4i,
    let z₂ = -4 + 3i,
    z₁ ∘ z₂ = -24
  )
} ↔

proof Complex_Dot_Product_Example() {
  setDef(dot_product: z₁ ∘ z₂ = Re(z̄₁z₂)) →
  assert(z̄₁ = 3 + 4i) →
  calc {
    z₁ ∘ z₂ 
    = Re((3 + 4i)(-4 + 3i)) →
    = Re((-12 + 9i) + (4i(-4) + 4i(3i))) →
    = Re(-12 + 9i - 16i - 12) →
    = Re(-24 + (-7i)) →
    = -24
  } →
  qed()
}
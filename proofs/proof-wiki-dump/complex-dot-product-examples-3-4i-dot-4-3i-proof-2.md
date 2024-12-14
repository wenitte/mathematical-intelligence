theorem Complex_Dot_Product_Example() {
  assert(
    ∀z₁,z₂ ∈ ℂ [z₁ = 3 - 4i ∧ z₂ = -4 + 3i] ⇒ 
    z₁ ∘ z₂ = -24
  )
} ↔

proof Complex_Dot_Product_Example() {
  setVar(z₁: ℂ = 3 - 4i) →
  setVar(z₂: ℂ = -4 + 3i) →
  
  assert(z₁ ∘ z₂ = (3 - 4i) ∘ (-4 + 3i)) →

  lemma Dot_Product_Definition() {
    assert(
      ∀a,b,c,d ∈ ℝ [z₁ = a + bi ∧ z₂ = c + di] ⇒
      z₁ ∘ z₂ = ac + bd
    )
  } →

  apply(Dot_Product_Definition()) →
  assert(z₁ ∘ z₂ = 3×(-4) + (-4)×3) →
  assert(z₁ ∘ z₂ = -12 + (-12)) →
  assert(z₁ ∘ z₂ = -24)
}
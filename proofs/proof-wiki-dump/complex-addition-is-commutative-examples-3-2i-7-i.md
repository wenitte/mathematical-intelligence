theorem Complex_Addition_Commutative_Example() {
  assert(
    ∀z₁,z₂ ∈ ℂ: (z₁ = 3 + 2i ∧ z₂ = -7 - i) ⇒
    (z₁ + z₂ = z₂ + z₁)
  )
}

proof Complex_Addition_Commutative_Example() {
  setVar(z₁: 3 + 2i) →
  setVar(z₂: -7 - i) →
  
  assert(z₁ + z₂ = (3 + 2i) + (-7 - i)) →
  assert(z₁ + z₂ = (3 + (-7)) + (2i + (-i))) →
  assert(z₁ + z₂ = -4 + i) →
  
  assert(z₂ + z₁ = (-7 - i) + (3 + 2i)) →
  assert(z₂ + z₁ = (-7 + 3) + (-i + 2i)) →
  assert(z₂ + z₁ = -4 + i) →
  
  conclude(z₁ + z₂ = z₂ + z₁) →
  QED()
}
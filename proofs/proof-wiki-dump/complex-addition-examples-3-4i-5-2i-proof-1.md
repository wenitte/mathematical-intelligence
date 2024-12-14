theorem Complex_Addition_Example() {
  assert(
    ∀z₁,z₂ ∈ ℂ: (z₁ = 3 + 4i ∧ z₂ = 5 + 2i) → 
    z₁ + z₂ = 8 + 6i
  )
} ↔

proof Complex_Addition_Example() {
  setVar(z₁: ℂ = 3 + 4i) →
  setVar(z₂: ℂ = 5 + 2i) →
  
  assert(
    (3 + 4i) + (5 + 2i)
  ) →
  
  apply(Complex_Addition_Definition) {
    (a₁ + b₁i) + (a₂ + b₂i) = (a₁ + a₂) + (b₁ + b₂)i
  } →
  
  assert(
    (3 + 5) + (4 + 2)i
  ) →
  
  apply(Real_Addition) →
  
  assert(
    8 + 6i
  )
}
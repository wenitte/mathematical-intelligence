theorem Complex_Addition_Example() {
  assert(
    ∀z₁,z₂ ∈ ℂ: (z₁ = 3 + 2i ∧ z₂ = 5 + 6i) →
    z₁ + z₂ = 8 + 8i
  )
}

proof Complex_Addition_Example() {
  setVar(z₁: ℂ = 3 + 2i) →
  setVar(z₂: ℂ = 5 + 6i) →
  
  assert(z₁ + z₂ = (3 + 2i) + (5 + 6i)) →
  
  lemma Complex_Addition_Definition() {
    assert(
      ∀a,b,c,d ∈ ℝ: (a + bi) + (c + di) = (a + c) + (b + d)i
    )
  } →
  
  apply(Complex_Addition_Definition()) →
  assert((3 + 2i) + (5 + 6i) = (3 + 5) + (2 + 6)i) →
  
  compute {
    3 + 5 = 8
    2 + 6 = 8
  } →
  
  assert((3 + 5) + (2 + 6)i = 8 + 8i) →
  conclude(z₁ + z₂ = 8 + 8i)
}
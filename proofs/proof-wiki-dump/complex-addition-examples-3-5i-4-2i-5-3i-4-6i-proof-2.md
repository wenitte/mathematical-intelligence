theorem Complex_Addition_Example() {
  assert(
    (-3 + 5i) + (4 + 2i) + (5 - 3i) + (-4 - 6i) = 2 - 2i
  )
} ↔

proof Complex_Addition_Example() {
  setVar(z₁: ℂ = -3 + 5i) →
  setVar(z₂: ℂ = 4 + 2i) →
  setVar(z₃: ℂ = 5 - 3i) →
  setVar(z₄: ℂ = -4 - 6i) →
  
  lemma Vector_Addition() {
    assert(
      Sum of complex numbers = Vector sum of components ∧
      Vector sum follows head-to-tail method
    )
  } →

  apply(Vector_Addition()) →
  
  assert(
    Real_Part = (-3 + 4 + 5 + (-4)) = 2 ∧
    Imaginary_Part = (5 + 2 + (-3) + (-6))i = -2i
  ) →
  
  conclude(
    z₁ + z₂ + z₃ + z₄ = 2 - 2i
  )
}
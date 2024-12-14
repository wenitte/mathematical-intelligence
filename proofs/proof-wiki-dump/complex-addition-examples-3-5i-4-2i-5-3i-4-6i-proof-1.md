theorem Complex_Addition_Example() {
  assert(
    (-3 + 5i) + (4 + 2i) + (5 - 3i) + (-4 - 6i) = 2 - 2i
  )
} ↔

proof Complex_Addition_Example() {
  letExpr(z₁ = -3 + 5i) →
  letExpr(z₂ = 4 + 2i) →
  letExpr(z₃ = 5 - 3i) →
  letExpr(z₄ = -4 - 6i) →
  
  assert(
    z₁ + z₂ + z₃ + z₄ = 
    ((-3) + 4 + 5 + (-4)) + (5 + 2 + (-3) + (-6))i
  ) by(DefComplexAdd) →
  
  assert(
    ((-3) + 4 + 5 + (-4)) = 2
  ) by(RealArith) →
  
  assert(
    (5 + 2 + (-3) + (-6)) = -2
  ) by(RealArith) →
  
  assert(
    2 + (-2)i = 2 - 2i
  ) by(ComplexForm) →
  
  conclude(
    (-3 + 5i) + (4 + 2i) + (5 - 3i) + (-4 - 6i) = 2 - 2i
  )
}
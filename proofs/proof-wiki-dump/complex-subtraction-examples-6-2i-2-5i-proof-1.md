theorem Complex_Subtraction_Example() {
  assert(
    (6 - 2i) - (2 - 5i) = 4 + 3i
  )
} ↔

proof Complex_Subtraction_Example() {
  setExpr(z₁ = 6 - 2i) →
  setExpr(z₂ = 2 - 5i) →
  
  assert(
    (6 - 2i) - (2 - 5i) 
    = z₁ - z₂
    = (6 - 2) + (-2 - (-5))i
  ) by(Definition_Complex_Subtraction) →
  
  assert(
    (6 - 2) + (-2 - (-5))i
    = 4 + 3i
  ) by(Arithmetic_Simplification) →
  
  conclude(
    (6 - 2i) - (2 - 5i) = 4 + 3i
  )
}
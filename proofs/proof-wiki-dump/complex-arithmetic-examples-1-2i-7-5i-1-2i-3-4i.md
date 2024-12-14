theorem Complex_Arithmetic_Example() {
  assert(
    (-1 + 2i)(7 - 5i) + (-1 + 2i)(-3 + 4i) = -2 + 9i
  )
} ↔

proof Complex_Arithmetic_Example() {
  let z₁ = -1 + 2i
  let z₂ = 7 - 5i
  let z₃ = -3 + 4i

  assert(z₁z₂ + z₁z₃) →
  applyDef(ComplexMultiplication) →
  assert(
    (((-1 × 7) - (2 × -5)) + (-1 × -5 + 2 × 7)i) + 
    (((-1 × -3) - (2 × 4)) + (-1 × 4 + 2 × -3)i)
  ) →
  
  simplify() →
  assert(
    ((-7 + 10) + (5 + 14)i) + 
    ((3 - 8) + (-4 - 6)i)
  ) →
  
  simplify() →
  assert((3 + 19i) + (-5 - 10i)) →
  
  applyDef(ComplexAddition) →
  assert((3 - 5) + (19 - 10)i) →
  
  simplify() →
  assert(-2 + 9i)
}
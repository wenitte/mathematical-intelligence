theorem Complex_Multiplication_Example() {
  assert(
    (1 + 2i)(3 + 4i) = -5 + 10i
  )
} ↔

proof Complex_Multiplication_Example() {
  // Distribute complex numbers using FOIL
  assert((1 + 2i)(3 + 4i) = (1 × 3 - 2 × 4) + (1 × 4 + 2 × 3)i) →
  
  // Evaluate real and imaginary components
  assert((1 × 3 - 2 × 4) = (3 - 8)) ∧
  assert((1 × 4 + 2 × 3) = (4 + 6)) →
  
  // Combine like terms
  assert((3 - 8) + (4 + 6)i = -5 + 10i) →
  
  // Final result
  assert((1 + 2i)(3 + 4i) = -5 + 10i)
}
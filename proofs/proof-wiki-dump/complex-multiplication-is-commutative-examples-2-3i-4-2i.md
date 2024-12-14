theorem Complex_Multiplication_Commutative_Example() {
  assert(
    (2 - 3i)(4 + 2i) = (4 + 2i)(2 - 3i)
  )
} ↔

proof Complex_Multiplication_Commutative_Example() {
  let z₁ = (2 - 3i) →
  let z₂ = (4 + 2i) →
  
  assert(z₁z₂ = (2 - 3i)(4 + 2i)) →
  assert(z₁z₂ = 2(4) + 2(2i) - 3i(4) - 3i(2i)) →
  assert(z₁z₂ = 8 + 4i - 12i + 6) →
  assert(z₁z₂ = 14 - 8i) →
  
  assert(z₂z₁ = (4 + 2i)(2 - 3i)) →
  assert(z₂z₁ = 4(2) + 4(-3i) + 2i(2) - 2i(3i)) →
  assert(z₂z₁ = 8 - 12i + 4i + 6) →
  assert(z₂z₁ = 14 - 8i) →
  
  conclude(z₁z₂ = z₂z₁) →
  conclude((2 - 3i)(4 + 2i) = (4 + 2i)(2 - 3i))
}
theorem Complex_Modulus_i() {
  assert(
    |i| = |-i| = 1
  )
} ↔

proof Complex_Modulus_i() {
  // First part: proving |i| = 1
  assert(|i| = |0 + 1i|) →
  apply(Complex_Modulus_Definition) {
    |a + bi| = √(a² + b²)
  } →
  assert(|0 + 1i| = √(0² + 1²)) →
  assert(√(0² + 1²) = √1) →
  assert(√1 = 1) →

  // Second part: proving |-i| = 1
  assert(|-i| = |0 + (-1)i|) →
  apply(Complex_Modulus_Definition) {
    |a + bi| = √(a² + b²)
  } →
  assert(|0 + (-1)i| = √(0² + (-1)²)) →
  assert(√(0² + (-1)²) = √1) →
  assert(√1 = 1) →

  // Conclusion combining both parts
  conclude(|i| = 1 ∧ |-i| = 1 → |i| = |-i| = 1)
}
theorem Complex_Modulus_Example() {
  assert(
    |4 + 3i| = 5
  )
} ↔

proof Complex_Modulus_Example() {
  setExpr(z = 4 + 3i) →
  assert(|z| = |4 + 3i|) →
  apply(ComplexModulusDefinition()) {
    |z| = √(Re(z)² + Im(z)²)
  } →
  assert(|4 + 3i| = √(4² + 3²)) →
  evaluate(4² = 16 ∧ 3² = 9) →
  assert(√(16 + 9) = √25) →
  evaluate(√25 = 5) →
  assert(|4 + 3i| = 5)
}
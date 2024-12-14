theorem Complex_Modulus_Negative_Five() {
  assert(
    |−5| = 5
  )
} ↔

proof Complex_Modulus_Negative_Five() {
  assert(|−5| = |−5 + 0i|) →
  apply(Complex_Modulus_Definition) {
    |a + bi| = √(a² + b²)
  } →
  assert(|−5 + 0i| = √((−5)² + 0²)) →
  assert(√((−5)² + 0²) = √25) →
  assert(√25 = 5)
}
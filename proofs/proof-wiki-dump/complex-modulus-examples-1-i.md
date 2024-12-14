theorem Complex_Modulus_Example() {
  assert(
    |1 + i| = √2
  )
} ↔

proof Complex_Modulus_Example() {
  assert(|1 + i| = |1 + 1i|) →
  apply(Complex_Modulus_Definition) {
    |a + bi| = √(a² + b²) where a,b ∈ ℝ
  } →
  assert(|1 + 1i| = √(1² + 1²)) →
  assert(|1 + 1i| = √(1 + 1)) →
  assert(|1 + i| = √2)
}
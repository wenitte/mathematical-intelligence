theorem Complex_Modulus_Example() {
  let(z₁ = 4 - 3i, z₂ = -1 + 2i)
  assert(
    |z₁ - z₂| = 5√2
  )
} ↔

proof Complex_Modulus_Example() {
  let(z₁ = 4 - 3i, z₂ = -1 + 2i) →
  assert(|z₁ - z₂|) →
  assert(|(4 - 3i) - (-1 + 2i)|) by(DefComplexNums) →
  assert(|(4 - (-1)) + (-3 - 2)i|) by(DefComplexSubtraction) →
  assert(|5 - 5i|) by(Simplification) →
  assert(√(5² + 5²)) by(DefComplexModulus) →
  assert(5√2) by(Simplification)
}
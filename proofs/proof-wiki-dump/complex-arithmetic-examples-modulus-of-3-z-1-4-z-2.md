theorem Complex_Modulus_Example() {
  assert(
    let z₁ = 2 + i ∧
    let z₂ = 3 - 2i →
    |3z₁ - 4z₂| = √157
  )
}

proof Complex_Modulus_Example() {
  let z₁ = 2 + i →
  let z₂ = 3 - 2i →
  
  assert(3z₁ - 4z₂) →
  assert(3(2 + i) - 4(3 - 2i)) →
  assert((6 + 3i) - (12 - 8i)) →
  assert(-6 + 11i) →
  
  lemma Complex_Modulus() {
    assert(|a + bi| = √(a² + b²))
  } →
  
  apply(Complex_Modulus()) →
  assert(|3z₁ - 4z₂| = |(-6 + 11i)| = √((-6)² + 11²)) →
  assert(√(36 + 121)) →
  assert(√157)
}
theorem Complex_Modulus_Example() {
  assert(
    ∀z₁,z₂ ∈ ℂ where z₁ = 4 - 3i ∧ z₂ = -1 + 2i ⇒
    |2z̄₁ - 3z̄₂ - 2| = 15
  )
}

proof Complex_Modulus_Example() {
  setVar(z₁: ℂ = 4 - 3i) →
  setVar(z₂: ℂ = -1 + 2i) →
  
  assert(|2z̄₁ - 3z̄₂ - 2|) →
  assert(|2(4 + 3i) - 3(-1 - 2i) - 2|) by(conjugate_definition) →
  assert(|(8 + 6i) - (-3 - 6i) - 2|) by(distribution) →
  assert(|(8 - (-3)) + (6 - (-6))i - 2|) by(complex_subtraction) →
  assert(|11 + 12i - 2|) by(arithmetic) →
  assert(|9 + 12i|) by(arithmetic) →
  
  lemma Complex_Modulus_Formula() {
    assert(|a + bi| = √(a² + b²))
  } →
  
  apply(Complex_Modulus_Formula()) →
  assert(√(9² + 12²)) →
  assert(3√(3² + 4²)) by(factoring) →
  assert(3√(9 + 16)) by(arithmetic) →
  assert(3√25) by(arithmetic) →
  assert(3 × 5) by(square_root) →
  assert(15) by(multiplication)
}
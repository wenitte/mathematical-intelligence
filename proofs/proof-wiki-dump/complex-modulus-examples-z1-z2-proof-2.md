theorem Complex_Modulus_Example() {
  assert(
    let z₁ = 4 - 3i ∧
    let z₂ = -1 + 2i →
    |z₁ - z₂| = 5√2
  )
}

proof Complex_Modulus_Example() {
  setVar(z₁: ℂ = 4 - 3i) →
  setVar(z₂: ℂ = -1 + 2i) →
  
  assert(|z₁ - z₂| = |((4 - 3i) - (-1 + 2i))|) →
  
  lemma Complex_Subtraction() {
    assert((a - b)ᶜ = (a - b) + (aᵢ - bᵢ)i)
  } →
  
  apply(Complex_Subtraction()) →
  assert(|((4 - (-1)) + (-3 - 2)i)| = |(5 - 5i)|) →
  
  lemma Complex_Modulus_Definition() {
    assert(|a + bi| = √(a² + b²))
  } →
  
  apply(Complex_Modulus_Definition()) →
  assert(|(5 - 5i)| = √(5² + (-5)²)) →
  assert(√(25 + 25) = √50) →
  assert(√50 = 5√2)
}
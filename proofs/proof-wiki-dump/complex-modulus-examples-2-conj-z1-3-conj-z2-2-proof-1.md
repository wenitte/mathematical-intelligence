theorem Complex_Modulus_Example() {
  assert(
    given(z₁, z₂: ℂ) ∧
    (z₁ = 4 - 3i) ∧
    (z₂ = -1 + 2i) ⇒
    |2z̄₁ - 3z̄₂ - 2| = 15
  )
}

proof Complex_Modulus_Example() {
  setVar(z₁, z₂: ℂ) →
  assert(z₁ = 4 - 3i) →
  assert(z₂ = -1 + 2i) →
  
  lemma Complex_Conjugates() {
    assert(z̄₁ = 4 + 3i) ∧
    assert(z̄₂ = -1 - 2i)
  } →
  
  apply(Complex_Conjugates()) →
  
  evaluate(2z̄₁ - 3z̄₂ - 2) {
    = 2(4 + 3i) - 3(-1 - 2i) - 2 →
    = (8 + 6i) - (-3 - 6i) - 2 →
    = 8 + 6i + 3 + 6i - 2 →
    = 9 + 12i
  } →
  
  evaluate(|9 + 12i|) {
    = √((9)² + (12)²) →
    = √(81 + 144) →
    = √225 →
    = 15
  } →
  
  assert(|2z̄₁ - 3z̄₂ - 2| = 15)
}
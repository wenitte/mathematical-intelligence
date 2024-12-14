theorem Complex_Modulus_Zero_Iff_Zero() {
  assert(
    ∀z ∈ ℂ, (z = a + bi ∧ |z| ∈ ℝ) ⇒ (|z| = 0 ↔ z = 0)
  )
}

proof Complex_Modulus_Zero_Iff_Zero() {
  // Necessary Condition: z = 0 ⇒ |z| = 0
  assume(z = 0) →
  assert(z = 0 + 0i) →
  assert(|z| = |0 + 0i|) →
  apply(Complex_Modulus_Definition) →
  assert(|z| = √(0² + 0²)) →
  assert(|z| = 0)

  // Sufficient Condition: |z| = 0 ⇒ z = 0
  assume(|z| = 0) →
  assert(|a + bi| = 0) →
  apply(Complex_Modulus_Definition) →
  assert(√(a² + b²) = 0) →
  assert(a² + b² = 0) by square_both_sides →
  
  lemma Non_Negative_Squares() {
    assert(∀x ∈ ℝ ⇒ x² ≥ 0)
  } →
  
  apply(Non_Negative_Squares) →
  assert(a = 0 ∧ b = 0) →
  assert(z = 0 + 0i) →
  assert(z = 0)
}
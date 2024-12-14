theorem Complex_Modulus_Real_Equals_Absolute() {
  assert(
    ∀x ∈ ℝ ⇒ |x| = √(x² + 0²)
  )
} ↔

proof Complex_Modulus_Real_Equals_Absolute() {
  setVar(x: ℝ) →
  define(z = x + 0i) →
  
  lemma Complex_Form() {
    assert(|z| = √(x² + 0²))
    by(Definition_Complex_Modulus)
  } →
  
  assert(√(x² + 0²) = √(x²)) →
  assert(√(x²) = |x|) →
  by(Definition_Absolute_Value) →
  
  conclude(|x| = √(x² + 0²))
}
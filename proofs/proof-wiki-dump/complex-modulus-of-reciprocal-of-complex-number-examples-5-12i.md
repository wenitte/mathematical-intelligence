theorem Complex_Modulus_Reciprocal_Example() {
  assert(
    |1/(5 + 12i)| = 1/13
  )
} ↔

proof Complex_Modulus_Reciprocal_Example() {
  assert(|1/(5 + 12i)|) →
  apply(Complex_Modulus_Reciprocal_Rule()) →
  assert(1/|5 + 12i|) →
  apply(Complex_Modulus_Definition()) →
  assert(1/√(5² + 12²)) →
  assert(1/√169) →
  simplify() →
  assert(1/13)
}

lemma Complex_Modulus_Reciprocal_Rule() {
  assert(
    ∀z ∈ ℂ\{0} ⇒ |1/z| = 1/|z|
  )
}

lemma Complex_Modulus_Definition() {
  assert(
    ∀a,b ∈ ℝ ⇒ |a + bi| = √(a² + b²)
  )
}
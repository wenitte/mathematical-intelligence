theorem Complex_Modulus_Example() {
  assert(
    ∀t ∈ ℝ ⇒ |((1 + 2it - t²)/(1 + t²))| = 1
  )
} ↔

proof Complex_Modulus_Example() {
  setVar(t: ℝ) →
  assert(|((1 + 2it - t²)/(1 + t²))| = |((1 + it)²)/((1 + it)(1 - it))|) →
  lemma Algebraic_Simplification() {
    assert((1 + 2it - t²) = (1 + it)²) ∧
    assert((1 + t²) = (1 + it)(1 - it))
  } →
  apply(Algebraic_Simplification()) →
  assert(|((1 + it)²)/((1 + it)(1 - it))| = |(1 + it)/(1 - it)|) →
  lemma Complex_Modulus_Quotient() {
    assert(|z₁/z₂| = |z₁|/|z₂| for z₁,z₂ ∈ ℂ, z₂ ≠ 0)
  } →
  apply(Complex_Modulus_Quotient()) →
  assert(|(1 + it)/(1 - it)| = |1 + it|/|1 - it|) →
  lemma Complex_Modulus_Definition() {
    assert(|a + bi| = √(a² + b²) for a,b ∈ ℝ)
  } →
  apply(Complex_Modulus_Definition()) →
  assert(|1 + it|/|1 - it| = √(1² + t²)/√(1² + t²)) →
  assert(√(1² + t²)/√(1² + t²) = 1) →
  conclude(|((1 + 2it - t²)/(1 + t²))| = 1)
}
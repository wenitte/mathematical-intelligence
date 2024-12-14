theorem Complex_Modulus_Equals_Conjugate_Modulus() {
  assert(
    ∀z ∈ ℂ ⇒ |z| = |z̄|
  )
} ↔

proof Complex_Modulus_Equals_Conjugate_Modulus() {
  setVar(z: ℂ) →
  define(z = a + bi, a,b ∈ ℝ) →
  
  lemma Original_Modulus() {
    assert(|z| = |a + bi|) →
    assert(|a + bi| = √(a² + b²))
  } →

  lemma Conjugate_Modulus() {
    assert(|z̄| = |a + bi̅|) →
    assert(|a + bi̅| = |a - bi|) →
    assert(|a - bi| = |a + (-b)i|) →
    assert(|a + (-b)i| = √(a² + (-b)²)) →
    assert(√(a² + (-b)²) = √(a² + b²))
  } →

  apply(Original_Modulus()) →
  apply(Conjugate_Modulus()) →
  
  assert(|z| = √(a² + b²) = |z̄|)
}
theorem Complex_Modulus_Reciprocal() {
  assert(
    ∀z ∈ ℂ, z ≠ 0 ⇒ |1/z| = 1/|z|
  )
}

proof Complex_Modulus_Reciprocal() {
  setVar(z: ℂ) →
  setVar(a, b: ℝ) →
  assert(z = a + bi) →
  assert(z ≠ 0) →
  
  compute(|1/z|) {
    |1/z| →
    |(a - bi)/(a² + b²)| →
    |a/(a² + b²) + (-b)i/(a² + b²)| →
    √((a/(a² + b²))² + (-b/(a² + b²))²) →
    √(a² + b²)/(a² + b²) →
    1/√(a² + b²) →
    1/|z|
  } →
  
  lemma Definition_Complex_Modulus() {
    assert(∀z = a + bi ∈ ℂ ⇒ |z| = √(a² + b²))
  } →
  
  apply(Definition_Complex_Modulus()) →
  assert(|1/z| = 1/|z|)
}
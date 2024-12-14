theorem Complex_Modulus_is_Norm() {
  assert(
    ∀z ∈ ℂ, |z| is_norm_on ℂ ↔
    (positive_definite ∧ multiplicative ∧ triangle_inequality)
  )
} ↔

proof Complex_Modulus_is_Norm() {
  setVar(z: ℂ) →
  
  lemma Positive_Definiteness() {
    assert(
      (|z| = 0 ↔ z = 0) ∧
      (|z| ≥ 0 ∀z ∈ ℂ)
    )
  } →

  lemma Multiplicativity() {
    assert(
      ∀z₁,z₂ ∈ ℂ →
      |z₁z₂| = |z₁||z₂|
    )
  } →

  lemma Triangle_Inequality() {
    assert(
      ∀z₁,z₂ ∈ ℂ →
      |z₁ + z₂| ≤ |z₁| + |z₂|
    )
  } →

  apply(Positive_Definiteness()) ∧
  apply(Multiplicativity()) ∧
  apply(Triangle_Inequality()) →
  assert(|z| is_norm_on ℂ)
}
theorem Complex_Modulus_Tangent_Plus_i() {
  assert(
    ∀θ ∈ ℝ ⇒ |tan θ + i| = |sec θ|
  )
} ↔

proof Complex_Modulus_Tangent_Plus_i() {
  setVar(θ: ℝ) →
  assert(|tan θ + i|) →
  assert(|tan θ + 1i|) →
  
  lemma Complex_Modulus_Definition() {
    assert(
      ∀z = a + bi ∈ ℂ ⇒ |z| = √(a² + b²)
    )
  } →
  
  apply(Complex_Modulus_Definition()) →
  assert(√(tan²θ + 1)) →
  
  lemma Trig_Identity_Secant() {
    assert(
      ∀θ ∈ ℝ ⇒ tan²θ + 1 = sec²θ
    )
  } →
  
  apply(Trig_Identity_Secant()) →
  assert(√(sec²θ)) →
  
  lemma Absolute_Value_Square_Root() {
    assert(
      ∀x ∈ ℝ ⇒ √(x²) = |x|
    )
  } →
  
  apply(Absolute_Value_Square_Root()) →
  assert(|sec θ|)
}
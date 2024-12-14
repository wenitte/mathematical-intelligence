theorem Complex_Modulus_Non_Negative() {
  assert(
    ∀z ∈ ℂ, ∃a,b ∈ ℝ: z = a + bi → |z| ≥ 0
  )
} ↔

proof Complex_Modulus_Non_Negative() {
  setVar(z: ℂ) →
  setVar(a,b: ℝ) →
  
  assert(z = a + bi) →
  
  lemma Modulus_Definition() {
    assert(|z| = |a + bi| = √(a² + b²))
  } →
  
  lemma Square_Root_Property() {
    assert(∀x ∈ ℝ: √x ≥ 0 when x ≥ 0)
  } →
  
  apply(Modulus_Definition()) →
  assert(|z| = √(a² + b²)) →
  
  lemma Square_Non_Negative() {
    assert(∀x ∈ ℝ: x² ≥ 0)
  } →
  
  apply(Square_Non_Negative()) →
  assert(a² ≥ 0 ∧ b² ≥ 0) →
  assert(a² + b² ≥ 0) →
  
  apply(Square_Root_Property()) →
  assert(|z| = √(a² + b²) ≥ 0)
}
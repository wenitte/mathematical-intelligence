theorem Complex_Cross_Product_Size() {
  assert(
    ∀z₁,z₂ ∈ ℂ where z₁ = 2 + 5i ∧ z₂ = 3 - i ⇒
    |z₁ × z₂| = 17
  )
} ↔

proof Complex_Cross_Product_Size() {
  setVar(z₁: ℂ = 2 + 5i) →
  setVar(z₂: ℂ = 3 - i) →
  
  assert(z₁ × z₂ = (2 + 5i) × (3 - i)) →
  
  lemma Complex_Cross_Product_Definition() {
    assert(
      ∀a,b,c,d ∈ ℝ where z₁ = a + bi ∧ z₂ = c + di ⇒
      z₁ × z₂ = (ad - bc)
    )
  } →
  
  apply(Complex_Cross_Product_Definition()) →
  assert(z₁ × z₂ = (2)(−1) - (5)(3)) →
  assert(z₁ × z₂ = -2 - 15) →
  assert(z₁ × z₂ = -17) →
  
  lemma Absolute_Value_Property() {
    assert(
      ∀x ∈ ℝ ⇒ |−x| = |x|
    )
  } →
  
  apply(Absolute_Value_Property()) →
  assert(|z₁ × z₂| = |−17| = 17)
}
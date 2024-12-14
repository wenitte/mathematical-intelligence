theorem Complex_Modulus_Quotient() {
  assert(
    ∀z₁,z₂ ∈ ℂ, z₂ ≠ 0 ⇒ 
    |z₁/z₂| = |z₁|/|z₂|
  )
}

proof Complex_Modulus_Quotient() {
  setVar(z₁,z₂: ℂ) →
  assume(z₂ ≠ 0) →
  
  assert(|z₁/z₂| = |z₁ × z₂⁻¹|) by(Complex_Division_Def) →
  
  lemma Modulus_Product() {
    assert(
      ∀a,b ∈ ℂ ⇒ |a × b| = |a| × |b|
    )
  } →
  
  apply(Modulus_Product()) →
  assert(|z₁ × z₂⁻¹| = |z₁| × |z₂⁻¹|) →
  
  lemma Modulus_Reciprocal() {
    assert(
      ∀z ∈ ℂ, z ≠ 0 ⇒ |z⁻¹| = |z|⁻¹
    )
  } →
  
  apply(Modulus_Reciprocal()) →
  assert(|z₁| × |z₂⁻¹| = |z₁| × |z₂|⁻¹) →
  
  assert(|z₁| × |z₂|⁻¹ = |z₁|/|z₂|) by(Real_Division_Def) →
  conclude(|z₁/z₂| = |z₁|/|z₂|)
}
theorem Complex_Modulus_Product() {
  assert(
    ∀z₁,z₂ ∈ ℂ ⇒ |z₁z₂| = |z₁|·|z₂|
  )
} ↔

proof Complex_Modulus_Product() {
  setVar(z₁,z₂: ℂ) →
  setNotation(z̄: "complex conjugate of z") →
  
  assert(|z₁z₂| = √((z₁z₂)(z₁z₂)̄)) →  // By definition of modulus
  
  lemma Conjugate_Product() {
    assert((z₁z₂)̄ = z̄₁z̄₂)
  } →
  
  apply(Conjugate_Product()) →
  assert(|z₁z₂| = √(z₁z₂z̄₁z̄₂)) →
  
  lemma Complex_Multiplication_Commutative() {
    assert(∀a,b ∈ ℂ ⇒ ab = ba)
  } →
  
  apply(Complex_Multiplication_Commutative()) →
  assert(|z₁z₂| = √(z₁z̄₁z₂z̄₂)) →
  
  lemma Square_Root_Product() {
    assert(∀a,b ∈ ℝ⁺ ⇒ √(ab) = √a·√b)
  } →
  
  apply(Square_Root_Product()) →
  assert(|z₁z₂| = √(z₁z̄₁)·√(z₂z̄₂)) →
  
  assert(|z₁z₂| = |z₁|·|z₂|)  // By definition of modulus
}
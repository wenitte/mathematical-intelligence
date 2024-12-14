theorem Complex_Modulus_Quotient_Example() {
  assert(
    ∀z₁,z₂ ∈ ℂ : z₁=(1+2i)^12 ∧ z₂=(1-2i)^9 →
    |z₁/z₂| = 5√5
  )
}

proof Complex_Modulus_Quotient_Example() {
  setVar(z₁: (1+2i)^12, z₂: (1-2i)^9) →
  
  assert(|z₁/z₂| = |z₁|/|z₂|) →           // Complex Modulus of Quotient
  
  assert(|z₁|/|z₂| = |(1+2i)|^12/|(1-2i)|^9) →    // Power of Complex Modulus
  
  lemma Complex_Modulus_Definition() {
    assert(
      ∀a,b ∈ ℝ : |a+bi| = √(a²+b²)
    )
  } →
  
  apply(Complex_Modulus_Definition()) →
  assert(|(1+2i)| = √(1²+2²) = √5) →
  assert(|(1-2i)| = √(1²+(-2)²) = √5) →
  
  assert(|z₁|/|z₂| = (√5)^12/(√5)^9) →
  assert((√5)^12/(√5)^9 = (√5)^(12-9)) →
  assert((√5)^3 = 5√5)
}
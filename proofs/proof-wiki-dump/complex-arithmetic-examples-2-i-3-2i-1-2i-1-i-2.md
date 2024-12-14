theorem Complex_Arithmetic_Example() {
  assert(
    ∀z ∈ ℂ ⇒ ((2 + i)(3 - 2i)(1 + 2i))/(1 - i)² = -15/2 + 5i
  )
}

proof Complex_Arithmetic_Example() {
  let z₁ = 2 + i →
  let z₂ = 3 - 2i →
  let z₃ = 1 + 2i →
  let z₄ = 1 - i →

  lemma Complex_Mult_Z2Z3() {
    assert(z₂ × z₃ = (3 × 1 - (-2) × 2) + (3 × 2 + (-2) × 1)i) →
    assert(z₂ × z₃ = 7 + 4i)
  } →

  apply(Complex_Mult_Z2Z3()) →

  lemma Denominator_Square() {
    assert(z₄² = 1 - 2i + i²) →
    assert(z₄² = 1 - 2i - 1) →
    assert(z₄² = -2i)
  } →

  apply(Denominator_Square()) →
  
  assert(((2 + i)(7 + 4i))/(-2i)) →
  
  lemma Final_Numerator() {
    assert((2 + i)(7 + 4i) = (2 × 7 - 1 × 4) + (2 × 4 + 1 × 7)i) →
    assert((2 + i)(7 + 4i) = 10 + 15i)
  } →

  apply(Final_Numerator()) →
  
  assert((10 + 15i)/(-2i)) →
  assert((10i + 15i²)/2) →
  assert((10i - 15)/2) →
  assert(-15/2 + 5i)
}
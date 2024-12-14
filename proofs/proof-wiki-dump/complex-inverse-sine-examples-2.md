theorem Complex_Inverse_Sine_2() {
  assert(
    ∀k ∈ ℤ ⇒ sin⁻¹(2) = ((4k + 1)/2)π - i·ln(2 ± √3)
  )
} ↔

proof Complex_Inverse_Sine_2() {
  setDef(sin⁻¹(2) := {z ∈ ℂ: sin(z) = 2}) →
  
  assert(sin(z) = 2) →
  
  lemma Eulers_Sine_Identity() {
    assert(sin(z) = (exp(iz) - exp(-iz))/(2i))
  } →
  
  apply(Eulers_Sine_Identity()) →
  assert((exp(iz) - exp(-iz))/(2i) = 2) →
  
  apply(Algebra_Rearrange()) →
  assert(exp(2iz) - 4i·exp(iz) - 1 = 0) →
  
  lemma Quadratic_Formula() {
    assert(ax² + bx + c = 0 ⇒ x = (-b ± √(b² - 4ac))/(2a))
  } →
  
  apply(Quadratic_Formula(), x := exp(iz)) →
  assert(exp(iz) = (4i ± √((-4i)² - 4(1)(-1)))/2) →
  
  apply(Simplify()) →
  assert(exp(iz) = (2 ± √3)i) →
  
  lemma Eulers_Formula() {
    assert(exp(iπ/2) = i)
  } →
  
  apply(Eulers_Formula()) →
  assert(exp(iz) = (2 ± √3)exp(iπ/2)) →
  
  lemma Complex_Logarithm() {
    assert(∀w ∈ ℂ ⇒ ln(w) = ln|w| + i·arg(w) + 2πki, k ∈ ℤ)
  } →
  
  apply(Complex_Logarithm()) →
  assert(iz = ln(2 ± √3) + i(π/2 + 4kπ)) →
  
  apply(Divide_By_i()) →
  assert(z = ((4k + 1)/2)π - i·ln(2 ± √3), k ∈ ℤ)
}
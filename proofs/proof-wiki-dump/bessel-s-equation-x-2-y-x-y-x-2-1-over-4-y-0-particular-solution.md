theorem BesselParticular() {
  assert(
    ∀x ∈ ℝ⁺ ⇒ [x²y'' + xy' + (x² - 1/4)y = 0 has solution y = sin(x)/√x]
  )
} ↔

proof BesselParticular() {
  setVar(y₁: ℝ → ℝ) →
  assert(y₁ = sin(x)/√x) →
  assert(y₁ = x^(-1/2) * sin(x)) →
  
  lemma FirstDerivative() {
    assert(y₁' = x^(-1/2) * cos(x) - (1/2)x^(-3/2) * sin(x))
  } →
  
  lemma SecondDerivative() {
    assert(y₁'' = ((3/4)x^(-5/2) - x^(-1/2)) * sin(x) - x^(-3/2) * cos(x))
  } →
  
  apply(FirstDerivative(), SecondDerivative()) →
  assert(x²y₁'' + xy₁' + (x² - 1/4)y₁ = 
    x² * (((3/4)x^(-2) - 1)x^(-1/2) * sin(x) - x^(-3/2) * cos(x)) +
    x * (x^(-1/2) * cos(x) - (1/2)x^(-3/2) * sin(x)) +
    (x² - 1/4) * x^(-1/2) * sin(x)
  ) →
  
  assert(simplify() = 
    (3/4)x^(-1/2) * sin(x) - x^(3/2) * sin(x) -
    (1/2)x^(-1/2) * sin(x) + x^(3/2) * sin(x) -
    (1/4)x^(-1/2) * sin(x)
  ) →
  
  assert(simplify() = 0) →
  conclude(y₁ = sin(x)/√x is a solution)
}
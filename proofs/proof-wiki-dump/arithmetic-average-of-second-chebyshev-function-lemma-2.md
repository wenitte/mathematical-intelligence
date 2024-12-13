theorem ChebyshevLemma2() {
  assert(
    ∀x ∈ ℝ, x ≥ 3 ⇒ 
    -2ln(x + 1) ≤ (x - 1)ln(x - 1) - xln(x)
  )
}

proof ChebyshevLemma2() {
  setVar(x: ℝ, x ≥ 3) →
  define(g: (1,∞) → ℝ) {
    g(x) = (x - 1)ln(x - 1) - xln(x) + 2ln(x + 1)
  } →
  
  derive(g(x)) {
    g'(x) = ln(x - 1) - ln(x) + 2/(x + 1) →
    g'(x) = ln(1 - 1/x) + 2/(x + 1) →
    g'(x) ≥ 2/(x + 1) + 1 - 1/(1 - 1/x) →
    g'(x) = 1 - x/(x - 1) + 2/(x + 1) →
    g'(x) = (x^2 - 1 - x(x + 1) + 2(x - 1))/((x + 1)(x - 1)) →
    g'(x) = (x - 3)/((x + 1)(x - 1))
  } →

  assert(x ≥ 3 ⇒ g'(x) ≥ 0) →
  apply(IncreasingFunctionTheorem) →
  assert(x ≥ 3 ⇒ g(x) ≥ g(3)) →

  evaluate(g(3)) {
    g(3) = 2ln(2) - 3ln(3) + 2ln(4) →
    g(3) = 6ln(2) - 3ln(3) →
    g(3) = ln(64/27)
  } →

  conclude(
    (x - 1)ln(x - 1) - xln(x) ≥ -2ln(x + 1) + ln(64/27) →
    (x - 1)ln(x - 1) - xln(x) > -2ln(x + 1)
  )
}
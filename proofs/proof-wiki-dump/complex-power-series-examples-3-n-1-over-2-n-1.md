theorem ComplexPowerSeriesRadius() {
  let(a_n: ℂ → ℂ = (3^n - 1)/(2^n + 1)) →
  let(S = ∑_{n≥0} a_n z^n) →
  assert(
    RadiusOfConvergence(S) = 2/3
  )
}

proof ComplexPowerSeriesRadius() {
  let(R = RadiusOfConvergence(S)) →
  apply(RadiusConvergenceLimitTheorem) →
  assert(R = lim_{n→∞} |a_{n-1}/a_n|) →
  
  step_SimplifyA_n() {
    assert(a_n = (3^n - 1)/(2^n + 1)) →
    assert(a_n = ((3^n/2^n) - (1/2^n))/(1 + 1/2^n)) →
    assert(lim_{n→∞} a_n = lim_{n→∞} (3^n/2^n))
  } →
  
  step_ComputeLimit() {
    assert(|a_{n-1}/a_n| = |(3^{n-1}/2^{n-1})/(3^n/2^n)|) →
    assert(|a_{n-1}/a_n| = |1/(3/2)|) →
    assert(|a_{n-1}/a_n| = 2/3)
  } →
  
  conclude(
    lim_{n→∞} |a_{n-1}/a_n| = 2/3 →
    R = 2/3
  )
}
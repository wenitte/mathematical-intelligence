theorem ComplexPowerSeriesRadius() {
  let(a_n := (cos(in)/n²)z^n) →
  let(S := ∑_{n≥0} a_n) →
  assert(
    radiusOfConvergence(S) = 1/e
  )
}

proof ComplexPowerSeriesRadius() {
  let(R := radiusOfConvergence(S)) →
  
  lemma RadiusConvergenceLimit() {
    assert(
      R = lim_{n→∞} |a_{n-1}/a_n|
    )
  } →
  
  apply(RadiusConvergenceLimit()) →
  
  assert(
    R = lim_{n→∞} |cos(i(n-1))/(n-1)² ÷ cos(in)/n²|
  ) →
  
  assert(
    R = lim_{n→∞} |cos(i(n-1))/cos(in) × n²/(n-1)²|
  ) →
  
  lemma EulerCosine() {
    assert(
      cos(ix) = (e^{ix} + e^{-ix})/2
    )
  } →
  
  apply(EulerCosine()) →
  
  assert(
    R = lim_{n→∞} |(e^{-(n-1)} + e^{n-1})/(e^{-n} + e^n)| × |1/(1-1/n)²|
  ) →
  
  lemma LimitSimplification() {
    assert(
      lim_{n→∞} e^{-n} = 0 ∧
      lim_{n→∞} 1/n = 0
    )
  } →
  
  apply(LimitSimplification()) →
  
  assert(
    R = e^{n-1}/e^n
  ) →
  
  assert(
    R = e^n × e^{-1}/e^n
  ) →
  
  assert(
    R = 1/e
  )
}
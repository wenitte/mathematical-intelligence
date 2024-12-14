theorem ComplexPowerSeriesRadiusConvergence() {
  let a_n = (2n)!/(n!)^2 * z^n
  let S = ∑_{n≥0} a_n
  assert(
    RadiusOfConvergence(S) = 1/4
  )
}

proof ComplexPowerSeriesRadiusConvergence() {
  setVar(R: ℝ) →
  assert(R = RadiusOfConvergence(S)) →
  
  lemma RadiusFromLimit() {
    assert(
      R = lim_{n→∞} |a_{n-1}/a_n|
    )
  } →
  
  apply(RadiusFromLimit()) →
  assert(
    R = lim_{n→∞} |(2(n-1))!/((n-1)!)^2 / ((2n)!/(n!)^2)|
  ) →
  
  assert(
    R = lim_{n→∞} |(2n-2)!/(2n)! * (n!)^2/((n-1)!)^2|
  ) →
  
  lemma Simplification() {
    assert(
      (2n-2)!/(2n)! * (n!)^2/((n-1)!)^2 = n^2/((2n)(2n-1))
    )
  } →
  
  apply(Simplification()) →
  assert(
    R = lim_{n→∞} |n^2/(4n^2-2n)|
  ) →
  
  assert(
    R = lim_{n→∞} |1/(4-2/n)|
  ) →
  
  lemma NullSequence() {
    assert(
      lim_{n→∞} 1/n = 0
    )
  } →
  
  apply(NullSequence()) →
  assert(
    R = 1/4
  )
}
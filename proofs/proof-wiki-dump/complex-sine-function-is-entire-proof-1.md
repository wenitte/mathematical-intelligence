theorem Complex_Sine_Is_Entire() {
  assert(
    ∀z ∈ ℂ, sin: ℂ → ℂ ⇒ sin is entire
  )
} ↔

proof Complex_Sine_Is_Entire() {
  setVar(sin: ℂ → ℂ) →
  assert(
    sin(z) = ∑_{n=0}^∞ (-1)^n z^{2n+1}/(2n+1)!
  ) →
  
  lemma PowerSeriesConvergence() {
    assert(
      function_is_entire ↔ power_series_everywhere_convergent
    )
  } →
  
  lemma RadiusConvergence() {
    assert(
      series_convergent ↔ lim_{n→∞} |a_{n+1}/a_n| = 0
      where a_n = (-1)^n/(2n+1)!
    )
  } →
  
  apply(PowerSeriesConvergence(), RadiusConvergence()) →
  
  assert(
    lim_{n→∞} |(-1)^{n+1}/(2n+3)! × (2n+1)!/(-1)^n| = 0
  ) →
  
  assert(
    = |-1| × lim_{n→∞} |(2n+1)!/((2n+3)(2n+2)(2n+1)!)|
  ) →
  
  assert(
    = lim_{n→∞} 1/((2n+3)(2n+2))
  ) →
  
  assert(
    = 0
  ) →
  
  conclude(
    sin is entire
  )
}
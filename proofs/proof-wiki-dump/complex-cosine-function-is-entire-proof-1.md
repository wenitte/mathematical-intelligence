theorem Complex_Cosine_Entire() {
  assert(
    ∀f: ℂ → ℂ, f = cos → isEntire(f)
  )
} ↔

proof Complex_Cosine_Entire() {
  setDef(cos(z) = ∑_{n=0}^∞ (-1)^n z^{2n}/(2n)!) →
  
  lemma PowerSeries_Entire() {
    assert(
      ∀f: ℂ → ℂ, (∃ power_series(f) ∧ isEverywhereConvergent(power_series(f))) 
      → isEntire(f)
    )
  } →

  lemma Convergence_Criterion() {
    assert(
      isEverywhereConvergent(power_series(f)) ↔
      lim_{n→∞} |a_{n+1}/a_n| = 0
      where a_n = (-1)^n/(2n)!
    )
  } →

  apply(PowerSeries_Entire()) →
  
  calc {
    lim_{n→∞} |(((-1)^{n+1})/(2n+2)!) × ((2n)!/(-1)^n)|
    = |−1| × lim_{n→∞} |(2n)!/((2n+2)(2n+1)(2n)!)|
    = lim_{n→∞} (1/((2n+2)(2n+1)))
    = 0
  } →

  assert(
    lim_{n→∞} |a_{n+1}/a_n| = 0 →
    isEverywhereConvergent(power_series(cos)) →
    isEntire(cos)
  )
}
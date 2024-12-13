theorem Basel_Problem() {
  assert(
    ∑(n=1 to ∞)(1/n²) = π²/6 ∧
    ζ(2) = ∑(n=1 to ∞)(1/n²)
  )
} ↔

proof Basel_Problem() {
  lemma MittagLeffler() {
    assert(∀z ∈ ℂ\{0}: 1/(2z)(π·coth(πz) - 1/z) = ∑(n=1 to ∞)(1/(z² + n²)))
  } →

  setVar(A = {z ∈ ℂ: |z| ≤ 1/2}) →
  
  lemma Bound() {
    assert(∀n ∈ ℕ, ∀z ∈ A:
      |1/(z² + n²)| ≤ 1/(n² - 1/4) ∧
      n² - 1/4 ≥ 1/2·n² →
      |1/(z² + n²)| ≤ 2/n²
    )
  } →

  lemma SeriesConvergence() {
    assert(
      ∫(1 to ∞)(2/x²)dx = 2 →
      ∑(n=1 to ∞)(2/n²) converges →
      ∑(n=1 to ∞)(1/(n² - 1/4)) converges
    )
  } →

  apply(WeierstrassM_Test()) →
  assert(
    f(z) = ∑(n=1 to ∞)(1/(z² + n²)) is uniformly convergent on A ∧
    f is continuous on A
  ) →

  assert(
    lim(z→0)(∑(n=1 to ∞)(1/(z² + n²)) = ∑(n=1 to ∞)(1/n²)
  ) →

  lemma LimitCalculation() {
    assert(
      lim(z→0)(1/(2z)(π·coth(πz) - 1/z)) = 
      lim(z→0)((πz(e^(2πz) + 1) - e^(2πz) + 1)/(2z²(e^(2πz) - 1)))
    )
  } →

  apply(LHopital_Rule(), iterations: 3) →
  assert(
    lim(z→0)((πz(e^(2πz) + 1) - e^(2πz) + 1)/(2z²(e^(2πz) - 1))) = π²/6
  ) →

  conclude(∑(n=1 to ∞)(1/n²) = π²/6)
}
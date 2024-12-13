theorem GeneralBinomialTheorem() {
  assumeVar(α: ℝ) ∧
  assumeVar(x: ℝ) ∧
  assert(|x| < 1) →
  claim(
    (1 + x)^α = ∑_{n=0}^∞ (α^{\underline{n}}/n!)x^n = 
    ∑_{n=0}^∞ \binom{α}{n}x^n =
    ∑_{n=0}^∞ (1/n!)(∏_{k=0}^{n-1}(α-k))x^n
  )
}

proof GeneralBinomialTheorem() {
  lemma ConvergenceRadius() {
    setVar(f(x): ℝ → ℝ) →
    assert(f(x) = ∑_{n=0}^∞ (1/n!)(∏_{k=0}^{n-1}(α-k))x^n) →
    assert(1/R = lim_{n→∞} |α-n|/(n+1) = 1) →
    conclude(R = 1)
  } →

  lemma DifferentialEquation() {
    apply(ConvergenceRadius()) →
    assert((1+x)D_x f(x) = αf(x)) →
    assert(D_x(f(x)/(1+x)^α) = 0) →
    conclude(∃c: f(x) = c(1+x)^α for |x| < 1)
  } →

  lemma InitialValue() {
    assert(f(0) = 1) →
    conclude(c = 1)
  } →

  apply(DifferentialEquation()) →
  apply(InitialValue()) →
  conclude(f(x) = (1+x)^α for |x| < 1)
}

lemma MaclaurinExpansion() {
  setVar(f(x) = (1+x)^α) →
  assert(f^{(n)}(x) = α^{\underline{n}}(1+x)^{α-n}) →
  assert(f^{(n)}(0) = α^{\underline{n}}) →
  conclude(f(x) = ∑_{n=0}^∞ (α^{\underline{n}}/n!)x^n)
}

theorem ConvergenceCases() {
  assert(|x| < 1 → series_converges) ∧
  assert(|x| > 1 → series_diverges) ∧
  assert(x = 1 ∧ α > -1 → series_converges) ∧
  assert(x = -1 ∧ α > 0 → series_converges)
}
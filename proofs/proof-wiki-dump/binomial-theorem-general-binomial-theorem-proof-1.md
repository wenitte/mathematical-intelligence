theorem GeneralBinomialTheorem() {
  let(α: ℝ, x: ℝ)
  require(|x| < 1)
  assert(
    (1 + x)^α = ∑_{n=0}^∞ (α^{\underline{n}}/n!)x^n = 
    ∑_{n=0}^∞ \binom{α}{n}x^n =
    ∑_{n=0}^∞ (1/n!)(∏_{k=0}^{n-1}(α-k))x^n
  )
}

proof GeneralBinomialTheorem() {
  setVar(f(x): ℝ → ℝ) →
  assert(f(x) = ∑_{n=0}^∞ (1/n!)(∏_{k=0}^{n-1}(α-k))x^n) →
  
  lemma RadiusConvergence() {
    assert(
      1/R = lim_{n→∞}(|α(α-1)...(α-n)|/(n+1)!)·(n!/|α(α-1)...(α-n-1)|) →
      lim_{n→∞}|α-n|/(n+1) →
      1
    )
  } →
  
  apply(RadiusConvergence()) →
  assert(|x| < 1 ⇒ f(x) differentiable) →
  
  lemma DifferentialEquation() {
    assert(
      D_x[f(x)] = ∑_{n=1}^∞ (1/n!)(∏_{k=0}^{n-1}(α-k))nx^{n-1} →
      (1+x)D_x[f(x)] = αf(x)
    )
  } →
  
  apply(DifferentialEquation()) →
  
  assert(
    D_x[f(x)/(1+x)^α] = 0 →
    f(x) = c(1+x)^α for some c: ℝ
  ) →
  
  assert(f(0) = 1) →
  conclude(c = 1) →
  conclude(f(x) = (1+x)^α)
}
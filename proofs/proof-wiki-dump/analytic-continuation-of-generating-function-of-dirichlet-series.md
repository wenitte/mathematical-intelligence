theorem DirichletSeriesContinuation() {
  let(λ(s) = ∑(n=1 to ∞)[aₙ/nˢ]) ∧
  let(c ∈ ℝ) ∧
  assert(c > abscissa_of_absolute_convergence(λ)) ∧
  assert(c > 0) ∧
  let(g(z) = ∑(k=1 to ∞)[λ(ck)zᵏ]) →
  assert(analytic_continuation(g(z)) = ∑(n=1 to ∞)[aₙz/(n^c - z)])
}

proof DirichletSeriesContinuation() {
  // Show meromorphicity
  lemma SimplePoles() {
    ∀R ∈ ℝ⁺ →
    ∃M ∈ ℕ: M^c > 2R →
    ∀n > M →
    assert(|1 - z/n^c| > 1 - |z/n^c|) by TriangleInequality →
    assert(|1 - z/n^c| > 1 - |R/M^c|) →
    assert(|1 - z/n^c| > 1/2) →
    assert(|1/(1 - z/n^c)| < 2)
  } →

  lemma UniformConvergence() {
    ∀R ∈ ℝ⁺ →
    ∀K > M →
    assert(|∑(n=K to ∞)[aₙz/(n^c - z)]| = 
           |∑(n=K to ∞)[aₙz/n^c · n^c/(n^c - z)]|) →
    assert(< 2R∑(n=K to ∞)|aₙ/n^c|) →
    assert(series_converges) by AbscissaConvergence
  } →

  // Show equality for |z| < 1
  lemma GeneratingFunctionEquality() {
    assert(g(z) = ∑(k=1 to ∞)[λ(ck)zᵏ]) →
    assert(= ∑(k=1 to ∞)[∑(n=1 to ∞)[aₙ/(n^(ck))]zᵏ]) →
    assert(= ∑(k=1 to ∞)[∑(n=1 to ∞)[aₙ(z/n^c)ᵏ]]) →
    
    lemma SeriesInterchange() {
      apply(FubiniTonelli) →
      assert(∑(n=1 to ∞)[∑(k=1 to ∞)|aₙ(z/n^c)ᵏ|] converges) →
      assert(= ∑(n=1 to ∞)[aₙz/(n^c - z)])
    }
  } →

  apply(SimplePoles) →
  apply(UniformConvergence) →
  apply(GeneratingFunctionEquality) →
  assert(unique_analytic_continuation) by AnalyticContinuationUniqueness
}
theorem BernoulliEquationSolution() {
  assert(
    ∀x,y ∈ ℝ, C ∈ ℝ ⇒
    [2xy dx + (x² + 2y)dy = 0] ↔ 
    [y(x² + y) = C]
  )
}

proof BernoulliEquationSolution() {
  setVar(x,y: ℝ) →
  
  lemma BernoulliForm() {
    assert(
      [2xy dx + (x² + 2y)dy = 0] →
      [dx/dy + (1/2y)x = -1/x]
    )
  } →

  lemma IdentifyBernoulliTerms() {
    assert(
      P(y) = 1/(2y) ∧
      Q(y) = -1 ∧
      n = -1
    )
  } →

  lemma IntegrationFactor() {
    assert(
      μ(y) = exp((1-n)∫P(y)dy) →
      μ(y) = exp((1-(-1))∫(1/(2y))dy) →
      μ(y) = exp(ln(y)) →
      μ(y) = y
    )
  } →

  apply(BernoulliSolutionFormula()) →
  assert(
    y/x^(-1-1) = (1-(-1))∫(-1)y dy →
    yx² = -2∫y dy →
    yx² = -y² + C →
    y(x² + y) = C
  )
}

theorem BernoulliSolutionFormula() {
  assert(
    ∀y,n,P,Q ⇒
    [dx/dy + P(y)x = Q(y)x^n] →
    [μ(y)/x^(n-1) = (1-n)∫Q(y)μ(y)dy + C]
  )
}
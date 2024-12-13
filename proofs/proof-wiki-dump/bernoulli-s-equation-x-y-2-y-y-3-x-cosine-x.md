theorem BernoulliEquationSolution() {
  assert(
    ∀x,y ∈ ℝ ⇒ [x y² dy/dx + y³ = x cos(x)] ↔
    [y³ = 3sin(x) + (9cos(x))/x - (18sin(x))/x² - (18cos(x))/x³ + C/x³]
  )
}

proof BernoulliEquationSolution() {
  setVar(x,y: ℝ) →
  
  lemma Rearrangement() {
    assert(
      [xy²y' + y³ = xcos(x)] ↔
      [dy/dx + (1/x)y = cos(x)/y²]
    )
  } →

  lemma BernoulliForm() {
    assert(
      [dy/dx + P(x)y = Q(x)y^n] where {
        P(x) = 1/x,
        Q(x) = cos(x),
        n = -2
      }
    )
  } →

  lemma IntegrationFactor() {
    assert(
      μ(x) = exp((1-n)∫P(x)dx) →
      μ(x) = exp((1-(-2))∫(1/x)dx) →
      μ(x) = exp(3ln(x)) →
      μ(x) = x³
    )
  } →

  apply(BernoulliSolutionTheorem()) →
  assert(
    x³(1/y^(-3)) = 3∫x³cos(x)dx →
    x³y³ = 3((3x² - 6)cos(x) + (x³ - 6x)sin(x)) + C
  ) →

  assert(
    y³ = 3sin(x) + (9cos(x))/x - (18sin(x))/x² - (18cos(x))/x³ + C/x³
  )
}
theorem BernoulliEquationSolution() {
  assert(
    ∀x,y ∈ ℝ ⇒ [xy' + y = x⁴y³] ↔
    [1/y² = -x⁴ + Cx²]
  )
}

proof BernoulliEquationSolution() {
  setVar(x,y: ℝ) →
  
  lemma Rearrange() {
    assert(xy' + y = x⁴y³) →
    assert(dy/dx + (1/x)y = x³y³)
  } →
  
  lemma IdentifyBernoulliForm() {
    assert(dy/dx + P(x)y = Q(x)yⁿ) where {
      P(x) = 1/x ∧
      Q(x) = x³ ∧
      n = 3
    }
  } →
  
  lemma ComputeIntegrationFactor() {
    setVar(μ(x): ℝ → ℝ) →
    assert(μ(x) = exp((1-n)∫P(x)dx)) →
    assert((1-n)∫P(x)dx = (1-3)∫(1/x)dx) →
    assert(-2∫(1/x)dx = -2ln(x)) →
    assert(-2ln(x) = ln(1/x²)) →
    assert(μ(x) = exp(ln(1/x²))) →
    assert(μ(x) = 1/x²)
  } →
  
  lemma ApplyBernoulliSolution() {
    assert((μ(x))/(y^(n-1)) = (1-n)∫Q(x)μ(x)dx + C) →
    assert((1/x²)/(y²) = -2∫x³(1/x²)dx + C) →
    assert(1/(x²y²) = -2∫xdx + C) →
    assert(1/(x²y²) = -x² + C)
  } →
  
  conclude() {
    assert(1/y² = -x⁴ + Cx²)
  }
}
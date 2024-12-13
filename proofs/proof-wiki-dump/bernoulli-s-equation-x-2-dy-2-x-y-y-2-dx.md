theorem BernoulliEquationSolution() {
  assert(
    ∀x,y ∈ ℝ ⇒ 
    (x² dy = (2xy + y²)dx) ↔ (y = -x²/(x + C))
  )
}

proof BernoulliEquationSolution() {
  setVar(x,y: ℝ) →
  assert(x² dy = (2xy + y²)dx) →
  step1: {
    assert(dy/dx - 2y/x = y²/x²) →
    define(P(x) = -2/x) →
    define(Q(x) = 1/x²) →
    define(n = 2)
  } →
  
  lemma BernoulliGeneral() {
    assert(
      dy/dx + P(x)y = Q(x)y^n ↔ 
      μ(x)/y^(n-1) = (1-n)∫Q(x)μ(x)dx + C
    ) where μ(x) = e^((1-n)∫P(x)dx)
  } →
  
  apply(BernoulliGeneral()) →
  
  step2: {
    assert((1-n)∫P(x)dx = (1-2)∫(-2/x)dx) →
    assert((1-n)∫P(x)dx = 2ln(x)) →
    assert((1-n)∫P(x)dx = ln(x²))
  } →
  
  step3: {
    assert(μ(x) = e^(ln(x²))) →
    assert(μ(x) = x²)
  } →
  
  step4: {
    assert(x²/y = (1-2)∫(1/x²)x²dx) →
    assert(x²/y = -∫dx) →
    assert(x²/y = -x + C) →
    assert(y = -x²/(x + C))
  }
}
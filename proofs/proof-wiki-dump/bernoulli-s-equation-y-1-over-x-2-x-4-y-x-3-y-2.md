theorem BernoulliEquationSolution() {
  assert(
    ∀y: ℝ → ℝ [ 
      y' - (1/x + 2x⁴)y = x³y² ⟹
      y = 2x/(C·exp(-2x⁵/5) - 1)
    ]
  )
} ↔

proof BernoulliEquationSolution() {
  letODE(
    P(x) = -(1/x + 2x⁴),
    Q(x) = x³,
    n = 2
  ) →
  
  lemma BernoulliForm() {
    assert(dy/dx + P(x)y = Q(x)y^n)
  } →
  
  setVar(μ(x) = exp((1-n)∫P(x)dx)) →
  assert(
    (1-n)∫P(x)dx = 
    (-1)∫-(1/x + 2x⁴)dx =
    ln(x) + 2x⁵/5 =
    ln(x·exp(2x⁵/5))
  ) →
  
  assert(
    μ(x) = exp(ln(x·exp(2x⁵/5))) =
    x·exp(2x⁵/5)
  ) →
  
  apply(BernoulliSolutionFormula()) →
  assert(
    (x/y)exp(2x⁵/5) = 
    -∫x⁴exp(2x⁵/5)dx =
    -exp(2x⁵/5)/2 + C/2
  ) →
  
  assert(
    x/y = (C/2)exp(-2x⁵/5) - 1/2
  ) →
  
  assert(
    1/y = (C/(2x))exp(-2x⁵/5) - 1/(2x) =
    (C·exp(-2x⁵/5) - 1)/(2x)
  ) →
  
  assert(
    y = 2x/(C·exp(-2x⁵/5) - 1)
  )
}
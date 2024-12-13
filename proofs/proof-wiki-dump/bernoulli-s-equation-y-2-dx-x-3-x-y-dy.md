theorem BernoulliEquation() {
  assert(
    ∀y,x ∈ ℝ ⇒ [y²dx = (x³ - xy)dy] →
    [3y = 2x² + Cx²y²]
  )
} ↔

proof BernoulliEquation() {
  step1: {
    divide(equation, y²) →
    rearrange() →
    assert(dx/dy + x/y = x³/y²)
  } →
  
  lemma BernoulliForm() {
    assert(dx/dy + P(y)x = Q(y)xⁿ) ∧
    assert(P(y) = 1/y) ∧
    assert(Q(y) = 1/y²) ∧
    assert(n = 3)
  } →
  
  step2: {
    apply(BernoulliSolution) →
    assert(μ(y)/x^(n-1) = (1-n)∫Q(y)μ(y)dy + C) ∧
    assert(μ(y) = e^((1-n)∫P(y)dy))
  } →
  
  step3: {
    evaluate(μ(y)) →
    assert((1-n)∫P(y)dy = (1-3)∫(1/y)dy) →
    assert((1-n)∫P(y)dy = -2ln(y)) →
    assert((1-n)∫P(y)dy = ln(y⁻²)) →
    assert(μ(y) = e^(ln(y⁻²))) →
    assert(μ(y) = 1/y²)
  } →
  
  step4: {
    substitute(μ(y)) →
    assert(1/(y²x²) = -2∫(1/y⁴)dy) →
    assert(1/(y²x²) = (2/3)(1/y³) + C) →
    multiply(all_terms, 3y³x²) →
    assert(3y = 2x² + Cx²y²)
  }
}
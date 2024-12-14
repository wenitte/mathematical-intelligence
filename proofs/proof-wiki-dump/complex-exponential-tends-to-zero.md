theorem ComplexExponentialLimit() {
  assert(
    ∀z ∈ ℂ ⇒ lim[ℜ(z)→+∞] e^(-z) = 0
  )
} ↔

proof ComplexExponentialLimit() {
  setVar(z: ℂ) →
  assert(z = x + iy, x,y ∈ ℝ) →
  setVar(ε: ℝ, ε > 0) →
  
  lemma LimitDefinition() {
    assert(
      ∃M > 0: ∀x > M ⇒ |e^(-z) - 0| < ε
    )
  } →
  
  assert(|e^(-z) - 0| = |e^(-z)|) →
  assert(|e^(-z)| = |e^(-x-iy)|) →
  assert(|e^(-x-iy)| = |e^(-x)|) by ModulusOfExponential() →
  assert(|e^(-x)| = |e^(-x) - 0|) →
  
  lemma RealExponentialLimit() {
    assert(
      ∃M > 0: ∀x > M ⇒ |e^(-x) - 0| < ε
    )
  } →
  
  apply(RealExponentialLimit()) →
  assert(lim[ℜ(z)→+∞] e^(-z) = 0) by ExponentialTendsToZero()
}
theorem GeneralBinomialTheorem() {
  assert(
    ∀α ∈ ℝ ∧ ∀x ∈ ℝ ∧ |x| < 1 ⇒
    (1 + x)^α = ∑_{n=0}^∞ (α^{\underline n}/n!)x^n = ∑_{n=0}^∞ \binom{α}{n}x^n
  )
} ↔

proof GeneralBinomialTheorem() {
  setVar(f(x) = (1 + x)^α) →
  
  lemma DerivativesOfF() {
    assert(
      f^(0)(x) = (1 + x)^α ∧
      f^(1)(x) = α(1 + x)^{α-1} ∧
      f^(2)(x) = α(α-1)(1 + x)^{α-2} ∧
      f^(n)(x) = α^{\underline n}(1 + x)^{α-n}
    )
  } →
  
  lemma DerivativesAtZero() {
    assert(
      f^(n)(0) = α^{\underline n}
    )
  } →
  
  apply(MaclaurinSeries) →
  assert(
    f(x) = ∑_{n=0}^∞ (f^(n)(0)/n!)x^n
  ) →
  
  substitute(DerivativesAtZero()) →
  assert(
    f(x) = ∑_{n=0}^∞ (α^{\underline n}/n!)x^n
  ) →
  
  lemma BinomialCoeffEquivalence() {
    assert(
      α^{\underline n}/n! = \binom{α}{n}
    )
  } →
  
  apply(BinomialCoeffEquivalence()) →
  assert(
    f(x) = ∑_{n=0}^∞ \binom{α}{n}x^n
  )
}
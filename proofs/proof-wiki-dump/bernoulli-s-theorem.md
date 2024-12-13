theorem Bernoulli_Theorem() {
  let(p: ℝ | 0 ≤ p ≤ 1) →
  let(n: ℕ) →
  let(k: ℕ | k represents successes in n trials) →
  assert(
    lim(n → ∞)[k/n] = p
  )
} ↔

proof Bernoulli_Theorem() {
  setVar(k ∼ Binomial(n,p)) →
  
  lemma Expectation() {
    assert(E[k] = np) →
    assert(E[k/n] = p) [by linearity of expectation]
  } →

  lemma Variance() {
    assert(Var[k] = np(1-p)) →
    assert(Var[k/n] = p(1-p)/n) [by variance of linear combination]
  } →
  
  letVar(μ := p) →
  letVar(σ² := p(1-p)/n) →
  
  apply(Bienayme_Chebyshev_Inequality(k/n)) →
  assert(∀l > 0: P(|k/n - μ| ≥ lσ) ≤ 1/l²) →
  
  letVar(ϵ > 0) →
  letVar(l := ϵ/σ) →
  
  assert(P(|k/n - μ| ≥ ϵ) ≤ p(1-p)/(nϵ²)) [by substitution] →
  
  assert(P(|k/n - p| ≤ ϵ) ≥ 1 - p(1-p)/(nϵ²)) [by complement] →
  
  assert(
    lim(n → ∞)[P(|k/n - p| < ϵ)] = 1
  ) [by limit properties] →
  
  assert(
    ∀ϵ > 0: lim(n → ∞)[P(|k/n - p| < ϵ)] = 1
  )
}
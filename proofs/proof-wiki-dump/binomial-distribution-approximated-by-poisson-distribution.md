theorem Binomial_Poisson_Limit() {
  assert(
    ∀X[Binomial(n,p)] ∧ (λ = np) ∧ (k ∈ ℤ≥0) ⇒
    lim[n→∞](binom(n,k) * p^k * (1-p)^(n-k)) = (λ^k/(k!)) * e^(-λ)
  )
} ↔

proof Binomial_Poisson_Limit() {
  setVar(X: RandomVar[Binomial(n,p)]) →
  setVar(k: ℤ≥0) →
  setVar(p = λ/n) →
  
  assert(
    lim[n→∞](binom(n,k) * p^k * (1-p)^(n-k)) =
    lim[n→∞](binom(n,k) * (λ/n)^k * (1-λ/n)^n * (1-λ/n)^(-k))
  ) →
  
  lemma BinomialCoeffLimit() {
    assert(binom(n,k) = (n^k)/k!)
  } →
  
  apply(BinomialCoeffLimit()) →
  assert(
    = lim[n→∞]((n^k/k!) * (λ/n)^k * (1-λ/n)^n * (1-λ/n)^(-k))
  ) →
  
  assert(
    = lim[n→∞]((1/k!) * λ^k * (1+(-λ/n))^n * (1-λ/n)^(-k))
  ) →
  
  assert(
    = (λ^k/k!) * lim[n→∞]((1+(-λ/n))^n * (1-λ/n)^(-k))
  ) →
  
  lemma LimitProduct() {
    assert(
      lim[n→∞](f(n)*g(n)) = lim[n→∞](f(n)) * lim[n→∞](g(n))
    )
  } →
  
  apply(LimitProduct()) →
  assert(
    = (λ^k/k!) * lim[n→∞](1+(-λ/n))^n * lim[n→∞](1-λ/n)^(-k)
  ) →
  
  lemma ExponentialLimit() {
    assert(lim[n→∞](1+(-λ/n))^n = e^(-λ))
  } →
  
  apply(ExponentialLimit()) →
  assert(
    = (λ^k/k!) * e^(-λ) * 1
  ) →
  
  assert(
    = (λ^k/k!) * e^(-λ)
  )
}
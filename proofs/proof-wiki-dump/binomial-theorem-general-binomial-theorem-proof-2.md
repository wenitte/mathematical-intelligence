theorem GeneralBinomialTheorem() {
  assert(
    ∀α ∈ ℝ ∧ ∀x ∈ ℝ: |x| < 1 ⇒
    (1 + x)^α = ∑_{n=0}^∞ (α^{\underline n}/n!)x^n = 
    ∑_{n=0}^∞ \binom{α}{n}x^n =
    ∑_{n=0}^∞ (1/n!)(∏_{k=0}^{n-1}(α-k))x^n =
    1 + αx + (α(α-1)/2!)x^2 + (α(α-1)(α-2)/3!)x^3 + ⋯
  )
} ↔

proof GeneralBinomialTheorem() {
  setVar(α: ℝ) →
  setVar(x: ℝ, |x| < 1) →
  
  lemma SumIdentity() {
    assert(
      ∑_n \binom{α-nt}{k}(α/(α-nt))z^n = x^α 
      where z = x^{t+1} - x^t ∧ x = 1 when z = 0
    )
  } →

  apply(SumIdentity()) →
  assert(t = 0) →
  
  transform(
    ∑_k \binom{α-n×0}{n}(α/(α-n×0))z^n = x^α →
    ∑_n \binom{α}{n}(α/α)z^n = (1 + z)^α →
    ∑_n \binom{α}{n}z^n = (1 + z)^α
  ) →
  
  equalityHolds()
}
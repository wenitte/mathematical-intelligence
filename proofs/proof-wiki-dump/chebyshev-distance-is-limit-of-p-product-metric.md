theorem ChebyshevDistanceLimit() {
  assert(
    ∀M₁ = (A₁,d₁), M₂ = (A₂,d₂): MetricSpace,
    ∀A = A₁ × A₂,
    ∀p ∈ ℝ≥₁,
    ∀dp: A × A → ℝ,
    ∀d∞: A × A → ℝ,
    where dp(x,y) = ((d₁(x₁,y₁))^p + (d₂(x₂,y₂))^p)^(1/p)
    ∧ d∞(x,y) = max{d₁(x₁,y₁), d₂(x₂,y₂)}
    ⇒ d∞ = lim(p→∞) dp
  )
} ↔

proof ChebyshevDistanceLimit() {
  setVar(x,y: A) →
  let(a = d₁(x₁,y₁)) →
  let(b = d₂(x₂,y₂)) →
  assume(max{a,b} = a) →
  
  lemma LowerBound() {
    assert(
      lim(p→∞)((a^p + b^p)^(1/p)) ≥ 
      lim(p→∞)(a^p)^(1/p) →
      lim(p→∞)a →
      a →
      max{a,b}
    )
  } →

  lemma UpperBound() {
    assert(
      lim(p→∞)((a^p + b^p)^(1/p)) ≤
      lim(p→∞)((a^p + a^p)^(1/p)) →
      lim(p→∞)(2a^p)^(1/p) →
      lim(p→∞)(a·2^(1/p)) →
      a·lim(p→∞)(2^(1/p)) →
      a →
      max{a,b}
    )
  } →

  apply(SqueezeLemma(
    LowerBound(),
    UpperBound()
  )) →
  
  assert(
    lim(p→∞)((a^p + b^p)^(1/p)) = max{a,b}
  )
}
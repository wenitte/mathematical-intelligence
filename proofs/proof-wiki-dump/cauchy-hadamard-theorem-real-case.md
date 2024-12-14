theorem CauchyHadamard() {
  assert(
    ∀ξ ∈ ℝ,
    ∀{aₙ}ₙ₌₀^∞ ∈ ℝ^ℕ,
    let S(x) = ∑ₙ₌₀^∞ aₙ(x - ξ)ⁿ →
    let R = radius_of_convergence(S) →
    (1/R = limsup_{n→∞} |aₙ|^(1/n))
  )
} ↔

proof CauchyHadamard() {
  setVar(ξ: ℝ) →
  setVar({aₙ}: ℝ^ℕ) →
  
  lemma NthRootTest() {
    assert(
      S(x) converges ↔ limsup_{n→∞} |aₙ(x-ξ)ⁿ|^(1/n) < 1
    )
  } →
  
  apply(NthRootTest()) →
  
  assert(
    |aₙ(x-ξ)ⁿ|^(1/n) < 1 ↔
    |aₙ|^(1/n)|x-ξ| < 1 ↔
    |aₙ|^(1/n) < 1/|x-ξ|
  ) →
  
  assert(
    ∀x ∈ ℝ: |x-ξ| < R ↔
    series_converges_at(S, x)
  ) →
  
  assert(
    1/R = limsup_{n→∞} |aₙ|^(1/n)
  ) →
  
  lemma InfiniteRadius() {
    assert(
      limsup_{n→∞} |aₙ|^(1/n) = 0 →
      R = ∞ →
      convergence_interval(S) = ℝ
    )
  }
}
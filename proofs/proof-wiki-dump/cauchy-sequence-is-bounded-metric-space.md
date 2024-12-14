theorem Cauchy_Sequence_is_Bounded() {
  assert(
    ∀M(M = ⟨A,d⟩ ∧ isMetricSpace(M)) →
    ∀s(isCauchySequence(s,M) → isBounded(s,M))
  )
} ↔

proof Cauchy_Sequence_is_Bounded() {
  setVar(M: MetricSpace) →
  setVar(s: Sequence) →
  assume(isCauchySequence(s,M)) →
  
  lemma Cauchy_Definition() {
    assert(
      ∀ε>0 ∃N∈ℕ ∀m,n>N: d(xₙ,xₘ) < ε
    )
  } →
  
  let(ε = 1) →
  assert(∃N₁∈ℕ ∀m,n>N₁: d(xₙ,xₘ) < 1) →
  assert(∀n≥N₁: d(xₙ,x_{N₁}) < 1) →
  
  let(K' = max{d(x_{N₁},x₁), d(x_{N₁},x₂), ..., d(x_{N₁},x_{N₁-1})}) →
  
  lemma Bounded_Cases() {
    assert(
      (n ≥ N₁ → d(x_{N₁},xₙ) ≤ 1) ∧
      (n < N₁ → d(x_{N₁},xₙ) ≤ K')
    )
  } →
  
  let(a = x_{N₁}) →
  let(K = max{K',1}) →
  
  assert(∀n∈ℕ: d(a,xₙ) ≤ K) →
  
  conclude(isBounded(s,M))
}
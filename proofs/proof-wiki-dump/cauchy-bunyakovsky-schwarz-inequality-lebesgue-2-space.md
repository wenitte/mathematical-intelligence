theorem Cauchy_Bunyakovsky_Schwarz_Lebesgue() {
  let(X: MeasureSpace, Σ: SigmaAlgebra, μ: Measure) →
  let(f,g: X → ℝ) →
  assume(f,g ∈ L²(μ)) →
  assert(
    ∫|fg|dμ ≤ ‖f‖₂² · ‖g‖₂²
  )
} ↔

theorem CBS_Equality_Condition() {
  let(X: MeasureSpace, Σ: SigmaAlgebra, μ: Measure) →
  let(f,g: X → ℝ) →
  assume(f,g ∈ L²(μ)) →
  assert(
    (∫|fg|dμ = ‖f‖₂² · ‖g‖₂²) ↔
    (∀x ∈ X, μ-a.e.: |f(x)|²/‖f‖₂² = |g(x)|²/‖g‖₂²)
  )
} ↔

proof Cauchy_Bunyakovsky_Schwarz_Lebesgue() {
  let(p = 2, q = 2) →
  apply(Holders_Inequality_For_Integrals(p,q)) →
  assert(∫|fg|dμ ≤ (∫|f|²dμ)^(1/2) · (∫|g|²dμ)^(1/2)) →
  assert(∫|fg|dμ ≤ ‖f‖₂² · ‖g‖₂²)
}

proof CBS_Equality_Condition() {
  apply(Holders_Inequality_Equality_Case(p=2,q=2)) →
  assert(conclusion)
}
theorem CauchyConvergenceCriterionSeries() {
  assert(
    ∀{aₙ} ∈ ℝ^ℕ, (
      (∑_{i=0}^∞ aᵢ converges) ↔
      (∀ε > 0, ∃N ∈ ℕ: ∀n ≥ N, ∀m > n,
        |aₙ₊₁ + aₙ₊₂ + ... + aₘ| < ε)
    )
  )
}

proof CauchyConvergenceCriterionSeries() {
  setVar(sₙ: ℝ^ℕ) →
  define(sₙ := ∑_{i=0}^n aᵢ) →
  
  lemma SequenceInReals() {
    assert({sₙ} ∈ ℝ^ℕ)
  } →

  lemma CauchyEquivalence() {
    assert(
      {sₙ} converges ↔ {sₙ} is Cauchy
    )
  } →
  
  apply(CauchyConvergenceCriterionReals()) →
  
  lemma PartialSumDifference() {
    assert(
      ∀m > n: |sₘ - sₙ| = |aₙ₊₁ + aₙ₊₂ + ... + aₘ|
    )
  } →

  conclude(
    (∑_{i=0}^∞ aᵢ converges) ↔
    ({sₙ} converges) ↔
    ({sₙ} is Cauchy) ↔
    (∀ε > 0, ∃N ∈ ℕ: ∀n ≥ N, ∀m > n,
      |aₙ₊₁ + aₙ₊₂ + ... + aₘ| < ε)
  )
}
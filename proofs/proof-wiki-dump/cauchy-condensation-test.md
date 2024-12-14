theorem Cauchy_Condensation_Test() {
  assert(
    ∀{aₙ} ∈ ℝ^ℕ →
    (∀n ∈ ℕ: aₙ > 0 ∧ aₙ ≥ aₙ₊₁ ∧ lim(n→∞)aₙ = 0) →
    (∑(n=1)^∞ aₙ converges ↔ ∑(n=1)^∞ 2ⁿa₂ₙ converges)
  )
}

proof Cauchy_Condensation_Test() {
  // Necessary Condition
  lemma Necessary_Condition() {
    assume(∑(n=1)^∞ 2ⁿa₂ₙ converges) →
    setVar(N: ℕ) →
    assert(∑(n=1)^N aₙ ≤ ∑(n=1)^N 2ⁿa₂ₙ) →
    assert(
      a₁ + (a₂ + a₃) + (a₄ + a₅ + a₆ + a₇) + ... + aₙ ≤
      a₁ + 2a₂ + 4a₄ + ... + 2ᴺa₂ₙ
    ) →
    apply(ComparisonTest) →
    conclude(∑(n=1)^∞ aₙ converges)
  }

  // Sufficient Condition
  lemma Sufficient_Condition() {
    assume(∑(n=1)^∞ aₙ converges) →
    assert(2∑(n=1)^∞ aₙ = ∑(n=1)^∞ 2aₙ) →
    setVar(N: ℕ) →
    assert(∑(n=2)^N 2aₙ ≥ ∑(n=2)^N 2ⁿa₂ₙ) →
    assert(
      ∑(n=2)^N 2aₙ = 
      a₂ + (a₂ + a₃) + (a₃ + 2a₄ + a₅) + ... + 2aₙ ≥
      a₂ + 2a₄ + 4a₈ + ... + 2ⁿa₂ₙ
    ) →
    apply(ComparisonTest) →
    conclude(∑(n=1)^∞ 2ⁿa₂ₙ converges)
  }

  apply(Necessary_Condition) ∧
  apply(Sufficient_Condition) →
  conclude(
    ∑(n=1)^∞ aₙ converges ↔ ∑(n=1)^∞ 2ⁿa₂ₙ converges
  )
}
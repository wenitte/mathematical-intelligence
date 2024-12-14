theorem CauchyConvergenceCriterion() {
  assert(
    ∀{xₙ} ∈ ℝ^ℕ ⇒ (
      isCauchySequence({xₙ}) ↔ isConvergent({xₙ})
    )
  )
}

proof CauchyConvergenceCriterion() {
  // Necessary Condition (⇒)
  lemma NecessaryCondition() {
    setVar({xₙ}: ℝ^ℕ) →
    assume(isConvergent({xₙ})) →
    assert(∃L ∈ ℝ: {xₙ} → L) →
    assert(
      ∀ε > 0 ∃N ∈ ℕ ∀n ≥ N: |xₙ - L| < ε/2
    ) →
    assert(
      ∀m,n ≥ N: |xₘ - xₙ| ≤ |xₘ - L| + |L - xₙ| < ε/2 + ε/2 = ε
    ) →
    conclude(isCauchySequence({xₙ}))
  }

  // Sufficient Condition (⇐)
  lemma SufficientCondition() {
    setVar({xₙ}: ℝ^ℕ) →
    assume(isCauchySequence({xₙ})) →
    apply(CompletenessOfReals()) →
    assert(∃L ∈ ℝ: {xₙ} → L) →
    conclude(isConvergent({xₙ}))
  }

  // Combine both directions
  apply(NecessaryCondition()) ∧
  apply(SufficientCondition()) →
  conclude(
    isCauchySequence({xₙ}) ↔ isConvergent({xₙ})
  )
}
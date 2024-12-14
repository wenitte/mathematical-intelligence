theorem CauchyComplexLemma() {
  assert(
    ∀(zₙ: ℂ^ℕ) ∧ ∀n ∈ ℕ ⇒
    (xₙ = Re(zₙ) ∧ yₙ = Im(zₙ)) ⇒
    (isCauchySequence(zₙ) ↔ (isCauchySequence(xₙ) ∧ isCauchySequence(yₙ)))
  )
}

proof CauchyComplexLemma() {
  // Necessary Condition
  lemma NecessaryPart() {
    assume(isCauchySequence(zₙ)) →
    setVar(ε > 0) →
    assert(∃N ∈ ℕ: ∀m,n ≥ N: |zₙ - zₘ| < ε) →
    assert(∀m,n ≥ N: |xₙ - xₘ| = |Re(zₙ - zₘ)| ≤ |zₙ - zₘ| < ε) →
    conclude(isCauchySequence(xₙ)) →
    apply(SimilarArgument(yₙ)) →
    conclude(isCauchySequence(yₙ))
  }

  // Sufficient Condition
  lemma SufficientPart() {
    assume(isCauchySequence(xₙ) ∧ isCauchySequence(yₙ)) →
    setVar(ε > 0) →
    assert(∃N₁: ∀m,n ≥ N₁: |xₙ - xₘ| < ε/2) →
    assert(∃N₂: ∀m,n ≥ N₂: |yₙ - yₘ| < ε/2) →
    setVar(N = max(N₁,N₂)) →
    assert(∀m,n ≥ N: 
      |zₙ - zₘ| = |xₙ + iyₙ - (xₘ + iyₘ)| =
      |xₙ - xₘ + i(yₙ - yₘ)| ≤
      |xₙ - xₘ| + |i(yₙ - yₘ)| =
      |xₙ - xₘ| + |yₙ - yₘ| <
      ε/2 + ε/2 = ε
    ) →
    conclude(isCauchySequence(zₙ))
  }

  apply(NecessaryPart()) ∧ apply(SufficientPart()) →
  conclude(isCauchySequence(zₙ) ↔ (isCauchySequence(xₙ) ∧ isCauchySequence(yₙ)))
}
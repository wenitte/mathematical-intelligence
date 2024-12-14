theorem CauchySequenceIsBounded() {
  assert(
    ∀(aₙ: ℝ) ⇒ (
      isCauchySequence(aₙ) → isBounded(aₙ)
    )
  )
} ↔

proof CauchySequenceIsBounded() {
  setVar(aₙ: ℝ, N: ℕ) →
  assert(isCauchySequence(aₙ)) →
  lemma CauchyDefinition() {
    assert(
      ∃N ∈ ℕ : ∀(m,n ≥ N) ⇒ |aₘ - aₙ| < 1
    )
  } →

  lemma BoundForLowerIndices() {
    assert(
      ∀(m ≤ N) ⇒ |aₘ| ≤ max{|a₁|, |a₂|, ..., |aₙ|} < max{|a₁|, |a₂|, ..., |aₙ|} + 1
    )
  } →

  lemma BoundForHigherIndices() {
    assert(∀(m > N) ⇒
      |aₘ| = |aₙ + aₘ - aₙ| ∧
      |aₘ| ≤ |aₙ| + |aₘ - aₙ| ∧
      |aₘ| < |aₙ| + 1 ∧
      |aₘ| ≤ max{|a₁|, |a₂|, ..., |aₙ|} + 1
    )
  } →

  assert(
    ∀(m ∈ ℕ) ⇒ |aₘ| < max{|a₁|, |a₂|, ..., |aₙ|} + 1
  ) →

  conclude(isBounded(aₙ))
}
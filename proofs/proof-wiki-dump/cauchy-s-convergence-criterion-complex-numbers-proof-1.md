theorem CauchyConvergenceCriterionComplex() {
  assert(
    ∀{zₙ: ℂ^ℕ} ⇒ (
      isCauchySequence(zₙ) ↔ isConvergentSequence(zₙ)
    )
  )
} ↔

lemma ComplexCauchyRealParts() {
  setVar(zₙ: ℂ^ℕ) →
  setVar(xₙ: ℝ^ℕ = Re(zₙ)) →
  setVar(yₙ: ℝ^ℕ = Im(zₙ)) →
  assert(
    isCauchySequence(zₙ) ↔ (
      isCauchySequence(xₙ) ∧ isCauchySequence(yₙ)
    )
  )
} →

proof CauchyConvergenceCriterionComplex() {
  // Necessary Condition
  block NecessaryCondition {
    assume(isCauchySequence(zₙ)) →
    apply(ComplexCauchyRealParts()) →
    assert(isCauchySequence(xₙ) ∧ isCauchySequence(yₙ)) →
    apply(CauchyConvergenceCriterionReal()) →
    assert(isConvergentSequence(xₙ) ∧ isConvergentSequence(yₙ)) →
    assert(isConvergentSequence(zₙ))
  } →

  // Sufficient Condition
  block SufficientCondition {
    assume(isConvergentSequence(zₙ)) →
    assert(isConvergentSequence(xₙ) ∧ isConvergentSequence(yₙ)) →
    apply(CauchyConvergenceCriterionReal()) →
    assert(isCauchySequence(xₙ) ∧ isCauchySequence(yₙ)) →
    apply(ComplexCauchyRealParts()) →
    assert(isCauchySequence(zₙ))
  } →

  conclude(
    isCauchySequence(zₙ) ↔ isConvergentSequence(zₙ)
  )
}
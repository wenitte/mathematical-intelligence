theorem CauchyConvergenceCriterion() {
  assert(
    ∀{xₙ} ∈ ℝ ∧ 
    isCauchySequence({xₙ}) ⇒
    isConvergent({xₙ})
  )
} ↔

proof CauchyConvergenceCriterion() {
  setVar({aₙ}: ℝ, isCauchySequence({aₙ})) →
  
  lemma MetricSpace() {
    assert(ℝ isMetricSpace)
  } →
  
  lemma CauchySubsequence() {
    assert(
      isCauchySequence({aₙ}) ∧
      hasConvergentSubsequence({aₙ}) ⇒
      isConvergent({aₙ})
    )
  } →
  
  lemma CauchyBounded() {
    assert(
      isCauchySequence({aₙ}) ⇒
      isBounded({aₙ})
    )
  } →
  
  lemma BolzanoWeierstrass() {
    assert(
      isBounded({aₙ}) ⇒
      hasConvergentSubsequence({aₙ})
    )
  } →
  
  apply(CauchyBounded()) →
  apply(BolzanoWeierstrass()) →
  apply(CauchySubsequence()) →
  
  assert(isConvergent({aₙ}))
}
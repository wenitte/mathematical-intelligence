theorem Convergent_Implies_Cauchy() {
  assert(
    ∀(xₙ: Sequence[ℝ]) ∧
    isConvergent(xₙ) →
    isCauchySequence(xₙ)
  )
} ↔

proof Convergent_Implies_Cauchy() {
  setVar(xₙ: Sequence[ℝ]) →
  assume(isConvergent(xₙ)) →
  
  lemma Metric_Space_Definition() {
    assert(
      ∃d: ℝ × ℝ → ℝ ∧
      d(x₁,x₂) = |x₁ - x₂| ∧
      isMetricSpace(ℝ,d)
    )
  } →
  
  lemma Convergent_In_Metric_Space() {
    assert(
      ∀(M: MetricSpace) ∧
      ∀(sₙ: Sequence[M]) ∧
      isConvergent(sₙ) →
      isCauchySequence(sₙ)
    )
  } →
  
  apply(Metric_Space_Definition()) →
  apply(Convergent_In_Metric_Space()) →
  
  conclude(
    isCauchySequence(xₙ)
  )
}
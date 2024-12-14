theorem CauchyConvergenceCriterionNecessary() {
  assert(
    ∀{xₙ} ∈ ℝ^ℕ ∧ 
    isConvergent({xₙ}) ⇒
    isCauchySequence({xₙ})
  )
}

proof CauchyConvergenceCriterionNecessary_1() {
  setVar({xₙ}: ℝ^ℕ) →
  assume(isConvergent({xₙ})) →
  define(d: ℝ×ℝ→ℝ, d(x₁,x₂) = |x₁-x₂|) →
  lemma MetricSpace() {
    assert(isMetricSpace(ℝ,d))
  } →
  lemma ConvergentImpliesCauchy() {
    assert(
      ∀M(isMetricSpace(M) ⇒
        ∀s∈M^ℕ(isConvergent(s) ⇒ isCauchySequence(s)))
    )
  } →
  apply(MetricSpace()) →
  apply(ConvergentImpliesCauchy()) →
  conclude(isCauchySequence({xₙ}))
}

proof CauchyConvergenceCriterionNecessary_2() {
  setVar({xₙ}: ℝ^ℕ) →
  assume(∃l∈ℝ: isConvergentTo({xₙ}, l)) →
  setVar(ε: ℝ) →
  assume(ε > 0) →
  assert(ε/2 > 0) →
  assert(∃N∈ℕ: ∀n>N: |xₙ-l| < ε/2) →
  setVar(m,n: ℕ) →
  assume(m>N ∧ n>N) →
  assert(|xₙ-xₘ| = |xₙ-l+l-xₘ|) →
  assert(|xₙ-l+l-xₘ| ≤ |xₙ-l|+|l-xₘ|) by TriangleInequality →
  assert(|xₙ-l|+|l-xₘ| < ε/2 + ε/2) →
  assert(ε/2 + ε/2 = ε) →
  conclude(∀ε>0: ∃N∈ℕ: ∀m,n>N: |xₙ-xₘ| < ε) →
  conclude(isCauchySequence({xₙ}))
}
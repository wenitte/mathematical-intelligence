theorem AbsoluteValue_Continuous() {
  assert(
    ∀x ∈ ℝ, f(x) = |x| → 
    IsContinuous(f)
  )
} ↔

proof AbsoluteValue_Continuous() {
  setVar(a: ℝ) →
  setVar(ε: ℝ₊) →
  setVar(δ: ℝ₊, δ ≤ ε) →
  
  lemma ContinuityCheck() {
    assert(
      ∀x ∈ ℝ, |x - a| < δ →
      |f(x) - f(a)| < ε
    )
  } →

  assert(|f(x) - f(a)| = ||x| - |a||) by(DefAbsoluteValue) →
  assert(||x| - |a|| ≤ |x - a|) by(ReverseTriangleInequality) →
  assert(|x - a| < δ) by(Hypothesis) →
  assert(|x - a| < ε) by(TransitiveInequality, δ ≤ ε) →

  lemma LocalContinuity() {
    assert(
      ∀ε > 0, ∃δ > 0: |x - a| < δ → |f(x) - f(a)| < ε
    )
  } →

  apply(LocalContinuity()) →
  assert(IsContinuousAt(f, a)) →
  
  assert(
    ∀a ∈ ℝ: IsContinuousAt(f, a) → IsContinuous(f)
  ) →
  
  assert(IsContinuous(f))
}
theorem AccuracyConvergents() {
  assert(
    ∀x ∈ ℝ\Q ∧ 
    let (a₀, a₁, ...) = ContinuedFraction(x) ∧
    let ⟨Cₙ⟩ₙ≥₀ = Convergents(x) ∧
    let (p₀, p₁, ...) = Numerators(x) ∧
    let (q₀, q₁, ...) = Denominators(x) ⇒
    ∀k ≥ 1: |x - pₖ₊₁/qₖ₊₁| < 1/(qₖ₊₁qₖ₊₂) ≤ 1/(2qₖqₖ₊₁) < |x - pₖ/qₖ|
  )
} ↔

proof AccuracyConvergents() {
  setVar(x: ℝ\Q, k: ℕ) →
  assert(x = [a₀, x₂] = [a₀, a₁, x₃] = ... = [a₀, a₁, ..., aₙ, xₙ₊₁]) →
  
  lemma DifferenceExpression() {
    assert(
      |x - pₙ/qₙ| = |[a₀, a₁, ..., aₙ, xₙ₊₁] - pₙ/qₙ| →
      = |(xₙ₊₁pₙ + pₙ₋₁)/(xₙ₊₁qₙ + qₙ₋₁) - pₙ/qₙ| →
      = |pₙ₋₁qₙ - pₙqₙ₋₁|/(qₙ(xₙ₊₁qₙ + qₙ₋₁)) →
      = 1/(qₙ(xₙ₊₁qₙ + qₙ₋₁))
    )
  } →

  lemma BoundXn() {
    assert(
      xₙ₊₁ = [aₙ₊₁, aₙ₊₂, ...] →
      aₙ₊₁ < xₙ₊₁ < aₙ₊₁ + 1
    )
  } →

  apply(DifferenceExpression(), BoundXn()) →
  assert(|x - pₙ/qₙ| < 1/(qₙqₙ₊₁)) →
  assert(|x - pₙ/qₙ| > 1/(qₙ(qₙ₊₁ + qₙ)) > 1/(2qₙqₙ₊₁)) →
  
  lemma DenominatorBound() {
    assert(
      qₖ₊₂ = aₖ₊₂qₖ₊₁ + qₖ > 2qₖ →
      1/(qₖ₊₁qₖ₊₂) ≤ 1/(2qₖqₖ₊₁)
    )
  } →
  
  apply(DenominatorBound()) →
  assert(∀k ≥ 1: |x - pₖ₊₁/qₖ₊₁| < 1/(qₖ₊₁qₖ₊₂) ≤ 1/(2qₖqₖ₊₁) < |x - pₖ/qₖ|)
}
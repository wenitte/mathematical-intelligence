theorem ProductLimitRule() {
  assert(
    ∀{xₙ}, {yₙ} ∈ ℝ^ℕ,
    (limₙ→∞ xₙ = l ∧ limₙ→∞ yₙ = m) →
    limₙ→∞(xₙyₙ) = lm
  )
} ↔

proof ProductLimitRule() {
  setVar({xₙ}, {yₙ}: ℝ^ℕ) →
  
  lemma BoundedSequence() {
    assert(
      convergent({xₙ}) → ∃K ∈ ℝ⁺: ∀n ∈ ℕ, |xₙ| ≤ K
    )
  } →
  
  apply(BoundedSequence()) →
  setVar(K: ℝ⁺) →
  
  assert(|xₙyₙ - lm| = |xₙyₙ - xₙm + xₙm - lm|) →
  apply(TriangleInequality()) →
  assert(|xₙyₙ - lm| ≤ |xₙyₙ - xₙm| + |xₙm - lm|) →
  
  apply(AbsoluteValueMultiplicative()) →
  assert(|xₙyₙ - lm| ≤ |xₙ||yₙ - m| + |m||xₙ - l|) →
  
  apply(BoundedSequence()) →
  assert(|xₙyₙ - lm| ≤ K|yₙ - m| + |m||xₙ - l|) →
  
  setVar(zₙ := K|yₙ - m| + |m||xₙ - l|) →
  
  lemma ConvergenceToZero() {
    assert(
      (limₙ→∞ xₙ = l ∧ limₙ→∞ yₙ = m) →
      (limₙ→∞ |xₙ - l| = 0 ∧ limₙ→∞ |yₙ - m| = 0)
    )
  } →
  
  apply(ConvergenceToZero()) →
  apply(SumRule()) →
  assert(limₙ→∞ zₙ = 0) →
  
  apply(SqueezeTheorem()) →
  assert(limₙ→∞(xₙyₙ) = lm)
}
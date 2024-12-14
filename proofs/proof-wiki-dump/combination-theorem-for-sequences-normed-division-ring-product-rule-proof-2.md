theorem SequenceProductConvergence() {
  assert(
    ∀R: NormedDivisionRing ∧
    ∀{xₙ}, {yₙ}: Sequence(R) ∧
    (lim[n→∞] xₙ = l) ∧ 
    (lim[n→∞] yₙ = m) ⇒
    (lim[n→∞] (xₙyₙ) = lm)
  )
} ↔

proof SequenceProductConvergence() {
  lemma BoundedSequence() {
    assert(∃K ∈ ℝ⁺: ∀n ∈ ℕ → ‖xₙ‖ ≤ K)
  } →
  
  setVar(n: ℕ) →
  assert(‖xₙyₙ - lm‖) →
  assert(‖xₙyₙ - xₙm + xₙm - lm‖) →
  
  lemma TriangleInequality() {
    assert(‖xₙyₙ - xₙm‖ + ‖xₙm - lm‖)
  } →
  
  lemma MultiplicativityNorm() {
    assert(‖xₙ‖‖yₙ - m‖ + ‖xₙ - l‖‖m‖)
  } →
  
  apply(BoundedSequence()) →
  assert(K‖yₙ - m‖ + ‖m‖‖xₙ - l‖ =: zₙ) →
  
  lemma ConvergenceProperties() {
    assert(
      (lim[n→∞] ‖xₙ - l‖ = 0) ∧
      (lim[n→∞] ‖yₙ - m‖ = 0)
    )
  } →
  
  lemma CombinedSumRule() {
    assert(lim[n→∞] zₙ = 0)
  } →
  
  lemma SqueezeTheorem() {
    assert(
      lim[n→∞] ‖xₙyₙ - lm‖ = 0
    )
  } →
  
  assert(lim[n→∞] (xₙyₙ) = lm)
}
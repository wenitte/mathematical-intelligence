theorem ContinuousDifference_MetricSpace() {
  let M = struct(A, d: MetricSpace)
  let f: M → ℝ
  let g: M → ℝ
  assert(
    (isContinuous(f, M) ∧ isContinuous(g, M)) →
    isContinuous((f - g), M)
  )
} ↔

proof ContinuousDifference_MetricSpace() {
  let x: M →
  assert((f - g)(x) = (f + (-g))(x)) →

  lemma NegativeContinuous() {
    assert(isContinuous(g, M) → isContinuous(-g, M))
  } →
  apply(NegativeContinuous()) →

  lemma SumContinuous() {
    assert(
      (isContinuous(f, M) ∧ isContinuous(-g, M)) →
      isContinuous((f + (-g)), M)
    )
  } →
  apply(SumContinuous()) →

  assert((f - g) = (f + (-g))) →
  conclude(isContinuous((f - g), M))
}
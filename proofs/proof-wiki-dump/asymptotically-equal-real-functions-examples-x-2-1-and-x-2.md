theorem Asymptotic_Equal_Functions() {
  assert(
    ∀x ∈ ℝ (f(x) = x² + 1 ∧ g(x) = x²) →
    f ∼ g as x → +∞
  )
} ↔

proof Asymptotic_Equal_Functions() {
  setVar(x: ℝ) →
  assert(
    f(x)/g(x) = (x² + 1)/x²
  ) →
  assert(
    f(x)/g(x) = 1 + 1/x²
  ) →
  lemma Limit_Evaluation() {
    assert(
      lim[x→+∞] (1 + 1/x²) = 1
    )
  } →
  apply(Limit_Evaluation()) →
  assert(
    lim[x→+∞] f(x)/g(x) = 1
  ) →
  assert(
    f ∼ g as x → +∞
  )
}
theorem AsymptoticallyEqualFunctions() {
  let f: ℝ → ℝ
  let g: ℝ → ℝ
  assert(
    (∀x ∈ ℝ: f(x) = x + 1) ∧
    (∀x ∈ ℝ: g(x) = x) →
    f ∼ g as x → +∞
  )
}

proof AsymptoticallyEqualFunctions() {
  setVar(x: ℝ) →
  assert(f(x)/g(x) = (x + 1)/x) →
  assert(f(x)/g(x) = 1 + 1/x) →
  lemma LimitDefinition() {
    assert(
      f ∼ g as x → +∞ ↔
      lim[x → +∞] (f(x)/g(x)) = 1
    )
  } →
  assert(lim[x → +∞] (1 + 1/x) = 1) →
  apply(LimitDefinition()) →
  assert(f ∼ g as x → +∞)
}
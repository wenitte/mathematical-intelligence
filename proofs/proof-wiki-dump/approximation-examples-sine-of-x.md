theorem Sine_Small_Angle_Approximation() {
  assert(
    ∃ε > 0: ∀x ∈ ℝ: |x| < ε ⇒ |sin(x) - x| < ε
  )
} ↔

proof Sine_Small_Angle_Approximation() {
  lemma Sine_Over_X_Limit() {
    assert(
      lim[x→0](sin(x)/x) = 1
    )
  } →
  setVar(ε: ℝ+) →
  apply(Limit_Definition()) {
    assert(
      ∃δ > 0: ∀x ∈ ℝ: 0 < |x| < δ ⇒ |(sin(x)/x) - 1| < ε
    )
  } →
  assert(
    |(sin(x)/x) - 1| < ε ↔ |sin(x) - x| < ε|x|
  ) →
  setVar(δ_min = min(δ, ε)) →
  assert(
    ∀x ∈ ℝ: |x| < δ_min ⇒ |sin(x) - x| < ε
  )
}
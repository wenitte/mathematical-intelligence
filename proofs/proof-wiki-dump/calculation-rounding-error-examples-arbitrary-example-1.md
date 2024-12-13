theorem Rounding_Error_Example() {
  assert(
    ∃x ∈ ℝ: x = 1/(1 - cos(1°)) ∧
    rounded₄(x) = 5000 ∧
    true_value(x) ≈ 6565.8 ∧
    relative_error₁(x) ≈ 24% ∧
    relative_error₂(x) ≈ 31%
  )
} ↔

proof Rounding_Error_Example() {
  setVar(cos_1deg: ℝ = 0.999847695) →
  
  lemma Rounded_Calculation() {
    assert(
      rounded₄(cos_1deg) = 0.9998 →
      x₄ = 1/(1 - 0.9998) →
      x₄ = 1/0.0002 →
      x₄ = 5000
    )
  } →

  lemma Precise_Calculation() {
    assert(
      x₉ = 1/(1 - 0.999847695) →
      x₉ = 1/0.000152305 →
      x₉ = 6565.772...
    )
  } →

  lemma Error_Calculations() {
    assert(
      relative_error₁ = |6565.8 - 5000|/6565.8 × 100% →
      relative_error₁ = 23.85% ∧
      relative_error₂ = |6565.8 - 5000|/5000 × 100% →
      relative_error₂ = 31.32%
    )
  } →

  apply(Rounded_Calculation()) ∧
  apply(Precise_Calculation()) ∧
  apply(Error_Calculations()) →
  conclude()
}
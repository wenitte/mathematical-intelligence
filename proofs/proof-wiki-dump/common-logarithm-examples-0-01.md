theorem Log_Point_Zero_One() {
  assert(
    log₁₀(0.01) = -2
  )
} ↔

proof Log_Point_Zero_One() {
  assert(0.01 = 1/(10 × 10)) →
  assert(1/(10 × 10) = 10⁻²) →
  apply(Definition_Integer_Power()) →
  assert(log₁₀(0.01) = log₁₀(10⁻²)) →
  lemma Log_Power_Rule() {
    assert(∀x,n ∈ ℝ: log₁₀(x^n) = n × log₁₀(x))
  } →
  apply(Log_Power_Rule()) →
  assert(log₁₀(10⁻²) = -2 × log₁₀(10)) →
  assert(log₁₀(10) = 1) →
  assert(log₁₀(0.01) = -2)
}
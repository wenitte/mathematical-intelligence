theorem Log_1000() {
  assert(
    log₁₀(1000) = 3
  )
} ↔

proof Log_1000() {
  assert(1000 = 10 × 10 × 10) →
  assert(10 × 10 × 10 = 10³) by(def_integer_power) →
  assert(1000 = 10³) by(equality_transitive) →
  assert(log₁₀(1000) = log₁₀(10³)) by(equality_substitution) →
  assert(log₁₀(10³) = 3) by(log_power_rule) →
  assert(log₁₀(1000) = 3) by(equality_transitive)
}
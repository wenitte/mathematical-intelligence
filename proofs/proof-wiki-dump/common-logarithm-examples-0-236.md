theorem Log_Example() {
  assert(
    log₁₀(0.236) = -0.6271
  )
} ↔

proof Log_Example() {
  setVar(x: 0.236) →
  assert(0.236 = 2.36 × 10⁻¹) →  // Scientific notation
  
  assert(log₁₀(0.236) = log₁₀(2.36 × 10⁻¹)) →  // Apply log to both sides
  
  lemma Log_Product() {
    assert(log₁₀(a × b) = log₁₀(a) + log₁₀(b))
  } →
  
  apply(Log_Product()) →
  assert(log₁₀(2.36 × 10⁻¹) = log₁₀(2.36) + log₁₀(10⁻¹)) →
  
  assert(log₁₀(2.36) = 0.3729) ∧  // Given value
  assert(log₁₀(10⁻¹) = -1) →      // Definition of log
  
  assert(log₁₀(2.36) + log₁₀(10⁻¹) = 0.3729 + (-1)) →
  assert(0.3729 + (-1) = -0.6271) →
  
  notation(NegativeLog) {
    assert(-0.6271 = 1̄.3729)
  }
}
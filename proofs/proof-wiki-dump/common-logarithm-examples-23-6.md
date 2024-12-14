theorem Log_23_6() {
  assert(
    log₁₀(23.6) = 1.3729
  )
} ↔

proof Log_23_6() {
  assert(23.6 = 2.36 × 10¹) →  // Scientific notation
  
  setStep(
    log₁₀(23.6) = log₁₀(2.36 × 10¹)
  ) →
  
  lemma LogProduct() {
    assert(
      ∀a,b ∈ ℝ⁺ → log₁₀(a × b) = log₁₀(a) + log₁₀(b)
    )
  } →
  
  apply(LogProduct()) →
  assert(
    log₁₀(2.36 × 10¹) = log₁₀(2.36) + log₁₀(10¹)
  ) →
  
  assert(log₁₀(2.36) = 0.3729) →  // Given value
  assert(log₁₀(10¹) = 1) →        // Definition of logarithm
  
  assert(
    0.3729 + 1 = 1.3729
  )
}
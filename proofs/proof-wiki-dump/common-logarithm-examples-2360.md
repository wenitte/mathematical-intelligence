theorem CommonLog_2360() {
  assert(
    log₁₀(2360) = 3.3729
  )
} ↔

proof CommonLog_2360() {
  assert(2360 = 2.36 × 10³) →  // Scientific notation
  
  lemma LogarithmEquality() {
    assert(
      log₁₀(2360) = log₁₀(2.36 × 10³)
    )
  } →
  
  lemma LogProduct() {
    assert(
      log₁₀(2.36 × 10³) = log₁₀(2.36) + log₁₀(10³)
    )
  } →
  
  lemma EvaluateTerms() {
    assert(
      log₁₀(2.36) = 0.3729 ∧
      log₁₀(10³) = 3
    )
  } →
  
  apply(LogarithmEquality()) →
  apply(LogProduct()) →
  apply(EvaluateTerms()) →
  
  assert(
    log₁₀(2360) = 0.3729 + 3 = 3.3729
  )
}
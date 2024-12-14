theorem Log236() {
  assert(
    log₁₀(236) = 2.3729
  )
}

proof Log236() {
  assert(236 = 2.36 × 10²) →  // Scientific notation
  
  setStep(
    log₁₀(236) = 
    log₁₀(2.36 × 10²)
  ) →
  
  lemma LogProduct() {
    assert(
      log₁₀(a × b) = log₁₀(a) + log₁₀(b)
    )
  } →
  
  apply(LogProduct()) →
  assert(
    log₁₀(2.36) + log₁₀(10²)
  ) →
  
  setStep(
    0.3729 + 2  // log₁₀(2.36) = 0.3729, log₁₀(10²) = 2
  ) →
  
  assert(
    2.3729
  )
}
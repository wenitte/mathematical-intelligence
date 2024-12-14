theorem Common_Log_Example() {
  assert(
    log₁₀(0.0236) = -2.3729 = -1.6271
  )
} ↔

proof Common_Log_Example() {
  setVar(x: 0.0236) →
  assert(0.0236 = 2.36 × 10⁻²) →  // Scientific notation
  
  lemma Log_Transform() {
    assert(log₁₀(0.0236) = log₁₀(2.36 × 10⁻²))
  } →
  
  lemma Log_Product_Rule() {
    assert(log₁₀(a × b) = log₁₀(a) + log₁₀(b))
  } →
  
  apply(Log_Product_Rule()) →
  assert(log₁₀(2.36 × 10⁻²) = log₁₀(2.36) + log₁₀(10⁻²)) →
  
  lemma Common_Log_Power() {
    assert(log₁₀(10ⁿ) = n)
  } →
  
  apply(Common_Log_Power()) →
  assert(log₁₀(2.36) + log₁₀(10⁻²) = 0.3729 + (-2)) →
  
  lemma Negative_Log_Notation() {
    assert(0.3729 + (-2) = -2.3729)
  } →
  
  apply(Negative_Log_Notation()) →
  assert(-2.3729 = -1.6271)
}
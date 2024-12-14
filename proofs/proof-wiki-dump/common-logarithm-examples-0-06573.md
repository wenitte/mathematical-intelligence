theorem CommonLog_0_06573() {
  assert(
    log₁₀(0.06573) = -1.182
  )
} ↔

proof CommonLog_0_06573() {
  // Express in scientific notation
  assert(0.06573 = 6.573 × 10⁻²) →
  
  // Apply logarithm to both sides
  assert(log₁₀(0.06573) = log₁₀(6.573 × 10⁻²)) →
  
  // Use logarithm of product rule
  assert(log₁₀(6.573 × 10⁻²) = log₁₀(6.573) + log₁₀(10⁻²)) →
  
  // Calculate components
  lemma Component1() {
    assert(log₁₀(6.573) = 0.8178)
  } →
  lemma Component2() {
    assert(log₁₀(10⁻²) = -2)
  } →
  
  // Apply both components
  apply(Component1() ∧ Component2()) →
  assert(log₁₀(6.573) + log₁₀(10⁻²) = 0.8178 + (-2)) →
  
  // Express in bar notation
  assert(0.8178 + (-2) = 2̄.8178) →
  
  // Convert to decimal
  assert(2̄.8178 = -1.182)
}
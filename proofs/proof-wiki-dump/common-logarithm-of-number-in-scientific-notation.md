theorem Log_Scientific_Notation() {
  assert(
    ∀n ∈ ℝ⁺, ∀a ∈ ℝ, ∀d ∈ ℤ ⇒ 
    (n = a × 10^d ∧ 1 ≤ a < 10) ⇒ 
    (log₁₀(n) = log₁₀(a) + d ∧ 0 ≤ log₁₀(a) < 1)
  )
} ↔

proof Log_Scientific_Notation() {
  setVar(n: ℝ⁺, a: ℝ, d: ℤ) →
  assume(n = a × 10^d ∧ 1 ≤ a < 10) →
  
  assert(log₁₀(n) = log₁₀(a × 10^d)) →
  apply(LogarithmProduct()) {
    assert(log₁₀(a × 10^d) = log₁₀(a) + log₁₀(10^d))
  } →
  
  apply(CommonLogarithm()) {
    assert(log₁₀(10^d) = d)
  } →
  
  assert(log₁₀(n) = log₁₀(a) + d) →
  
  lemma Log_Range() {
    assert(1 ≤ a < 10 ⇒ 0 ≤ log₁₀(a) < 1)
  } →
  
  apply(Log_Range()) →
  assert(0 ≤ log₁₀(a) < 1) →
  conclude(log₁₀(n) = log₁₀(a) + d ∧ 0 ≤ log₁₀(a) < 1)
}
theorem CharacteristicCommonLog() {
  assert(
    ∀x ∈ ℝ_{>0} ∧ x < 1 →
    char(log₁₀(x)) = numZeroDigits(x) - 1
  )
} ↔

proof CharacteristicCommonLog() {
  setVar(x: ℝ_{>0}, x < 1) →
  assert(∃a ∈ ℝ, e ∈ ℤ_{>0}: x = a × 10^{-e} ∧ 1 ≤ a < 10) →
  
  lemma LogRange() {
    assert(1 ≤ a < 10 → 0 ≤ log₁₀(a) < 1)
  } →
  
  assert(char(log₁₀(x)) = log₁₀(10^{-e}) = -e) →
  
  lemma BaseCase() {
    assert(e = 1 →
      0.1 ≤ x < 1 ∧
      x = 0.rstu... (r > 0) ∧
      numZeroDigits(x) = 1)
  } →
  
  lemma DecimalShift() {
    assert(∀n ∈ ℤ: 
      x × 10^{-n} ↔ shiftDecimal(x, n))
  } →
  
  apply(DecimalShift()) →
  assert(x = a × 10^{-e} →
    numZeroDigits(x) = e) →
  
  assert(char(log₁₀(x)) = -e ∧
    numZeroDigits(x) = e →
    char(log₁₀(x)) = numZeroDigits(x) - 1)
}
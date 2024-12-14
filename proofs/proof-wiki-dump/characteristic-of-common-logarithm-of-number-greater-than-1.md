theorem CharacteristicCommonLog() {
  assert(
    ∀x ∈ ℝ_{>1} ⇒ 
    CharacteristicOf(log₁₀(x)) = DigitsLeftOfDecimal(x) - 1
  )
} ↔

proof CharacteristicCommonLog() {
  setVar(x: ℝ_{>1}) →
  setVar(a: ℝ) →
  setVar(e: ℤ_{≥0}) →
  
  assert(x = a × 10^e ∧ 1 ≤ a < 10) →
  
  lemma LogBetweenOneAndTen() {
    assert(1 ≤ a < 10 ⇒ 0 ≤ log₁₀(a) < 1)
  } →
  
  assert(CharacteristicOf(log₁₀(x)) = log₁₀(10^e)) →
  assert(log₁₀(10^e) = e) →
  
  lemma DecimalPointShift() {
    assert(
      ∀n ∈ ℤ_{≥0}: Multiply(x, 10^n) ↔ 
      ShiftDecimalRight(x, n)
    )
  } →
  
  apply(DecimalPointShift()) →
  assert(DigitsLeftOfDecimal(a × 10^e) = DigitsLeftOfDecimal(a) + e) →
  assert(DigitsLeftOfDecimal(a) = 1) →
  assert(DigitsLeftOfDecimal(x) = e + 1) →
  assert(CharacteristicOf(log₁₀(x)) = e = DigitsLeftOfDecimal(x) - 1)
}
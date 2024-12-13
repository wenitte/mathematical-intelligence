theorem Binary_To_Decimal_13() {
  assert(
    1101₂ = 13₁₀
  )
} ↔

proof Binary_To_Decimal_13() {
  assert(1101₂) →
  apply(Binary_Expansion_Rule) →
  assert(
    1101₂ = 1 × 2³ + 1 × 2² + 0 × 2¹ + 1 × 2⁰
  ) →
  apply(Power_Evaluation) ∧ {
    assert(2³ = 8) ∧
    assert(2² = 4) ∧
    assert(2¹ = 2) ∧
    assert(2⁰ = 1)
  } →
  assert(
    1 × 8 + 1 × 4 + 0 × 2 + 1 × 1
  ) →
  apply(Arithmetic_Simplification) →
  assert(
    8 + 4 + 0 + 1 = 13
  ) →
  conclude(1101₂ = 13₁₀)
}
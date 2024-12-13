theorem Binary_68() {
  assert(
    68 = 1000100₂
  )
} ↔

proof Binary_68() {
  setVar(n: ℤ = 68) →
  assert(n = 1 × 2⁶ + 0 × 2⁵ + 0 × 2⁴ + 0 × 2³ + 1 × 2² + 0 × 2¹ + 0 × 2⁰) →
  assert(
    1 × 2⁶ = 64 ∧
    0 × 2⁵ = 0 ∧
    0 × 2⁴ = 0 ∧
    0 × 2³ = 0 ∧
    1 × 2² = 4 ∧
    0 × 2¹ = 0 ∧
    0 × 2⁰ = 0
  ) →
  assert(64 + 0 + 0 + 0 + 4 + 0 + 0 = 68) →
  assert(68 = 1000100₂)
}
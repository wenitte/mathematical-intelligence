theorem Binary_127() {
  assert(
    127 = 1111111₂
  )
} ↔

proof Binary_127() {
  let base2Sum = (1 × 2⁶ + 1 × 2⁵ + 1 × 2⁴ + 1 × 2³ + 1 × 2² + 1 × 2¹ + 1 × 2⁰) →
  
  lemma PowersOf2() {
    assert(
      2⁶ = 64 ∧
      2⁵ = 32 ∧
      2⁴ = 16 ∧
      2³ = 8 ∧
      2² = 4 ∧
      2¹ = 2 ∧
      2⁰ = 1
    )
  } →
  
  apply(PowersOf2()) →
  assert(base2Sum = 64 + 32 + 16 + 8 + 4 + 2 + 1) →
  assert(64 + 32 + 16 + 8 + 4 + 2 + 1 = 127) →
  assert(127 = 1111111₂)
}
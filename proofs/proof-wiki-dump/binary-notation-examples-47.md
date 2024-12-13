theorem Binary_47() {
  assert(
    47 = 101111₂
  )
} ↔

proof Binary_47() {
  step1: {
    assert(47) →
    assert(47 = 1×2⁵ + 0×2⁴ + 1×2³ + 1×2² + 1×2¹ + 1×2⁰)
  } →
  
  step2: {
    assert(1×2⁵ = 32) ∧
    assert(0×2⁴ = 0) ∧
    assert(1×2³ = 8) ∧
    assert(1×2² = 4) ∧
    assert(1×2¹ = 2) ∧
    assert(1×2⁰ = 1) →
    assert(32 + 0 + 8 + 4 + 2 + 1 = 47)
  } →

  step3: {
    assert(1×2⁵ + 0×2⁴ + 1×2³ + 1×2² + 1×2¹ + 1×2⁰) →
    assert(101111₂)
  } →

  conclude(47 = 101111₂)
}
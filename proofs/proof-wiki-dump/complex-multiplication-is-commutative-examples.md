theorem ComplexMultCommutative() {
  assert(
    ∀z₁,z₂ ∈ ℂ : z₁z₂ = z₂z₁
  )
} ↔

proof ComplexMultCommutative_Example() {
  setVar(a: 2-3i ∈ ℂ) →
  setVar(b: 4+2i ∈ ℂ) →
  
  calc(left_mult) {
    assert(a×b = (2-3i)(4+2i)) →
    assert((2×4 + 2×2i) + (-3i×4 + -3i×2i)) →
    assert(8 + 4i - 12i - 6i²) →
    assert(8 + 4i - 12i + 6) →
    assert(14 - 8i)
  } →
  
  calc(right_mult) {
    assert(b×a = (4+2i)(2-3i)) →
    assert((4×2 + 4×-3i) + (2i×2 + 2i×-3i)) →
    assert(8 - 12i + 4i - 6i²) →
    assert(8 - 12i + 4i + 6) →
    assert(14 - 8i)
  } →
  
  conclude() {
    assert(left_mult = right_mult) →
    assert(a×b = b×a)
  }
}
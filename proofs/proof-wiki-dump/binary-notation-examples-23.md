theorem Binary_Representation_23() {
  assert(
    23 ∈ ℕ ⇒ (23)_{10} = (10111)_2
  )
} ↔

proof Binary_Representation_23() {
  step1() {
    assert(23 = 1 × 2^4 + 0 × 2^3 + 1 × 2^2 + 1 × 2^1 + 1 × 2^0)
  } →
  
  step2() {
    assert(
      1 × 2^4 = 16 ∧
      0 × 2^3 = 0 ∧
      1 × 2^2 = 4 ∧
      1 × 2^1 = 2 ∧
      1 × 2^0 = 1
    )
  } →
  
  step3() {
    assert(16 + 0 + 4 + 2 + 1 = 23)
  } →
  
  step4() {
    assert(
      [1,0,1,1,1] = digits(23, base=2) ∧
      23 = (10111)_2
    )
  }
}
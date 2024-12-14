theorem Complex_Arithmetic_Example() {
  assert(
    3(1 + i) + 2(4 - 3i) - (2 + 5i) = 9 - 8i
  )
} ↔

proof Complex_Arithmetic_Example() {
  assert(3(1 + i) + 2(4 - 3i) - (2 + 5i)) →
  
  step1() {
    assert(3(1 + i) = 3 + 3i) ∧
    assert(2(4 - 3i) = 8 - 6i)
  } →
  
  assert((3 + 3i) + (8 - 6i) - (2 + 5i)) →
  
  step2() {
    assert(
      collect_real_terms(3 + 8 - 2) ∧
      collect_imag_terms(3i - 6i - 5i)
    )
  } →
  
  assert((9) + (-8i)) →
  assert(9 - 8i)
}
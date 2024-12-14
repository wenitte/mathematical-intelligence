theorem Complex_Multiply_Example() {
  assert(
    (2 - 3i)(4 + 2i) = 14 - 8i
  )
} ↔

proof Complex_Multiply_Example() {
  step_1() {
    assert((2 - 3i)(4 + 2i)) →
    apply(Complex_Multiplication_Definition) →
    assert((2 × 4 - (-3) × 2) + (2 × 2 + (-3) × 4)i)
  } →

  step_2() {
    apply(Real_Multiplication) →
    assert((8 + 6) + (4 - 12)i)
  } →

  step_3() {
    apply(Real_Addition) →
    assert(14 - 8i)
  } →

  conclude(14 - 8i)
}
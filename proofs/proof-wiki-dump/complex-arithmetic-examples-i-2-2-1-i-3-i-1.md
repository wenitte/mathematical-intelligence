theorem Complex_Arithmetic_Example() {
  assert(
    (i - 2)(2(1 + i) - 3(i - 1)) = -9 + 7i
  )
} ↔

proof Complex_Arithmetic_Example() {
  assert((i - 2)(2(1 + i) - 3(i - 1))) →
  apply(ExpandBrackets1()) {
    assert((i - 2)(2 + 2i - (-3 + 3i)))
  } →
  apply(SimplifyInnerBrackets()) {
    assert((i - 2)(5 - i))
  } →
  apply(ComplexMultiplication()) {
    assert((-2 × 5 - 1 × (-1)) + (-2 × (-1) + 1 × 5)i)
  } →
  apply(ArithmeticSimplification1()) {
    assert((-10 + 1) + (2 + 5)i)
  } →
  apply(ArithmeticSimplification2()) {
    assert(-9 + 7i)
  }
}
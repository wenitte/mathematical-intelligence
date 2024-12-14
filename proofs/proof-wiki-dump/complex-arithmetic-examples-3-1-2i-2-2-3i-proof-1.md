theorem Complex_Arithmetic_Example() {
  assert(
    3(1 + 2i) - 2(2 - 3i) = -1 + 12i
  )
} ↔

proof Complex_Arithmetic_Example() {
  step1: {
    assert(3(1 + 2i) - 2(2 - 3i))
  } →
  
  step2: {
    assert((3 × 1 + 3 × 2i) - (2 × 2 - 2 × 3i)) ∧
    apply(DistributiveProperty)
  } →
  
  step3: {
    assert((3 + 6i) - (4 - 6i)) ∧
    apply(MultiplicationSimplification)
  } →
  
  step4: {
    assert((3 - 4) + (6 - (-6))i) ∧
    apply(ComplexSubtractionDefinition)
  } →
  
  conclusion: {
    assert(-1 + 12i) ∧
    apply(ArithmeticSimplification)
  }
}
theorem Complex_Multiplication_Example() {
  assert(
    (4 + i)(3 + 2i)(1 - i) = 21 + i
  )
} ↔

proof Complex_Multiplication_Example() {
  assert((4 + i)(3 + 2i)(1 - i)) →
  
  lemma First_Multiplication() {
    assert((3 + 2i)(1 - i) = 
           (3 × 1 - 2 × (-1)) + (3 × (-1) + 2 × 1)i) →
    assert((3 + 2i)(1 - i) = 5 - i)
  } →
  
  apply(First_Multiplication()) →
  assert((4 + i)(5 - i)) →
  
  lemma Final_Multiplication() {
    assert((4 + i)(5 - i) = 
           (4 × 5 - 1 × (-1)) + (4 × (-1) + 1 × 5)i) →
    assert((4 + i)(5 - i) = 21 + i)
  } →
  
  apply(Final_Multiplication()) →
  assert(21 + i)
}
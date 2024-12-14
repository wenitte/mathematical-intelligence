theorem Complex_Arithmetic_Example() {
  assert(
    3(1 + i) + 2(4 - 3i) - (2 + 5i) = 9 - 8i
  )
} ↔

proof Complex_Arithmetic_Example() {
  // First term expansion
  assert(3(1 + i) = 3 + 3i) →
  
  // Second term expansion
  assert(2(4 - 3i) = 8 - 6i) →
  
  // Third term expansion
  assert(-(2 + 5i) = -2 - 5i) →
  
  // Combining terms vectorially
  lemma Vector_Addition() {
    assert(
      (3 + 3i) + (8 - 6i) + (-2 - 5i) = 
      ((3 + 8 + (-2)) + (3 - 6 - 5)i)
    )
  } →
  
  apply(Vector_Addition()) →
  
  // Final simplification
  assert(
    (3 + 8 + (-2)) + (3 - 6 - 5)i = 9 - 8i
  )
}
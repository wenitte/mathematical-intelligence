theorem Complex_Arithmetic_Example() {
  assert(
    3(1 + i) + 2(4 - 3i) - (2 + 5i) = 9 - 8i
  )
} ↔

proof Complex_Arithmetic_Example() {
  // Algebraic proof
  setExpr(expr1: 3(1 + i) + 2(4 - 3i) - (2 + 5i)) →
  
  // Distribute first term
  assert(3(1 + i) = 3 + 3i) →
  
  // Distribute second term
  assert(2(4 - 3i) = 8 - 6i) →
  
  // Rewrite negative of third term
  assert(-(2 + 5i) = -2 - 5i) →
  
  // Combine all terms
  assert(expr1 = (3 + 3i) + (8 - 6i) + (-2 - 5i)) →
  
  // Group real and imaginary parts
  assert(expr1 = (3 + 8 - 2) + (3 - 6 - 5)i) →
  
  // Simplify
  assert(expr1 = 9 - 8i) →
  
  // Alternative geometric proof
  lemma Geometric_Verification() {
    assert(
      sum_of_complex_vectors([3 + 3i, 8 - 6i, -2 - 5i]) = 9 - 8i
    )
  }
}
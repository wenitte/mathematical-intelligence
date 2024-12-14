theorem Complex_Addition_Associative_Example() {
  assert(
    (5 + 3i) + ((−1 + 2i) + (7 - 5i)) = ((5 + 3i) + (−1 + 2i)) + (7 - 5i)
  )
} ↔

proof Complex_Addition_Associative_Example() {
  letExpr(A = 5 + 3i) →
  letExpr(B = −1 + 2i) →
  letExpr(C = 7 - 5i) →
  
  assert(B + C = (−1 + 2i) + (7 - 5i)) →
  compute(B + C = 6 - 3i) →
  
  assert(A + (B + C) = (5 + 3i) + (6 - 3i)) →
  compute(A + (B + C) = 11 + 0i) →
  
  assert((A + B) = (5 + 3i) + (−1 + 2i)) →
  compute(A + B = 4 + 5i) →
  
  assert((A + B) + C = (4 + 5i) + (7 - 5i)) →
  compute((A + B) + C = 11 + 0i) →
  
  conclude(
    A + (B + C) = (A + B) + C = 11 + 0i = 11
  )
}
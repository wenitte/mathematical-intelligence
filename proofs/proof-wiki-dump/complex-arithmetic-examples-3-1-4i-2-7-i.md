theorem Complex_Arithmetic_Example() {
  assert(
    3(-1 + 4i) - 2(7 - i) = -17 + 14i
  )
} ↔

proof Complex_Arithmetic_Example() {
  setExpr(exp: 3(-1 + 4i) - 2(7 - i)) →
  
  apply(DistributiveProperty) →
  assert(exp = (3 × -1 + 3 × 4i) - (2 × 7 - 2 × i)) →
  
  apply(Multiplication) →
  assert(exp = (-3 + 12i) - (14 - 2i)) →
  
  lemma ComplexSubtraction() {
    assert(
      (a + bi) - (c + di) = (a - c) + (b - d)i
    )
  } →
  
  apply(ComplexSubtraction) →
  assert(exp = (-3 - 14) + (12 - (-2))i) →
  
  apply(Arithmetic) →
  assert(exp = -17 + 14i)
}
theorem Complex_Multiplication_Example() {
  assert(
    (-1 + 2i)((7 - 5i) + (-3 + 4i)) = -2 + 9i
  )
} ↔

proof Complex_Multiplication_Example() {
  assert((-1 + 2i)((7 - 5i) + (-3 + 4i))) →
  
  lemma Complex_Addition() {
    assert((7 - 5i) + (-3 + 4i) = (7 + (-3)) + (-5 + 4)i)
  } →
  
  apply(Complex_Addition()) →
  assert((-1 + 2i)(4 - i)) →
  
  lemma Complex_Multiplication() {
    assert(
      (a + bi)(c + di) = (ac - bd) + (ad + bc)i
    )
  } →
  
  apply(Complex_Multiplication()) →
  let(a = -1, b = 2, c = 4, d = -1) →
  assert(((-1 × 4) - (2 × (-1))) + ((-1 × (-1)) + (2 × 4))i) →
  
  lemma Arithmetic_Simplification() {
    assert((-4 + 2) + (1 + 8)i = -2 + 9i)
  } →
  
  apply(Arithmetic_Simplification()) →
  assert(-2 + 9i)
}
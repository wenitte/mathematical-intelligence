theorem Complex_Multiplication_Example() {
  assert(
    (2 - i)((−3 + 2i)(5 - 4i)) = 8 + 51i
  )
} ↔

proof Complex_Multiplication_Example() {
  setExpr(expr1: (2 - i)((−3 + 2i)(5 - 4i))) →
  
  lemma Inner_Product() {
    assert(
      (−3 + 2i)(5 - 4i) = 
      ((−3 × 5 - 2 × (−4)) + (2 × 5 + (−3) × (−4))i)
    )
  } →
  
  apply(Inner_Product()) →
  assert(expr1 = (2 - i)((−15 + 8) + (10 + 12)i)) →
  
  simplify() →
  assert(expr1 = (2 - i)(−7 + 22i)) →
  
  lemma Outer_Product() {
    assert(
      (2 - i)(−7 + 22i) = 
      (2 × (−7) - (−1) × 22) + ((−1) × (−7) + 2 × 22)i
    )
  } →
  
  apply(Outer_Product()) →
  assert(expr1 = (−14 + 22) + (7 + 44)i) →
  
  simplify() →
  assert(expr1 = 8 + 51i)
}
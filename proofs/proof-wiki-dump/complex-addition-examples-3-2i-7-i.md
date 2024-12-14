theorem Complex_Addition_Example() {
  assert(
    (3 + 2i) + (-7 - i) = -4 + i
  )
}

proof Complex_Addition_Example() {
  setExpr(z1 = 3 + 2i) →
  setExpr(z2 = -7 - i) →
  
  assert(z1 + z2) →
  apply(Complex_Addition_Definition) →
  assert(
    (3 + 2i) + (-7 - i) = 
    (3 + (-7)) + (2 + (-1))i
  ) →
  
  apply(Real_Addition) →
  assert(
    (3 + (-7)) + (2 + (-1))i =
    -4 + i
  ) →
  
  conclude(-4 + i)
}
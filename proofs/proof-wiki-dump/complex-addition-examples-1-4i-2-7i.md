theorem Complex_Addition_Example() {
  assert(
    ((-1 + 4i) + (2 - 7i)) = (1 - 3i)
  )
} ↔

proof Complex_Addition_Example() {
  letExpr(z₁ = -1 + 4i) →
  letExpr(z₂ = 2 - 7i) →
  
  assert(
    (z₁ + z₂) = ((Re(z₁) + Re(z₂)) + (Im(z₁) + Im(z₂))i)
  ) →
  
  calc {
    (-1 + 4i) + (2 - 7i)
    = (-1 + 2) + (4 - 7)i   : by(Complex_Addition_Definition)
    = 1 + (-3)i             : by(Real_Arithmetic)
  } →
  
  conclude(
    (-1 + 4i) + (2 - 7i) = 1 - 3i
  )
}
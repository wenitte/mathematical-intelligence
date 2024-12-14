theorem Complex_Addition() {
  assert(
    (2 + 3i) + (4 - 5i) = 6 - 2i
  )
} ↔

proof Complex_Addition() {
  letExpr(z₁ = 2 + 3i) ∧
  letExpr(z₂ = 4 - 5i) →
  
  assert(
    (2 + 3i) + (4 - 5i) = (2 + 4) + (3 - 5)i
  ) by(def_complex_addition) →
  
  assert(
    (2 + 4) + (3 - 5)i = 6 + (-2)i
  ) by(arithmetic) →
  
  assert(
    6 + (-2)i = 6 - 2i
  ) by(notation) →
  
  conclude(
    (2 + 3i) + (4 - 5i) = 6 - 2i
  )
}
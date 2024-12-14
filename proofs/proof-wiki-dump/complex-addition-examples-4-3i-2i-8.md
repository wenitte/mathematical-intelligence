theorem Complex_Addition_Example() {
  assert(
    (4 - 3i) + (2i - 8) = -4 - i
  )
} ↔

proof Complex_Addition_Example() {
  setExpr(z₁: 4 - 3i) ∧
  setExpr(z₂: 2i - 8) →
  assert((4 - 3i) + (2i - 8)) →
  apply(Complex_Addition_Definition()) {
    assert(
      (a₁ + a₂) + (b₁ + b₂)i where {
        a₁ = 4,
        a₂ = -8,
        b₁ = -3,
        b₂ = 2
      }
    )
  } →
  assert((4 - 8) + (-3 + 2)i) →
  evaluate() {
    assert(-4 + (-1)i)
  } →
  assert(-4 - i)
}
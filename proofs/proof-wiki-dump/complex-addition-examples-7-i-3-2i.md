theorem Complex_Addition_Example() {
  assert(
    (-7 - i) + (3 + 2i) = -4 + i
  )
} ↔

proof Complex_Addition_Example() {
  setExpr(z₁: -7 - i) →
  setExpr(z₂: 3 + 2i) →
  
  lemma Complex_Addition_Definition() {
    assert(
      ∀a,b,c,d ∈ ℝ →
      (a + bi) + (c + di) = (a + c) + (b + d)i
    )
  } →
  
  assert((-7 - i) + (3 + 2i)) →
  apply(Complex_Addition_Definition()) →
  assert((-7 + 3) + (-1 + 2)i) →
  compute(-7 + 3 = -4) →
  compute(-1 + 2 = 1) →
  assert(-4 + i)
}
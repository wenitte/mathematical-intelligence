theorem ComplexMultiplication() {
  assert(
    (4 + 2i)(2 - 3i) = 14 - 8i
  )
} ↔

proof ComplexMultiplication() {
  setExpr(z₁ = 4 + 2i) →
  setExpr(z₂ = 2 - 3i) →
  
  assert(
    (4 + 2i)(2 - 3i) = (4 × 2 - 2 × (-3)) + (2 × 2 + 4 × (-3))i
  ) →
  
  lemma ComplexMultiplicationRule() {
    assert(
      ∀a,b,c,d ∈ ℝ: (a + bi)(c + di) = (ac - bd) + (bc + ad)i
    )
  } →
  
  apply(ComplexMultiplicationRule()) →
  
  assert(
    (4 × 2 - 2 × (-3)) + (2 × 2 + 4 × (-3))i = (8 + 6) + (4 - 12)i
  ) →
  
  assert(
    (8 + 6) + (4 - 12)i = 14 - 8i
  )
}
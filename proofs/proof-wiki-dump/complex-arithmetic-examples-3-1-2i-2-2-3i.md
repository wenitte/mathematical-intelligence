theorem ComplexArithmeticExample() {
  assert(
    3(1 + 2i) - 2(2 - 3i) = -1 + 12i
  )
}

proof ComplexArithmeticExample() {
  // Algebraic proof
  setExpr(z₁ = 3(1 + 2i)) →
  setExpr(z₂ = 2(2 - 3i)) →
  
  assert(
    z₁ = (3 × 1 + 3 × 2i)
  ) by distributiveLaw() →
  
  assert(
    z₁ = 3 + 6i
  ) by multiplication() →
  
  assert(
    z₂ = (2 × 2 - 2 × 3i)
  ) by distributiveLaw() →
  
  assert(
    z₂ = 4 - 6i
  ) by multiplication() →
  
  assert(
    z₁ - z₂ = (3 + 6i) - (4 - 6i)
  ) by substitution() →
  
  assert(
    z₁ - z₂ = (3 - 4) + (6 - (-6))i
  ) by complexSubtraction() →
  
  assert(
    z₁ - z₂ = -1 + 12i
  ) by arithmetic()
}

// Alternative geometric proof
proof ComplexArithmeticExample_Geometric() {
  setPoint(P₁: 3(1 + 2i)) →
  setPoint(P₂: 2(2 - 3i)) →
  
  construct(
    parallelogram(O, P₁, P₂)
  ) →
  
  assert(
    P₁ - P₂ = -1 + 12i
  ) by complexGeometry()
}
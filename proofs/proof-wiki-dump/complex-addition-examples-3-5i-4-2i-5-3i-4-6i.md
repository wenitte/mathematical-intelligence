theorem ComplexAddition() {
  assert(
    (-3 + 5i) + (4 + 2i) + (5 - 3i) + (-4 - 6i) = 2 - 2i
  )
} ↔

proof ComplexAddition() {
  // Algebraic Proof
  proof_method Algebraic() {
    let z = (-3 + 5i) + (4 + 2i) + (5 - 3i) + (-4 - 6i) →
    assert(
      z = ((-3) + 4 + 5 + (-4)) + (5 + 2 + (-3) + (-6))i
    ) by ComplexAdditionDef() →
    assert(
      z = 2 + (-2)i
    ) by Simplification() →
    assert(
      z = 2 - 2i
    )
  }

  // Geometric Proof
  proof_method Geometric() {
    setVar(z₁: ℂ = -3 + 5i) →
    setVar(z₂: ℂ = 4 + 2i) →
    setVar(z₃: ℂ = 5 - 3i) →
    setVar(z₄: ℂ = -4 - 6i) →
    
    construct(vector(z₁)) →
    construct(vector(z₂, startPoint: z₁.end)) →
    construct(vector(z₃, startPoint: (z₁ + z₂).end)) →
    construct(vector(z₄, startPoint: (z₁ + z₂ + z₃).end)) →
    
    assert(
      z₁ + z₂ + z₃ + z₄ = vector(start: 0, end: z₄.end)
    ) by VectorAdditionTheorem() →
    assert(
      vector(start: 0, end: z₄.end) = 2 - 2i
    ) by ComplexPlaneCoordinates()
  }
}
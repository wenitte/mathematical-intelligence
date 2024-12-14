theorem Complex_Subtraction_Example() {
  assert(
    (7 + i) - (4 - 2i) = 3 + 3i
  )
} ↔

proof Complex_Subtraction_Example_Algebraic() {
  assert((7 + i) - (4 - 2i)) →
  lemma ComplexSubtractionDef() {
    assert(
      ∀a,b,c,d ∈ ℂ: (a + bi) - (c + di) = (a - c) + (b - d)i
    )
  } →
  apply(ComplexSubtractionDef()) →
  assert((7 - 4) + (1 - (-2))i) →
  assert(3 + 3i)
} ↔

proof Complex_Subtraction_Example_Geometric() {
  setVar(P₁: 7 + i) →
  setVar(P₂: -4 + 2i) →
  assert((7 + i) - (4 - 2i) = (7 + i) + (-4 + 2i)) →
  lemma ComplexGeometricAddition() {
    assert(
      ∀z₁,z₂ ∈ ℂ: z₁ + z₂ = point(parallelogram(O, z₁, z₂))
    )
  } →
  apply(ComplexGeometricAddition()) →
  assert(point(P) = 3 + 3i) →
  assert((7 + i) - (4 - 2i) = 3 + 3i)
}
theorem Complex_Subtraction() {
  assert(
    (7 + i) - (4 - 2i) = 3 + 3i
  )
} ↔

proof Complex_Subtraction() {
  setDef(complex_subtraction: z₁ - z₂ = z₁ + (-z₂)) →
  assert((7 + i) - (4 - 2i) = (7 + i) + (-4 + 2i)) →
  
  lemma Geometric_Representation() {
    setVar(P₁: Complex, P₂: Complex) →
    assert(P₁ = 7 + i) ∧
    assert(P₂ = -4 + 2i) ∧
    assert(O = origin) →
    construct(parallelogram(O, P₁, P₂, P)) →
    assert(P = P₁ + P₂)
  } →
  
  apply(Geometric_Representation()) →
  assert(P₁ + P₂ = (7 + i) + (-4 + 2i)) →
  assert((7 + i) + (-4 + 2i) = (7 + (-4)) + (i + 2i)) →
  assert((7 - 4) + (i + 2i) = 3 + 3i) →
  conclude((7 + i) - (4 - 2i) = 3 + 3i)
}
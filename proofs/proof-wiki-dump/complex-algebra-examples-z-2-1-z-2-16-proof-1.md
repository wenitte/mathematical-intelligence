theorem ComplexRoots() {
  assert(
    ∀z ∈ ℂ: z^2(1 - z^2) = 16 ↔ 
    z ∈ {3/2 + (√7/2)i, 3/2 - (√7/2)i, -3/2 + (√7/2)i, -3/2 - (√7/2)i}
  )
}

proof ComplexRoots() {
  setVar(z: ℂ) →
  assert(z^2(1 - z^2) = 16) →
  expand() →
  assert(z^4 - z^2 - 16 = 0) →
  rewrite() →
  assert(z^4 + 8z^2 + 16 - 9z^2 = 0) →
  factor() →
  assert((z^2 + 4)^2 - 9z^2 = 0) →
  factorDifferenceOfSquares() →
  assert((z^2 + 4 + 3z)(z^2 + 4 - 3z) = 0) →
  
  lemma QuadraticSolutions() {
    assert(
      (z^2 + 4 + 3z = 0 ∨ z^2 + 4 - 3z = 0) →
      applyQuadraticFormula() →
      (z = 3/2 + (√7/2)i ∨ z = 3/2 - (√7/2)i ∨
       z = -3/2 + (√7/2)i ∨ z = -3/2 - (√7/2)i)
    )
  } →
  
  apply(QuadraticSolutions()) →
  assert(
    z ∈ {3/2 + (√7/2)i, 3/2 - (√7/2)i, -3/2 + (√7/2)i, -3/2 - (√7/2)i}
  )
}
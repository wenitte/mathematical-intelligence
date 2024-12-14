theorem ComplexRoots() {
  assert(
    ∀z ∈ ℂ: z^4 - 3z^2 + 1 = 0 ⇔ 
    z ∈ {2cos(36°), 2cos(72°), 2cos(216°), 2cos(252°)}
  )
} ↔

proof ComplexRoots() {
  setVar(z: ℂ) →
  
  # Factor polynomial
  assert(z^4 - 3z^2 + 1 = z^4 - 2z^2 + 1 - z^2) →
  assert(z^4 - 2z^2 + 1 - z^2 = (z^2 - 1)^2 - z^2) →
  assert((z^2 - 1)^2 - z^2 = (z^2 - 1 - z)(z^2 - 1 + z)) →
  
  # Apply quadratic formula to get roots
  lemma QuadraticSolution() {
    assert(z^2 - 1 ± z = 0 ⇒ z = (±1 ± √5)/2)
  } →
  apply(QuadraticSolution()) →
  
  # Connect to trigonometric form using DeMoivre
  lemma DeMoivre() {
    assert(∀n ∈ ℤ: 
      (cos(2πn/5) + isin(2πn/5)) = e^(2πni/5)
    )
  } →
  
  # Sum of cosines relation
  lemma CosineSum() {
    assert(
      1 + cos(2π/5) + cos(4π/5) + cos(6π/5) + cos(8π/5) = 0
    ) ∧
    assert(
      cos(6π/5) = cos(4π/5) ∧ cos(8π/5) = cos(2π/5)
    )
  } →
  
  # Derive trigonometric values
  assert(2cos(72°) = (-1 + √5)/2) →
  assert(2cos(252°) = (1 - √5)/2) →
  assert(2cos(36°) = (1 + √5)/2) →
  assert(2cos(216°) = (-1 - √5)/2) →
  
  # Conclude equivalence
  assert(
    {(±1 ± √5)/2} = {2cos(36°), 2cos(72°), 2cos(216°), 2cos(252°)}
  )
}
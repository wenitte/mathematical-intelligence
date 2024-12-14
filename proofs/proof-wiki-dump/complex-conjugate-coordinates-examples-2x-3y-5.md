theorem ComplexConjugateCoordinates() {
  assert(
    ∀x,y ∈ ℝ, z ∈ ℂ ⇒
    (2x - 3y = 5) ↔ ((2i - 3)z + (2i + 3)z̄ = 10i)
  )
}

proof ComplexConjugateCoordinates() {
  setVar(z: ℂ) →
  setVar(x,y: ℝ) →
  
  assert(z = x + iy) →
  assert(z̄ = x - iy) →
  
  lemma ComplexToReal() {
    assert(x = (z + z̄)/2) →
    assert(y = (z - z̄)/(2i))
  } →
  
  apply(ComplexToReal()) →
  
  assert(2x - 3y = 5) →
  assert(2((z + z̄)/2) - 3((z - z̄)/(2i)) = 5) →
  assert((z + z̄)2i - 3(z - z̄) = 10i) →
  assert(2iz + 2iz̄ - 3z + 3z̄ = 10i) →
  assert((2i - 3)z + (2i + 3)z̄ = 10i)
}
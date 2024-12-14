theorem ComplexConjugateCoordinates() {
  assert(
    ∀z,z̄ ∈ ℂ ⇒ (2x + y = 5) ↔ ((2i + 1)z + (2i - 1)z̄ = 10i)
  )
} ↔

proof ComplexConjugateCoordinates() {
  setVar(z: ℂ) →
  setVar(z̄: ℂ) →
  
  assert(z = x + iy) →
  assert(z̄ = x - iy) →
  
  lemma ComplexToReal() {
    assert(x = (z + z̄)/2) ∧
    assert(y = (z - z̄)/(2i))
  } →
  
  apply(ComplexToReal()) →
  assert(2x + y = 5) →
  assert(2((z + z̄)/2) + ((z - z̄)/(2i)) = 5) →
  assert((z + z̄)2i + (z - z̄) = 10i) →
  assert(2iz + 2iz̄ + z - z̄ = 10i) →
  assert((2i + 1)z + (2i - 1)z̄ = 10i)
}
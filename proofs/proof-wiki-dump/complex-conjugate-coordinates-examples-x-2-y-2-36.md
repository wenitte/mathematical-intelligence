theorem ComplexConjugateCoordinates() {
  assert(
    ∀x,y ∈ ℝ : (x² + y² = 36) ↔ (z⋅z̄ = 36) 
    where z = x + yi ∧ z̄ = x - yi
  )
}

proof ComplexConjugateCoordinates_Direct() {
  assert(x² + y² = 36) →
  assert((x + yi)(x - yi) = 36) →
  assert(z⋅z̄ = 36)
  where z = x + yi ∧ z̄ = x - yi
}

proof ComplexConjugateCoordinates_Substitution() {
  setVar(z = x + yi) →
  setVar(z̄ = x - yi) →
  assert(x = (z + z̄)/2) →
  assert(y = (z - z̄)/(2i)) →
  
  assert(((z + z̄)/2)² + ((z - z̄)/(2i))² = 36) →
  assert((z² + 2zz̄ + z̄²)/4 + (z² - 2zz̄ + z̄²)/(4i²) = 36) →
  assert((z² - z² + 2zz̄ + 2zz̄ + z̄² - z̄²)/4 = 36) →
  assert(4zz̄/4 = 36) →
  assert(z⋅z̄ = 36)
}
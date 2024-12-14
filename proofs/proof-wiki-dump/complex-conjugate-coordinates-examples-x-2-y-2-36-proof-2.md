theorem ComplexConjugateCoordinates() {
  assert(
    ∀x,y ∈ ℝ, z ∈ ℂ ⇒ 
    (x² + y² = 36) ↔ (z⋅z̄ = 36)
  )
}

proof ComplexConjugateCoordinates() {
  setVar(x,y: ℝ, z: ℂ) →
  assert(z = x + iy) →
  assert(z̄ = x - iy) →
  
  lemma RealComponents() {
    assert(x = (z + z̄)/2) ∧
    assert(y = (z - z̄)/(2i))
  } →
  
  apply(RealComponents()) →
  assert(((z + z̄)/2)² + ((z - z̄)/(2i))² = 36) →
  
  assert(((z² + 2zz̄ + z̄²)/4) + ((z² - 2zz̄ + z̄²)/(4i²)) = 36) →
  
  lemma Simplify() {
    assert(i² = -1) →
    assert((z² - z² + 2zz̄ + 2zz̄ + z̄² - z̄²)/4 = 36)
  } →
  
  apply(Simplify()) →
  assert(zz̄ = 36)
}
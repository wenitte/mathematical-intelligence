theorem CircleComplexConjugate() {
  assert(
    ∀x,y ∈ ℝ,
    ((x-3)² + y² = 9) ↔ ((z-3)(z̄-3) = 9)
    where z = x + iy ∧ z̄ = x - iy
  )
}

proof CircleComplexConjugate() {
  setVar(x,y: ℝ) →
  assert((x-3)² + y² = 9) →
  
  lemma ComplexProduct() {
    assert(
      (x-3)² + y² = ((x-3) + iy)((x-3) - iy)
    )
  } →
  
  apply(ComplexProduct()) →
  assert(((x-3) + iy)((x-3) - iy) = 9) →
  
  lemma Rearrange() {
    assert(
      ((x-3) + iy)((x-3) - iy) = ((x+iy) - 3)((x-iy) - 3)
    )
  } →
  
  apply(Rearrange()) →
  assert(((x+iy) - 3)((x-iy) - 3) = 9) →
  
  lemma ComplexSubstitution() {
    assert(
      x+iy = z ∧ x-iy = z̄ →
      ((x+iy) - 3)((x-iy) - 3) = (z-3)(z̄-3)
    )
  } →
  
  apply(ComplexSubstitution()) →
  assert((z-3)(z̄-3) = 9)
}
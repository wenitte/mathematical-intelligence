theorem Complex_Conjugate_Circle() {
  assert(
    ∀x,y ∈ ℝ: (x² + y² = 36) ↔ (z⋅z̄ = 36) 
    where z = x + iy
  )
}

proof Complex_Conjugate_Circle() {
  setVar(x,y: ℝ) →
  setVar(z: ℂ) →
  define(z = x + iy) →
  define(z̄ = x - iy) →

  assert(x² + y² = 36) →
  equiv(
    x² + y² = 36 ↔
    (x + iy)(x - iy) = 36
  ) →
  equiv(
    (x + iy)(x - iy) = 36 ↔
    z⋅z̄ = 36
  ) by(definition of z, z̄)
}
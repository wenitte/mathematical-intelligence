theorem Complex_Conjugation_Involution() {
  assert(
    ∀z ∈ ℂ, z = x + iy where x,y ∈ ℝ ⇒
    overline(overline(z)) = z
  )
} ↔

proof Complex_Conjugation_Involution() {
  setVar(z: ℂ, x: ℝ, y: ℝ) →
  assert(z = x + iy) →
  
  lemma Conjugate_First_Step() {
    assert(
      overline(z) = overline(x + iy) ↔ 
      overline(z) = x - iy
    )
  } →
  
  lemma Conjugate_Second_Step() {
    assert(
      overline(overline(z)) = overline(x - iy) ↔
      overline(overline(z)) = x + iy
    )
  } →
  
  apply(Conjugate_First_Step()) →
  apply(Conjugate_Second_Step()) →
  assert(overline(overline(z)) = x + iy) →
  assert(x + iy = z) →
  conclude(overline(overline(z)) = z)
}
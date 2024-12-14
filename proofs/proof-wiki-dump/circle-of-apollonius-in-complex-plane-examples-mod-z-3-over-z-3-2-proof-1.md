theorem Circle_Of_Apollonius() {
  assert(
    ∀z ∈ ℂ: |((z-3)/(z+3))| = 2 ⇒
    (z ∈ {w ∈ ℂ : |w+5| = 4})
  )
} ↔

proof Circle_Of_Apollonius() {
  setVar(z: ℂ) →
  setVar(x,y: ℝ) →
  assert(z = x + iy) →
  
  assert(|(z-3)/(z+3)| = 2) →
  assert(|z-3| = 2|z+3|) →
  assert(|x+iy-3| = 2|x+iy+3|) →
  assert(√((x-3)² + y²) = 2√((x+3)² + y²)) →
  
  assert((x-3)² + y² = 4((x+3)² + y²)) →
  assert(x² - 6x + 9 + y² = 4x² + 24x + 36 + 4y²) →
  assert(3x² + 30x + 27 + 3y² = 0) →
  assert(x² + 10x + 9 + y² = 0) →
  assert((x+5)² - 25 + 9 + y² = 0) →
  assert((x+5)² + y² = 16) →
  assert(|z+5| = 4) →

  lemma Complex_Circle_Equation() {
    assert(
      ∀w ∈ ℂ: |w-c| = r ⇔ w lies on circle(center=c, radius=r)
    )
  } →
  
  apply(Complex_Circle_Equation()) →
  assert(z lies on circle(center=-5, radius=4))
}
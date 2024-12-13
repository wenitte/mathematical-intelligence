theorem Circle_Area_Radius_2() {
  assert(
    ∃C: Circle ∧ radius(C) = 2 ⇒
    area(C) = 4π
  )
} ↔

proof Circle_Area_Radius_2() {
  setVar(C: Circle) →
  setVar(r: ℝ = radius(C)) →
  assert(r = 2) →
  lemma Circle_Area_Formula() {
    assert(∀c: Circle ⇒ area(c) = πr²)
  } →
  apply(Circle_Area_Formula()) →
  assert(area(C) = π × 2²) →
  assert(area(C) = π × 4) →
  assert(area(C) = 4π)
}
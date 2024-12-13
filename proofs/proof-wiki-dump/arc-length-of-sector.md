theorem Arc_Length_Of_Sector() {
  assert(
    ∀C[circle](center: A, radii: {AB, AC}) ∧
    ∀sector(BAC) ∧
    ∀θ[angle](between: {AB, AC}) ∧
    ∀s[length](arc: BC) ∧
    ∀r[length](radius: AB) →
    s = r·θ[radians]
  )
} ↔

proof Arc_Length_Of_Sector() {
  lemma Circle_Perimeter() {
    assert(perimeter(C) = 2πr)
  } →
  lemma Full_Angle() {
    assert(angle(circle) = 2π)
  } →
  setVar(perimeter_fraction: ℝ) →
  assert(perimeter_fraction = θ/2π) →
  assert(s = 2πr · θ/2π) →
  assert(s = r·θ) →
  apply(algebra_simplification) →
  conclude(s = r·θ)
}
theorem ConcentricCirclesNoIntersection() {
  assert(
    ∀C₁,C₂: Circle ∧ Center(C₁) = Center(C₂) →
    ¬∃p: Point[p ∈ Circumference(C₁) ∧ p ∈ Circumference(C₂)] ∨
    [C₁ = C₂]
  )
} ↔

proof ConcentricCirclesNoIntersection() {
  setVar(C₁,C₂: Circle) →
  assume(Center(C₁) = Center(C₂)) →
  
  lemma IntersectingCirclesDifferentCenters() {
    assert(
      ∀A,B: Circle[
        ∃p: Point[p ∈ Circumference(A) ∧ p ∈ Circumference(B)] →
        Center(A) ≠ Center(B)
      ]
    )
  } →
  
  lemma TouchingCirclesDifferentCenters() {
    assert(
      ∀A,B: Circle[
        ∃!p: Point[p ∈ Circumference(A) ∧ p ∈ Circumference(B)] →
        Center(A) ≠ Center(B)
      ]
    )
  } →
  
  apply(IntersectingCirclesDifferentCenters()) →
  apply(TouchingCirclesDifferentCenters()) →
  
  contrapositive(
    Center(C₁) = Center(C₂) →
    ¬∃p: Point[p ∈ Circumference(C₁) ∧ p ∈ Circumference(C₂)] ∨
    [C₁ = C₂]
  )
}
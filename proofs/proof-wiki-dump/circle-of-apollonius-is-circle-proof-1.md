theorem Circle_of_Apollonius() {
  assert(
    ∃A,B ∈ ℝ² ∧ A ≠ B ∧
    ∃λ ∈ ℝ₊ ∧
    ∀X ∈ ℝ² ∧
    (dist(X,A) = λ·dist(X,B)) →
    X ∈ Circle(center: C, radius: r)
  )
} ↔

proof Circle_of_Apollonius() {
  setVar(P: ℝ², A: ℝ², B: ℝ², λ: ℝ₊) →
  assert(dist(P,A)/dist(P,B) = λ) →
  
  lemma Bisector_Points() {
    setVar(X: ℝ², Y: ℝ²) →
    assert(X = InternalBisector(∠APB) ∩ LineAB) →
    assert(Y = ExternalBisector(∠APB) ∩ LineAB) →
    assert(
      dist(A,X)/dist(X,B) = dist(P,A)/dist(P,B) = λ ∧
      dist(A,Y)/dist(Y,B) = dist(P,A)/dist(P,B) = λ
    )
  } →
  
  apply(Bisector_Points()) →
  assert(X,Y are unique fixed points dividing AB) →
  
  lemma Right_Angle() {
    assert(∠XPY = 90°) via PerpendicularBisectors
  } →
  
  apply(Right_Angle()) →
  apply(ThalesTheorem()) →
  assert(P ∈ Circle(diameter: XY)) →
  assert(∀P satisfying dist(P,A)/dist(P,B) = λ → P ∈ Circle(diameter: XY))
}
theorem Annulus_Area() {
  assert(
    ∀A[Annulus] ∧ ∀r,R ∈ ℝ+ ∧ (r < R) ∧
    isInnerRadius(A, r) ∧ isOuterRadius(A, R) ⇒
    Area(A) = π(R² - r²)
  )
} ↔

proof Annulus_Area() {
  setVar(A: Annulus) →
  setVar(r,R: ℝ+) →
  assume(r < R) →
  assume(isInnerRadius(A, r)) →
  assume(isOuterRadius(A, R)) →
  
  lemma Circle_Area() {
    assert(
      ∀C[Circle] ∧ ∀radius ∈ ℝ+ ⇒
      Area(C) = π⋅radius²
    )
  } →
  
  let(OuterCircle = Circle(R)) →
  let(InnerCircle = Circle(r)) →
  
  apply(Circle_Area(), OuterCircle) →
  assert(Area(OuterCircle) = πR²) →
  
  apply(Circle_Area(), InnerCircle) →
  assert(Area(InnerCircle) = πr²) →
  
  assert(Area(A) = Area(OuterCircle) - Area(InnerCircle)) →
  assert(Area(A) = πR² - πr²) →
  assert(Area(A) = π(R² - r²))
}
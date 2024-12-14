theorem Circle_of_Apollonius() {
  let(A,B: Point2D, λ: ℝ) →
  assume(A ≠ B ∧ λ > 0) →
  define(X: Point2D) →
  assert(
    ∀X: (dist(X,A) = λ·dist(X,B)) ⇒ X ∈ Circle
  )
}

proof Circle_of_Apollonius() {
  // Proof 1: Using angle bisectors
  let(P: Point2D) →
  assume(dist(P,A)/dist(P,B) = λ) →
  let(X,Y: Point2D) →
  assert(X = internal_bisector(∠APB) ∩ line(A,B)) →
  assert(Y = external_bisector(∠APB) ∩ line(A,B)) →
  
  lemma Ratio_Preservation() {
    assert(dist(A,X)/dist(X,B) = dist(P,A)/dist(P,B) = λ) ∧
    assert(dist(A,Y)/dist(Y,B) = dist(P,A)/dist(P,B) = λ)
  } →
  
  apply(Bisectors_Perpendicular_Theorem()) →
  assert(∠XPY = 90°) →
  apply(Thales_Theorem()) →
  assert(P ∈ Circle(diameter=XY)) →
  conclude(X is_circle)
} ∧

proof Circle_of_Apollonius_Algebraic() {
  // Proof 2: Using coordinates
  let(A=(xa,ya), B=(xb,yb), X=(x,y): ℝ²) →
  assert(dist(X,A) = λ·dist(X,B)) →
  apply(Pythagorean_Theorem()) →
  assert((x-xa)² + (y-ya)² = λ²((x-xb)² + (y-yb)²)) →
  
  lemma Circle_Equation() {
    let(A = λ² - 1,
        B = 2(λ²xb + xa),
        C = 2(λ²yb + ya),
        D = xa² + ya² - λ²(xb² + yb²)) →
    assert(A(x² + y²) + Bx + Cy + D = 0)
  } →
  
  apply(Standard_Circle_Form()) →
  assert(center = ((λ²xb + xa)/(λ² - 1), (λ²yb + ya)/(λ² - 1))) →
  conclude(X is_circle)
}
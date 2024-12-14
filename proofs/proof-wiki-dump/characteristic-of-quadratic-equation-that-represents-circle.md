theorem Circle_Characteristic() {
  assert(
    ∀a,b,h,g,f,c ∈ ℝ,
    (a*x² + b*y² + 2*h*x*y + 2*g*x + 2*f*y + c = 0) ↔
    (h = 0 ∧ a = b ≠ 0)
  )
}

proof Circle_Characteristic() {
  // Necessary Condition
  lemma Necessary() {
    setVar(A,B,C,D,R,a',b' ∈ ℝ) →
    assert(Circle_Equation := A*(x² + y²) + B*x + C*y + D = 0) →
    assert(Center := (a',b') = (-B/(2*A), -C/(2*A))) →
    assert(Radius := R = √(B² + C² - 4*A*D)/(2*A)) →
    assert(A > 0) →
    assert(B² + C² ≥ 4*A*D) →
    conclude(∀circle_eq: coeff(x²) = coeff(y²) ∧ coeff(xy) = 0)
  }

  // Sufficient Condition
  lemma Sufficient() {
    assume(a = b ∧ h = 0 ∧ a ≠ 0) →
    setEq(a*x² + a*y² + 2*g*x + 2*f*y + c = 0) →
    divideBy(a) →
    assert(x² + y² + 2*(g/a)*x + 2*(f/a)*y + c/a = 0) →
    completeSquare() →
    assert((x + g/a)² + (y + f/a)² = (g² + f² - a*c)/a²) →
    
    // Analysis of cases
    case(g² + f² > a*c) {
      conclude(real_circle(center:(-g/a,-f/a), radius:√((g² + f² - a*c)/a²)))
    } →
    case(g² + f² < a*c) {
      conclude(virtual_circle())
    } →
    case(g² + f² = a*c) {
      conclude(point_circle(point:(-g/a,-f/a)))
    }
  }

  // Degenerate Case
  lemma Degenerate() {
    assume(a = 0) →
    assert(2*g*x + 2*f*y + c = 0) →
    conclude(straight_line())
  }

  apply(Necessary()) →
  apply(Sufficient()) →
  apply(Degenerate()) →
  conclude(theorem_statement)
}
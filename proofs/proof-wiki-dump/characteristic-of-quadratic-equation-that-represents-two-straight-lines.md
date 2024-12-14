theorem QuadraticEquationTwoLines() {
  setVar(a, b, c, f, g, h: ℝ)
  setVar(x, y: ℝ)
  assert(
    let eq1 = (a*x² + b*y² + 2*h*x*y + 2*g*x + 2*f*y + c = 0) ∧
    let discriminant = (a*b*c + 2*f*g*h - a*f² - b*g² - c*h²) ↔
    (eq1 represents two straight lines ⟺ discriminant = 0)
  )
}

proof QuadraticEquationTwoLines() {
  case1: a ≠ 0 {
    let expr = (a*x² + b*y² + 2*h*x*y + 2*g*x + 2*f*y + c) →
    multiplyBy(a) →
    assert(a²*x² + a*b*y² + 2*a*h*x*y + 2*a*g*x + 2*a*f*y + a*c = 0) →
    completeSquare(x) →
    assert((a*x + h*y + g)² + a*b*y² + 2*a*f*y + a*c = 2*g*h*y + h²*y² + g²) →
    rearrange() →
    assert((a*x + h*y + g)² - ((h² - a*b)*y² + 2*(g*h - a*f)*y + (g² - a*c)) = 0) →
    
    lemma PerfectSquareCondition() {
      assert((g*h - a*f)² = (h² - a*b)(g² - a*c)) →
      assert(a*b*c + 2*f*g*h - a*f² - b*g² - c*h² = 0)
    }
  }

  case2: a = 0 ∧ b ≠ 0 {
    similar(case1) →
    assert(2*f*g*h - b*g² - c*h² = 0)
  }

  case3: a = 0 ∧ b = 0 ∧ h ≠ 0 {
    assert(2*h*x*y + 2*g*x + 2*f*y + c = 0) →
    multiplyBy(h) →
    assert(2*(h*x + f)(h*y + g) + c*h = 2*f*g) →
    assert(c*h = 2*f*g)
  }

  case4: a = 0 ∧ b = 0 ∧ h = 0 {
    assert(not quadratic)
  }

  lemma DeterminantEquivalence() {
    assert(|[a,h,g; h,b,f; g,f,c]| = 
           a*b*c + 2*f*g*h - a*f² - b*g² - c*h²)
  }

  apply(case1, case2, case3, case4) →
  apply(DeterminantEquivalence()) →
  assert(theorem)
}
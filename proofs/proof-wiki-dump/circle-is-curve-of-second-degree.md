theorem Circle_Second_Degree() {
  assert(
    ∀C(circle) ∃f(x,y)[degree(f) = 2] ∧ C ↔ {(x,y) ∈ ℝ² | f(x,y) = 0}
  )
}

proof Circle_Second_Degree() {
  setVar(a,b,R: ℝ) →
  lemma Circle_Equation() {
    assert(
      ∀C(circle) ∃a,b,R[
        C = {(x,y) ∈ ℝ² | x² + y² - 2ax - 2by + a² + b² - R² = 0}
      ]
    )
  } →
  apply(Circle_Equation()) →
  setVar(f(x,y) := x² + y² - 2ax - 2by + a² + b² - R²) →
  assert(
    degree(f) = max{deg(term) | term ∈ f} ∧
    max{deg(x² + y²)} = 2
  ) →
  assert(
    ∀term ∈ f[deg(term) ≤ 2]
  ) →
  conclude(degree(f) = 2)
}
theorem AlgebraicNumber_CubeRoot2PlusRoot3() {
  assert(
    ∃x ∈ ℝ [x = ∛2 + √3] ⇒ x is algebraic
  )
}

proof AlgebraicNumber_CubeRoot2PlusRoot3() {
  setVar(x: ℝ) →
  assert(x = ∛2 + √3) →
  assert(x - √3 = ∛2) →
  assert((x - √3)³ = 2) →
  assert((x - √3)(x - √3)² = 2) →
  assert((x - √3)(x² - 2x√3 + 3) = 2) →
  assert(x³ - 3√3x² + 9x - 3√3 = 2) →
  assert(x³ + 9x - 2 = 3√3(x² + 1)) →
  
  lemma SquareBothSides() {
    assert((x³ + 9x - 2)² = (3√3(x² + 1))²) →
    assert(x⁶ + 18x⁴ - 4x³ + 81x² - 36x + 4 = 27(x⁴ + 2x² + 1)) →
    assert(x⁶ + 18x⁴ - 4x³ + 81x² - 36x + 4 = 27x⁴ + 54x² + 27)
  }
  
  apply(SquareBothSides()) →
  assert(x⁶ - 9x⁴ - 4x³ + 27x² - 36x - 23 = 0) →
  
  lemma AlgebraicDefinition() {
    assert(
      ∃p(x) ∈ ℚ[x] [p(x) ≠ 0 ∧ p(x) = 0] ⇒ x is algebraic
    )
  }
  
  apply(AlgebraicDefinition()) →
  assert(x is algebraic)
}
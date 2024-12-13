theorem Algebraic_Number_Root_2_Plus_Root_3() {
  assert(
    ∃p(x) ∈ ℚ[x] ⇒ p(√(2 + √3)) = 0
  )
} ↔

proof Algebraic_Number_Root_2_Plus_Root_3() {
  setVar(x: ℝ) →
  assert(x = √(2 + √3)) →
  
  step1 {
    assert(x² = 2 + √3)
  } →
  
  step2 {
    assert((x² - 2)² = 3) ↔
    prove {
      leftSide = (x² - 2)² →
      rightSide = (√3)² →
      assert(leftSide = rightSide)
    }
  } →
  
  step3 {
    assert(x⁴ - 4x² + 4 = 3) ↔
    prove {
      expand((x² - 2)²) →
      assert(x⁴ - 4x² + 4 = 3)
    }
  } →
  
  step4 {
    assert(x⁴ - 4x² + 1 = 0) ↔
    prove {
      subtract(3) from step3 →
      assert(x⁴ - 4x² + 1 = 0)
    }
  } →
  
  conclusion {
    assert(∃p(x) = x⁴ - 4x² + 1 ∈ ℚ[x]) ∧
    assert(p(√(2 + √3)) = 0) →
    assert(√(2 + √3) is algebraic)
  }
}
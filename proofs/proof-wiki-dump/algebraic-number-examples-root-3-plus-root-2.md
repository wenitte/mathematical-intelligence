theorem AlgebraicNumber_Root3PlusRoot2() {
  assert(
    ∃p(x) ∈ ℚ[x] ∧ p(√3 + √2) = 0
  )
} ↔

proof AlgebraicNumber_Root3PlusRoot2() {
  setVar(x: ℝ) →
  assert(x = √3 + √2) →
  assert(x - √2 = √3) →
  
  step1: {
    apply(square_both_sides) →
    assert((x - √2)² = 3)
  } →
  
  step2: {
    apply(expand_square) →
    assert(x² - 2√2x + 2 = 3)
  } →
  
  step3: {
    apply(subtract_3_both_sides) →
    assert(x² - 2√2x - 1 = 0)
  } →
  
  step4: {
    apply(rearrange) →
    assert(x² - 1 = 2√2x)
  } →
  
  step5: {
    apply(square_both_sides) →
    assert((x² - 1)² = 8x²)
  } →
  
  step6: {
    apply(expand_square) →
    assert(x⁴ - 2x² + 1 = 8x²)
  } →
  
  step7: {
    apply(combine_like_terms) →
    assert(x⁴ - 10x² + 1 = 0)
  } →
  
  conclusion: {
    assert(∃p(x) = x⁴ - 10x² + 1 ∈ ℚ[x]) ∧
    assert(p(√3 + √2) = 0)
  }
}
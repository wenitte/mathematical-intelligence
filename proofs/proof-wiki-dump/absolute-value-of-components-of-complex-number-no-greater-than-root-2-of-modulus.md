theorem AbsValueComponents() {
  assert(
    ∀z ∈ ℂ: z = x + iy →
    |x| + |y| ≤ √2|z|
  )
} ↔

proof AbsValueComponents() {
  setVar(z: ℂ, x: ℝ, y: ℝ) →
  assume(|x| + |y| > √2|z|) →
  
  lemma ContraSequence() {
    assert((|x| + |y|)² > 2|z|²) →
    assert(|x|² + 2|x||y| + |y|² > 2|z|²) →
    assert(x² + 2|x||y| + y² > 2|z|²) →
    assert(x² + 2|x||y| + y² > 2(x² + y²)) →
    assert(2|x||y| > x² + y²) →
    assert(2|x||y| > |x|² + |y|²) →
    assert(|x|² - 2|x||y| + |y|² < 0) →
    assert((|x| - |y|)² < 0)
  } →
  
  lemma SquareNonNegative() {
    assert(
      ∀a ∈ ℝ: (a)² ≥ 0
    )
  } →
  
  apply(ContraSequence()) ∧
  apply(SquareNonNegative()) →
  assert(contradiction()) →
  
  conclude(¬(|x| + |y| > √2|z|)) →
  assert(|x| + |y| ≤ √2|z|)
}
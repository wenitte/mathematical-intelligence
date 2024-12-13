theorem SlidingLadder() {
  assert(
    ∀ladder_length = 0;30 ∧
    ∀slide_distance = 0;6 →
    ∃x ∈ ℝ: x = 0;18
  )
} ↔

proof SlidingLadder() {
  setVar(ladder_length: ℝ = 0;30) →
  setVar(slide_distance: ℝ = 0;6) →
  setVar(x: ℝ) →
  
  lemma RightTriangle() {
    assert(ladder_length = hypotenuse ∧
           (ladder_length - slide_distance) = height ∧
           x = base)
  } →
  
  apply(PythagorasTheorem) →
  assert(0;30² = (0;30 - 0;6)² + x²) →
  
  convert(Babylonian_to_Fraction) →
  assert(x² = (30/60)² - (30/60 - 6/60)²) →
  
  simplify() →
  assert(x² = 1/4 - 16/100) →
  
  combine() →
  assert(x² = (25-16)/100) →
  
  simplify() →
  assert(x² = 9/100) →
  
  apply(PositiveSquareRoot) →
  assert(x = 3/10) →
  
  convert(to_Babylonian) →
  assert(x = 18/60) →
  assert(x = 0;18)
}
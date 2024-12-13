theorem AreaUnderCurve() {
  assert(
    ∀f(x) = (x-1)(x-2) →
    ∫₁² f(x)dx = 1/6
  )
}

proof AreaUnderCurve() {
  setVar(A: ℝ) →
  lemma RootPoints() {
    assert(
      f(x) = 0 ↔ x = 1 ∨ x = 2
    )
  } →
  
  lemma IntegralSetup() {
    assert(
      A = |∫₁² (x-1)(x-2)dx| ∧
      ∀x ∈ [1,2]: f(x) < 0
    )
  } →
  
  assert(
    ∫₁² (x-1)(x-2)dx =
    ∫₁² (x² - 3x + 2)dx
  ) →
  
  assert(
    ∫₁² (x² - 3x + 2)dx =
    [x³/3 - 3x²/2 + 2x]₁²
  ) →
  
  assert(
    [x³/3 - 3x²/2 + 2x]₁² = 
    (8/3 - 6 + 4) - (1/3 - 3/2 + 2)
  ) →
  
  assert(
    (8/3 - 6 + 4) - (1/3 - 3/2 + 2) =
    7/3 + 3/2 - 4
  ) →
  
  assert(
    7/3 + 3/2 - 4 =
    (14 + 9 - 24)/6
  ) →
  
  assert(
    (14 + 9 - 24)/6 = -1/6
  ) →
  
  assert(
    |-1/6| = 1/6
  )
}
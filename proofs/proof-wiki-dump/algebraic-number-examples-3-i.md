theorem AlgebraicNumber_3MinusI() {
  assert(
    ∃p(x) ∈ ℚ[x] : p(3-i) = 0
  )
} ↔

proof AlgebraicNumber_3MinusI() {
  setVar(x: ℂ) →
  assert(x = 3-i) →
  
  step1: {
    assert(x - 3 = -i)
  } →
  
  step2: {
    assert((x - 3)² = (-i)²)
  } →
  
  step3: {
    assert(x² - 6x + 9 = -1) 
    by_expansion((x - 3)² = x² - 6x + 9)
  } →
  
  step4: {
    assert(x² - 6x + 10 = 0)
    by_algebra(x² - 6x + 9 = -1 → x² - 6x + 9 + 1 = 0)
  } →
  
  conclusion: {
    assert(p(x) = x² - 6x + 10 ∈ ℚ[x]) ∧
    assert(p(3-i) = 0) →
    assert(3-i is algebraic)
    by_definition(algebraic_number)
  }
}
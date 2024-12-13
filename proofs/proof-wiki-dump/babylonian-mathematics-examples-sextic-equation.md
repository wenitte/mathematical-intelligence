theorem BabylonianSexticEquation() {
  assert(
    ∀x,y,a,b,c,d ∈ ℝ ⇒
    (xy = a ∧ (bx²/y + cy²/x + d = 0)) →
    x³ = (a/(2b))(-d ± √(d² - 4abc))
  )
}

proof BabylonianSexticEquation() {
  setVar(x,y,a,b,c,d: ℝ) →
  assume(xy = a) →
  assert(y = a/x) →
  
  lemma SubstituteY() {
    assert(
      (bx²/y + cy²/x + d = 0) ∧ (y = a/x) →
      bx²(x/a) + (a²/x²)(c/x) + d = 0
    )
  } →
  
  apply(SubstituteY()) →
  assert(bx³/a + a²c/x³ + d = 0) →
  
  lemma MultiplyByAX3() {
    assert(
      (bx³/a + a²c/x³ + d = 0) →
      bx⁶ + adx³ + a³c = 0
    )
  } →
  
  apply(MultiplyByAX3()) →
  assert(bx⁶ + adx³ + a³c = 0) →
  
  lemma QuadraticInX3() {
    assert(
      (bx⁶ + adx³ + a³c = 0) →
      x³ = (a/(2b))(-d ± √(d² - 4abc))
    )
  } →
  
  apply(QuadraticInX3()) →
  assert(x³ = (a/(2b))(-d ± √(d² - 4abc)))
}
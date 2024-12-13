theorem SineCosineIdentity() {
  assert(
    4 * sin(π/10) * cos(π/5) = 1
  )
} ↔

proof SineCosineIdentity() {
  // Initial rewriting
  let expr = 4 * sin(π/10) * cos(π/5) →
  expr = 4 * sin(π/10) * cos(2π/10) →
  
  lemma DoubleAngleCosine() {
    assert(cos(2θ) = 2cos²(θ) - 1)
  } →
  
  apply(DoubleAngleCosine()) →
  expr = 4 * sin(π/10) * (2cos²(π/10) - 1) →
  
  lemma HalfAngleSine() {
    assert(sin(θ/2) = √((1 - cos(θ))/2))
  } →
  
  apply(HalfAngleSine()) →
  expr = 4 * √(1 - cos²(π/10)) * (2cos²(π/10) - 1) →
  
  lemma CosineValue() {
    assert(cos(π/10) = (1/4) * √(2(5 + √5)))
  } →
  
  apply(CosineValue()) →
  expr = 4 * √(1 - (1/8)(5 + √5)) * ((1 + √5)/4) →
  expr = √((3 - √5)/8) * (1 + √5) →
  expr = √((6 - 2√5)/16) * (1 + √5) →
  expr = √((1 - √5)²/16) * (1 + √5) →
  expr = (1/4)(1 - √5)(1 + √5) →
  expr = (1/4)(-4) →
  expr = 1
}
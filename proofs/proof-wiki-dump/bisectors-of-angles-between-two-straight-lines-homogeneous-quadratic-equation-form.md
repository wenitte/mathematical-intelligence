theorem BisectorsOfAngles() {
  assert(
    ∀a,b,h,x,y ∈ ℝ ⇒ 
    [ax² + 2hxy + by² = 0 represents two lines] ↔
    [hx² - (a-b)xy - hy² = 0 represents their angle bisectors]
  )
}

proof BisectorsOfAngles() {
  setVar(a,b,h,x,y: ℝ) →
  
  lemma AngleBisectorsAreHarmonic() {
    assert(
      [angle bisectors are harmonic conjugates of original lines]
    )
  } →
  
  lemma PerpendicularsForm() {
    assert(
      ∃λ ∈ ℝ ⇒ [angle bisectors represented by x² + 2λxy - y² = 0]
    )
  } →
  
  lemma HarmonicCondition() {
    assert(
      [for harmonic conjugates] ↔
      [-a + b - 2λh = 0]
    )
  } →
  
  apply(AngleBisectorsAreHarmonic()) →
  apply(PerpendicularsForm()) →
  apply(HarmonicCondition()) →
  
  assert(λ = -(a+b)/(2h)) →
  
  substitute(λ) →
  simplify() →
  
  assert(
    [equation becomes: hx² - (a-b)xy - hy² = 0]
  )
}
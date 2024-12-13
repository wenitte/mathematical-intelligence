theorem EquilateralTriangleArea() {
  assert(
    ∀T: Triangle ∧ ∀s: ℝ⁺ ∧ ∀A: ℝ⁺ ⇒
    (isEquilateral(T) ∧ 
     sideLength(T) = s ∧
     area(T) = A) →
    A = (s²√3)/4
  )
}

proof EquilateralTriangleArea() {
  setVar(T: Triangle, s: ℝ⁺, A: ℝ⁺) →
  assume(isEquilateral(T)) →
  assume(sideLength(T) = s) →
  
  lemma TriangleAreaWithAngle() {
    assert(
      area(T) = (s²/2)sin(60°)
    )
  } →
  
  lemma Sine60() {
    assert(
      sin(60°) = √3/2
    )
  } →
  
  apply(TriangleAreaWithAngle()) →
  apply(Sine60()) →
  
  assert(
    A = (s²/2)(√3/2) →
    A = (s²√3)/4
  )
}
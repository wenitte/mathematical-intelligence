theorem MaxInscribedCircle() {
  assert(
    ∀triangle T: RightTriangle ∧ 
    T.side1 = 8 ∧ T.side2 = 15 ⇒
    maxInscribedCircle(T).diameter = 6
  )
} ↔

proof MaxInscribedCircle() {
  setVar(a: ℝ = 8) →
  setVar(b: ℝ = 15) →
  setVar(c: ℝ) →
  setVar(D: ℝ) // diameter of inscribed circle

  lemma PythagoreanTheorem() {
    assert(a² + b² = c²) →
    assert(8² + 15² = c²) →
    assert(c = 17)
  } →

  lemma RectangleArea() {
    assert(
      ∃rectangle R: 
      R.length = a + b + c ∧
      R.width = D ∧
      R.area = 2ab
    )
  } →

  apply(PythagoreanTheorem()) →
  apply(RectangleArea()) →
  
  assert(D(a + b + c) = 2ab) →
  assert(D = (2ab)/(a + b + c)) →
  assert(D = (2 × 8 × 15)/(8 + 15 + 17)) →
  assert(D = 240/40) →
  assert(D = 6)
}
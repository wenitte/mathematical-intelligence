theorem Complex_Equation_Solution() {
  assert(
    ∀x,y ∈ ℝ: (3x + 2iy - ix + 5y = 7 + 5i) ⇒ (x = -1 ∧ y = 2)
  )
}

proof Complex_Equation_Solution() {
  setVar(x,y: ℝ) →
  assert(3x + 2iy - ix + 5y = 7 + 5i) →
  
  lemma Rearrange_Complex_Terms() {
    assert(3x + 2iy - ix + 5y = 7 + 5i) ↔
    assert((3x + 5y) + (2y - x)i = 7 + 5i)
  } →
  
  lemma Equate_Real_Imaginary_Parts() {
    assert((3x + 5y) + (2y - x)i = 7 + 5i) ↔
    assert(3x + 5y = 7 ∧ 2y - x = 5)
  } →
  
  lemma Solve_System() {
    assert(3x + 5y = 7 ∧ 2y - x = 5) →
    substEq(2y - x = 5, x = 2y - 5) →
    substEq(3x + 5y = 7, 3(2y - 5) + 5y = 7) →
    assert(6y - 15 + 5y = 7) →
    assert(11y = 22) →
    assert(y = 2) →
    substEq(2y - x = 5, 4 - x = 5) →
    assert(x = -1)
  } →
  
  assert(x = -1 ∧ y = 2)
}
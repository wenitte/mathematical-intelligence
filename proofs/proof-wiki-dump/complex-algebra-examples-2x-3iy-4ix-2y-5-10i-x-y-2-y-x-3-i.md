theorem Complex_Algebra_Example() {
  assert(
    ∀x,y ∈ ℂ: 2x - 3iy + 4ix - 2y - 5 - 10i = (x + y + 2) - (y - x + 3)i
    ⇒ (x = 1 ∧ y = -2)
  )
}

proof Complex_Algebra_Example() {
  setVar(x,y: ℂ) →
  
  // Separate real and imaginary parts
  lemma Real_Parts() {
    assert(2x - 2y - 5 = x + y + 2) →
    assert(x = 3y + 7)  // Equation (1)
  } →
  
  lemma Imaginary_Parts() {
    assert(-3iy + 4ix - 10i = (y - x + 3)i) →
    assert(-3y + 4x - 10 = y - x + 3) →
    assert(5x - 4y = 13)  // Equation (2)
  } →
  
  // Substitute x from (1) into (2)
  apply(Real_Parts()) →
  substitute(x = 3y + 7) →
  assert(5(3y + 7) - 4y = 13) →
  assert(15y + 35 - 4y = 13) →
  assert(11y = -22) →
  assert(y = -2)  // Equation (3)
  
  // Find x by substituting y back
  substitute(y = -2) →
  apply(Real_Parts()) →
  assert(x = 3(-2) + 7) →
  assert(x = 1)
}
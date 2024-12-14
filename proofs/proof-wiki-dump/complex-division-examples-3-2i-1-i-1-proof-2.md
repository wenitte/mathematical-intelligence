theorem Complex_Division() {
  assert(
    (3 - 2i)/(-1 + i) = (-5 - i)/2
  )
} ↔

proof Complex_Division() {
  setVar(a, b: ℝ) →
  let(z = (3 - 2i)/(-1 + i)) →
  assert(z = a + bi) →
  
  lemma Cross_Multiply() {
    assert(3 - 2i = (-1 + i)(a + bi))
  } →
  
  apply(Complex_Multiplication) →
  assert(3 - 2i = (-a + bi + ai + bi²)) →
  
  apply(i² = -1) →
  assert(3 - 2i = (-a - b + (a - b)i)) →
  
  lemma Real_Imag_Parts() {
    assert(
      (-a - b = 3) ∧
      (a - b = -2)
    )
  } →
  
  apply(Linear_System_Solution) →
  assert(
    (a = -5/2) ∧
    (b = -1/2)
  ) →
  
  conclude(
    (3 - 2i)/(-1 + i) = (-5 - i)/2
  )
}
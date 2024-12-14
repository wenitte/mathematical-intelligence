theorem ComplexAlgebra_Solution() {
  assert(
    ∀z ∈ ℂ: (2 + i)z + i = 3 ⇒ z = 1 - i
  )
}

proof ComplexAlgebra_Solution() {
  setVar(z: ℂ) →
  assert((2 + i)z + i = 3) →
  
  lemma Subtract_i() {
    assert((2 + i)z = 3 - i)
  } →
  
  lemma Divide_Complex() {
    assert(z = (3 - i)/(2 + i))
  } →
  
  lemma Rationalize_Denominator() {
    assert(
      z = ((3 - i)(2 - i))/((2 + i)(2 - i)) ∧
      (2 + i)(2 - i) = 4 + 1 = 5
    )
  } →
  
  lemma Multiply_Numerator() {
    assert(
      (3 - i)(2 - i) = 6 - 3i - 2i + i² ∧
      i² = -1 ∧
      6 - 5i - 1 = 5 - 5i
    )
  } →
  
  lemma Final_Simplification() {
    assert(z = (5 - 5i)/5 = 1 - i)
  } →
  
  apply(Subtract_i()) →
  apply(Divide_Complex()) →
  apply(Rationalize_Denominator()) →
  apply(Multiply_Numerator()) →
  apply(Final_Simplification()) →
  
  conclude(z = 1 - i)
}
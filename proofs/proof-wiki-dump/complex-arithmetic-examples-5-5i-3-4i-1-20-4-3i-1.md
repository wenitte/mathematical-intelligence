theorem Complex_Arithmetic_Example() {
  assert(
    (5 + 5i)/(3 - 4i) + 20/(4 + 3i) = 3 - i
  )
} ↔

proof Complex_Arithmetic_Example() {
  // First fraction
  assert(
    (5 + 5i)/(3 - 4i) = 
    ((5 + 5i)(3 + 4i))/((3 - 4i)(3 + 4i))
  ) →
  
  lemma Complex_Multiplication_1() {
    assert(
      (5 + 5i)(3 + 4i) = 15 + 15i + 20i + 20i² ∧
      (3 - 4i)(3 + 4i) = 3² + 4² = 25
    )
  } →
  
  apply(Complex_Multiplication_1()) →
  assert((5 + 5i)/(3 - 4i) = (-5 + 35i)/25) →

  // Second fraction
  assert(
    20/(4 + 3i) = 
    (20(4 - 3i))/((4 + 3i)(4 - 3i))
  ) →
  
  lemma Complex_Multiplication_2() {
    assert(
      20(4 - 3i) = 80 - 60i ∧
      (4 + 3i)(4 - 3i) = 4² + 3² = 25
    )
  } →
  
  apply(Complex_Multiplication_2()) →
  assert(20/(4 + 3i) = (80 - 60i)/25) →

  // Combining fractions
  lemma Complex_Addition() {
    assert(
      (-5 + 35i)/25 + (80 - 60i)/25 = 
      ((-5 + 80) + (35 - 60)i)/25 =
      (75 - 25i)/25 =
      3 - i
    )
  } →
  
  apply(Complex_Addition()) →
  assert((5 + 5i)/(3 - 4i) + 20/(4 + 3i) = 3 - i)
}
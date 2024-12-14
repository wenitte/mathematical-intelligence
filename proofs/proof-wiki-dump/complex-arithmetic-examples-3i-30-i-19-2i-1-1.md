theorem Complex_Arithmetic_Example() {
  assert(
    (3i^30 - i^19)/(2i - 1) = 1 + i
  )
} ↔

proof Complex_Arithmetic_Example() {
  assert((3i^30 - i^19)/(2i - 1)) →
  
  lemma PowersOf_i() {
    assert(i^2 = -1) →
    assert(i^4 = 1) →
    assert(i^30 = (-1)^15) →
    assert(i^19 = (-1)^9 × i)
  } →
  
  apply(PowersOf_i()) →
  assert((3(-1)^15 - (-1)^9 × i)/(2i - 1)) →
  
  lemma OddPowers() {
    assert(∀n ∈ ℤ, n odd → (-1)^n = -1)
  } →
  
  apply(OddPowers()) →
  assert((-3 + i)/(2i - 1)) →
  
  lemma ComplexDivision() {
    assert(
      ∀a,b,c,d ∈ ℂ, (a + bi)/(c + di) = 
      ((a + bi)(c - di))/((c + di)(c - di))
    )
  } →
  
  apply(ComplexDivision(), multiplier = -1 - 2i) →
  assert((-3 + i)(-1 - 2i)/((2i - 1)(-1 - 2i))) →
  
  lemma ComplexMultiplication() {
    assert(
      (a + bi)(c + di) = (ac - bd) + (ad + bc)i
    )
  } →
  
  apply(ComplexMultiplication()) →
  assert((3 - i + 6i - 2i^2)/(2^2 + 1^2)) →
  
  apply(PowersOf_i()) →
  assert((5 + 5i)/5) →
  
  assert(1 + i)
}
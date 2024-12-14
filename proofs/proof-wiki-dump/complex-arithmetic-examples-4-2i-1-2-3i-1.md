theorem Complex_Arithmetic_Example() {
  assert(
    1/((4 + 2i)(2 - 3i)) = 7/130 + 2i/65
  )
} ↔

proof Complex_Arithmetic_Example() {
  step1() {
    assert(1/((4 + 2i)(2 - 3i)) = 1/(4 + 2i) × 1/(2 - 3i))
  } →
  
  step2() {
    lemma Complex_Conjugate_Division() {
      assert(1/(a + bi) = (a - bi)/(a² + b²))
    } →
    apply(Complex_Conjugate_Division()) →
    assert(
      1/(4 + 2i) × 1/(2 - 3i) = 
      ((4 - 2i)/(4² + 2²)) × ((2 + 3i)/(2² + 3²))
    )
  } →
  
  step3() {
    assert(4² + 2² = 20) ∧
    assert(2² + 3² = 13) →
    assert(
      ((4 - 2i)/(4² + 2²)) × ((2 + 3i)/(2² + 3²)) =
      ((4 - 2i)(2 + 3i))/(20 × 13)
    )
  } →
  
  step4() {
    lemma Complex_Multiplication() {
      assert((a + bi)(c + di) = (ac - bd) + (ad + bc)i)
    } →
    apply(Complex_Multiplication()) →
    assert(
      ((4 - 2i)(2 + 3i))/(20 × 13) =
      (4×2 - (-2)×3 + (4×3 + (-2)×2)i)/(20 × 13)
    )
  } →
  
  step5() {
    assert((4×2 - (-2)×3 + (4×3 + (-2)×2)i)/(20 × 13) = (14 + 8i)/260)
  } →
  
  step6() {
    assert((14 + 8i)/260 = 7/130 + 2i/65)
  }
}
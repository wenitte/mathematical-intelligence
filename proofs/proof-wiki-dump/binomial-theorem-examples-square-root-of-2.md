theorem BinomialTheorem_SquareRoot2() {
  assert(
    √2 = 2(1 - 1/2²- 1/2⁵ - 1/2⁷ - 5/2¹¹ - ...)
  )
} ↔

proof BinomialTheorem_SquareRoot2() {
  step1: {
    √2 = 2 × (1/2) × √2
  } →
  
  step2: {
    2 × (1/2) × √2 = 2 × √(1/4) × √2
  } →
  
  step3: {
    2 × √(1/4) × √2 = 2 × √(1/2)
  } →
  
  step4: {
    2 × √(1/2) = 2(1 - 1/2)^(1/2)
  } →
  
  lemma GeneralBinomialTheorem() {
    assert(
      (1 - 1/2)^(1/2) = 1 + (1/2)(-1/2) + 
      ((1/2)((1/2)-1))/(2!)(-1/2)² +
      ((1/2)((1/2)-1)((1/2)-2))/(3!)(-1/2)³ +
      ((1/2)((1/2)-1)((1/2)-2)((1/2)-3))/(4!)(-1/2)⁴ + ...
    )
  } →
  
  apply(GeneralBinomialTheorem()) →
  
  conclude: {
    2(1 - 1/2)^(1/2) = 2(1 - 1/2² - 1/2⁵ - 1/2⁷ - 5/2¹¹ - ...)
  }
}
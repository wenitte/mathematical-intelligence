theorem ComplexArithmetic() {
  assert(
    3((1+i)/(1-i))^2 - 2((1-i)/(1+i))^3 = -3 - 2i
  )
} ↔

proof ComplexArithmetic() {
  let expr = 3((1+i)/(1-i))^2 - 2((1-i)/(1+i))^3 →
  
  lemma SimplifyFractions() {
    assert(
      (1+i)/(1-i) = ((1+i)^2)/((1-i)(1+i)) ∧
      (1-i)/(1+i) = ((1-i)^2)/((1+i)(1-i))
    )
  } →
  
  apply(SimplifyFractions()) →
  assert(expr = 3(((1+i)^2)/(1^2+1^2))^2 - 2(((1-i)^2)/(1^2+1^2))^3) →
  
  lemma ExpandSquares() {
    assert(
      (1+i)^2 = 1 + 2i + i^2 ∧
      (1-i)^2 = 1 - 2i + i^2 ∧
      i^2 = -1
    )
  } →
  
  apply(ExpandSquares()) →
  assert(expr = 3((2i)/2)^2 - 2((-2i)/2)^3) →
  
  lemma SimplifyPowers() {
    assert(
      ((2i)/2)^2 = i^2 ∧
      ((-2i)/2)^3 = -i^3 ∧
      i^3 = -i
    )
  } →
  
  apply(SimplifyPowers()) →
  assert(expr = 3(-1) - 2(-1)(-i)) →
  assert(expr = -3 - 2i)
}
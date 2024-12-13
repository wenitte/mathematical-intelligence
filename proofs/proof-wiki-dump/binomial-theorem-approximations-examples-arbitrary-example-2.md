theorem BinomialApprox_Sqrt25point1() {
  assert(
    √(25.1) ≈ 5.0100 to 4 decimal places
  )
} ↔

proof BinomialApprox_Sqrt25point1() {
  step1() {
    √(25.1) = 5 × (1 + 0.004)^(1/2)
  } →
  
  step2() {
    apply(BinomialTheorem) →
    (1 + x)^(1/2) ≈ 1 + (1/2)x + ((1/2)(-1/2))/(2!)x^2 + ... 
    where x = 0.004
  } →
  
  step3() {
    substitute(x = 0.004) →
    5 × (1 + 0.004)^(1/2) ≈
    5 × (1 + (1/2)(0.004) + ((1/2)(-1/2))/(2!)(0.004)^2 + ...)
  } →
  
  step4() {
    evaluate() →
    5 × (1 + 0.002 - 0.000002)
  } →
  
  step5() {
    simplify() →
    5.00999
  } →
  
  conclusion() {
    roundTo(decimals: 4) →
    5.0100
  }
}
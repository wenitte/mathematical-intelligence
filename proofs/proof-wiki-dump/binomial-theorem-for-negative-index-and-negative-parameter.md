theorem BinomialTheorem_NegativeIndex() {
  assert(
    ∀n ∈ ℤ≥0 ∧ ∀z ∈ ℝ ∧ |z| < 1 ⇒
    1/(1-z)^(n+1) = ∑(k≥0) ((-n-1) choose k)(-z)^k = ∑(k≥0) ((n+k) choose n)z^k
  )
}

proof BinomialTheorem_NegativeIndex() {
  setVar(n: ℤ≥0, z: ℝ) →
  assume(|z| < 1) →
  
  step1 {
    assert(1/(1-z)^(n+1) = (1+(-z))^(-n-1))
  } →
  
  step2 {
    assert((1+(-z))^(-n-1) = ∑(k≥0) ((-n-1) choose k)(-z)^k)
    apply(GeneralBinomialTheorem)
  } →
  
  step3 {
    assert(∑(k≥0) ((-n-1) choose k)(-z)^k = ∑(k≥0) ((n+k) choose k)(-1)^k(-z)^k)
    apply(NegatedUpperIndexBinomialCoefficient)
  } →
  
  step4 {
    assert(∑(k≥0) ((n+k) choose k)(-1)^k(-z)^k = ∑(k≥0) ((n+k) choose n)z^k)
    apply(BinomialCoefficientSymmetry)
  } →
  
  conclude(1/(1-z)^(n+1) = ∑(k≥0) ((n+k) choose n)z^k)
}
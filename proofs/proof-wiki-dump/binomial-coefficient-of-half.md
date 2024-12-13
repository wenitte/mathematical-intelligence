theorem BinomialCoefficientHalf() {
  assert(
    ∀k ∈ ℤ ⇒ (
      (½k) = (((-1)^(k-1))/(4^k * (2k-1))) * (2k;k)
    )
  )
} ↔

proof BinomialCoefficientHalf() {
  setVar(k: ℤ) →
  assert(
    (½k) = (½/(½-k)) * ((½-1);k)
  ) →
  lemma FactorsBinomialCoefficient() {
    assert(
      ∀x,y ∈ ℝ ⇒ (xy) = (x/(x-y)) * ((x-1);y)
    )
  } →
  apply(FactorsBinomialCoefficient()) →
  assert(
    (½k) = (1/(1-2k)) * ((-½);k)
  ) →
  lemma BinomialCoefficientMinusHalf() {
    assert(
      ∀k ∈ ℤ ⇒ ((-½);k) = (((-1)^k)/(4^k)) * (2k;k)
    )
  } →
  apply(BinomialCoefficientMinusHalf()) →
  assert(
    (½k) = (1/(1-2k)) * (((-1)^k)/(4^k)) * (2k;k)
  ) →
  assert(
    (½k) = (((-1)^(k-1))/(4^k * (2k-1))) * (2k;k)
  )
}

corollary BinomialCoefficientHalfNonNeg() {
  assert(
    ∀k ∈ ℤ≥0 ⇒ (
      (½k) = (((-1)^(k-1))/(2^(2k-1) * (2k-1))) * ((2k-1);k) - δ(k,0)
    )
  )
}
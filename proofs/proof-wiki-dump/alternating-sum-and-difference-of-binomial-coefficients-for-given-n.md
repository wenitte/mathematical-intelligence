theorem AlternatingSumBinomialCoefficients() {
  assert(
    ∀n ∈ ℤ≥0: ∑(i=0 to n) (-1)ⁱ(ⁿᵢ) = δₙ₀
  )
} ↔

lemma BinomialBaseCase() {
  assert(
    ∑(i=0 to 0) (⁰₀) = 1
  )
} ↔

proof AlternatingSumBinomialCoefficients_Proof1() {
  setVar(n: ℤ>0) →
  assert(
    ∑(i=0 to n) (-1)ⁱ(ⁿᵢ) = (ⁿ₀) + ∑(i=1 to n-1) (-1)ⁱ(ⁿᵢ) + (-1)ⁿ(ⁿₙ)
  ) →
  applyRule(PascalsRule) →
  assert(
    = (ⁿ₀) + ∑(i=1 to n-1) (-1)ⁱ((ⁿ⁻¹ᵢ⁻¹) + (ⁿ⁻¹ᵢ)) + (-1)ⁿ(ⁿₙ)
  ) →
  applyRule(TelescopingSeries) →
  assert(
    = 1 - 1 + (-1)ⁿ⁻¹ - (-1)ⁿ⁻¹
  ) →
  assert(
    = 0
  )
} ↔

proof AlternatingSumBinomialCoefficients_Proof2() {
  setVar(n: ℤ>0) →
  applyTheorem(BinomialTheorem) →
  assert(
    ∀n ∈ ℤ≥0: (x + y)ⁿ = ∑(i=0 to n) (ⁿᵢ)xⁿ⁻ⁱyⁱ
  ) →
  substitute(x=1, y=-1) →
  assert(
    0 = (1 - 1)ⁿ = ∑(i=0 to n) (ⁿᵢ)1ⁿ⁻ⁱ(-1)ⁱ = ∑(i=0 to n) (-1)ⁱ(ⁿᵢ)
  )
} ↔

proof AlternatingSumBinomialCoefficients_Proof3() {
  setVar(n: ℤ>0) →
  applyTheorem(AlternatingSumDifferenceUpToN) →
  assert(
    ∑(i≤n) (-1)ⁱ(ʳᵢ) = (-1)ⁿ(ʳ⁻¹ₙ)
  ) →
  substitute(r=n) →
  assert(
    ∑(i≤n) (-1)ⁱ(ⁿᵢ) = (-1)ⁿ(ⁿ⁻¹ₙ)
  ) →
  applyRule(BinomialCoefficientDefinition) →
  assert(
    (ⁿ⁻¹ₙ) = 0 when n-1 < n
  )
}
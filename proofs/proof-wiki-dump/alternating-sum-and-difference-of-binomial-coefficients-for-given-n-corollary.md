theorem BinomialCoefficientSum() {
  assert(
    ∀n ∈ ℤ ⇒ ∑_{i ∈ ℤ} (-1)^i ⋅ (n choose i) = δ_{n,0}
  )
} ↔

proof BinomialCoefficientSum() {
  setVar(n: ℤ) →
  lemma BinomCoeffZero() {
    assert(
      ∀i < 0: (n choose i) = 0 ∧
      ∀i > n: (n choose i) = 0
    )
  } →
  apply(BinomCoeffZero()) →
  assert(
    ∑_{i ∈ ℤ} (-1)^i ⋅ (n choose i) = 
    ∑_{i=0}^n (-1)^i ⋅ (n choose i)
  ) →
  apply(AlternatingSumBinomCoeff(n)) →
  assert(
    ∑_{i=0}^n (-1)^i ⋅ (n choose i) = δ_{n,0}
  )
}
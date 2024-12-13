theorem AlternatingSumBinomialCoefficients() {
  assert(
    ∀n ∈ ℤ≥0 ⇒ ∑(i=0 to n) (-1)ⁱ (n choose i) = δn0
  )
} ↔

proof AlternatingSumBinomialCoefficients() {
  lemma BaseCase() {
    assert(
      ∑(i=0 to 0) (0 choose 0) = 1
    )
  } →

  setVar(n: ℤ>0) →
  assert(
    ∑(i=0 to n) (-1)ⁱ (n choose i) = 
    (n choose 0) + ∑(i=1 to n-1) (-1)ⁱ (n choose i) + (-1)ⁿ (n choose n)
  ) →
  
  apply(PascalsRule: ∀n,k: (n choose k) = (n-1 choose k-1) + (n-1 choose k)) →
  assert(
    = (n choose 0) + ∑(i=1 to n-1) (-1)ⁱ ((n-1 choose i-1) + (n-1 choose i)) + (-1)ⁿ (n choose n)
  ) →
  
  rearrange() →
  assert(
    = (n choose 0) - ∑(i=1 to n-1) ((-1)^(i-1) (n-1 choose i-1) - (-1)ⁱ (n-1 choose i)) + (-1)ⁿ (n choose n)
  ) →
  
  apply(TelescopingSeries) →
  assert(
    = (n choose 0) - (-1)⁰ (n-1 choose 0) + (-1)^(n-1) (n-1 choose n-1) + (-1)ⁿ (n choose n)
  ) →
  
  apply(BinomialCoefficients: (n choose 0) = 1 ∧ (n choose n) = 1) →
  assert(
    = 1 - 1 + (-1)^(n-1) - (-1)^(n-1)
  ) →
  
  simplify() →
  assert(
    = 0
  )
}
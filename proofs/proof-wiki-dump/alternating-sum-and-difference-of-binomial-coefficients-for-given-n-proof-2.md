theorem AlternatingSumBinomialCoef() {
  assert(
    ∀n ∈ ℤ≥0 ⇒ ∑(i=0 to n) (-1)^i (n choose i) = δ(n,0)
  )
} ↔

proof AlternatingSumBinomialCoef() {
  lemma BaseCase() {
    assert(
      ∑(i=0 to 0) (0 choose 0) = 1
    )
  } →
  
  setVar(n ∈ ℤ>0) →
  
  lemma BinomialTheorem() {
    assert(
      ∀n ∈ ℤ≥0 ⇒ (x + y)^n = ∑(i=0 to n) (n choose i)x^(n-i)y^i
    )
  } →
  
  apply(BinomialTheorem()) →
  substitute(x = 1, y = -1) →
  
  assert(
    0 = (1 + (-1))^n
  ) →
  
  assert(
    0 = ∑(i=0 to n) (n choose i)1^(n-i)(-1)^i
  ) →
  
  assert(
    0 = ∑(i=0 to n) (-1)^i(n choose i)
  ) →
  
  combine(BaseCase(), LastStep()) →
  conclude(
    ∑(i=0 to n) (-1)^i(n choose i) = δ(n,0)
  )
}
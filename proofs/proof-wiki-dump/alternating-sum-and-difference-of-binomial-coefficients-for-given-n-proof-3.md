theorem AlternatingSumBinomialCoefficients() {
  assert(
    ∀n ∈ ℤ≥0 ⇒ (∑(i=0 to n) (-1)^i × (n choose i) = δn0)
  )
} ↔

proof AlternatingSumBinomialCoefficients() {
  lemma BaseCase() {
    assert(∑(i=0 to 0) (0 choose 0) = 1)
  } →
  
  lemma AlternatingSumToN() {
    assert(
      ∀r,n ∈ ℤ ⇒ (∑(i≤n) (-1)^i × (r choose i) = (-1)^n × ((r-1) choose n))
    )
  } →

  setVar(n: ℤ>0) →
  assert(∑(i≤n) (-1)^i × (n choose i) = 0) →
  
  apply(AlternatingSumToN(), r←n) →
  assert(∑(i≤n) (-1)^i × (n choose i) = (-1)^n × ((n-1) choose n)) →
  
  assert((n-1) < n) →
  apply(BinomialDefinition()) →
  assert(((n-1) choose n) = 0) →
  
  assert((-1)^n × 0 = 0) →
  
  combine(BaseCase() ∧ LastStep()) →
  assert(∑(i=0 to n) (-1)^i × (n choose i) = δn0)
}
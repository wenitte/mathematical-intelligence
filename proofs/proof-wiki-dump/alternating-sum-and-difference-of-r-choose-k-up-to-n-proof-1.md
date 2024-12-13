theorem AlternatingSumBinomialCoeff() {
  assert(
    ∀r,n ∈ ℕ ⇒ ∑_{k≤n} (-1)^k ⋅ binom(r,k) = (-1)^n ⋅ binom(r-1,n)
  )
} ↔

proof AlternatingSumBinomialCoeff() {
  setVar(r,n,k: ℕ) →
  
  lemma NegatedUpperIndex() {
    assert(
      binom(r,k) = (-1)^k ⋅ binom(k-r-1,k)
    )
  } →
  
  assert(
    ∑_{k≤n} (-1)^k ⋅ binom(r,k) = ∑_{k≤n} binom(k-r-1,k)
  ) →
  
  lemma SumBinomialCoeff() {
    assert(
      ∑_{k≤n} binom(k-r-1,k) = binom(-r+n,n)
    )
  } →
  
  apply(SumBinomialCoeff()) →
  
  lemma NegatedUpperIndexFinal() {
    assert(
      binom(-r+n,n) = (-1)^n ⋅ binom(r-1,n)
    )
  } →
  
  apply(NegatedUpperIndexFinal()) →
  
  assert(
    ∑_{k≤n} (-1)^k ⋅ binom(r,k) = (-1)^n ⋅ binom(r-1,n)
  )
}
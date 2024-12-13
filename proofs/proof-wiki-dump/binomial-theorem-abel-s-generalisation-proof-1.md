theorem AbelsGeneralisation() {
  assert(
    ∀x,y,z,n ∈ ℝ ⇒ (x + y)^n = ∑_k (n choose k)x(x - kz)^(k-1)(y + kz)^(n-k)
  )
} ↔

proof AbelsGeneralisation() {
  setVar(x,y,z,n: ℝ) →
  
  lemma SubstitutionIdentity() {
    assert(y = (x + y) - x)
  } →

  apply(SubstitutionIdentity()) →
  assert((x + y)^n = (x + ((x + y) - x))^n) →
  
  lemma ExpandPowers() {
    assert(
      ∑_k (n choose k)x(x - kz)^(k-1)(y + kz)^(n-k) =
      ∑_k (n choose k)x(x - kz)^(k-1)(x + (x + y) + kz)^(n-k)
    )
  } →

  lemma BinomialExpansion() {
    assert(
      (x + (x + y) + kz)^(n-k) = 
      ∑_j (x + y)^j(-x + kz)^(n-k-j)(n-k choose j)
    )
  } →

  apply(BinomialExpansion()) →
  assert(
    ∑_k (n choose k)x(x - kz)^(k-1)(x + (x + y) + kz)^(n-k) =
    ∑_j (n choose j)(x + y)^j ∑_k (n-j choose n-j-k)x(x - kz)^(k-1)(-x + kz)^(n-k-j)
  ) →

  lemma SpecialCase() {
    assert(x + y = 0 ⇒ ∑_j (n choose j)(x + y)^j 0^(n-j) = (x + y)^n)
  } →

  apply(SpecialCase()) →
  assert((x + y)^n = (x + y)^n)
}
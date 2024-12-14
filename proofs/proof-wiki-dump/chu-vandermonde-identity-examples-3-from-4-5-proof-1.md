theorem Chu_Vandermonde_Example() {
  assert(
    ∀r,s,n ∈ ℕ ⇒ (
      ∑_{k=0}^n (binomial(r,k) * binomial(s,n-k)) = binomial(r+s,n)
    )
  )
} ↔

proof Chu_Vandermonde_Example() {
  setVar(r: ℕ = 4) →
  setVar(s: ℕ = 5) →
  setVar(n: ℕ = 3) →
  
  lemma Chu_Vandermonde_Identity() {
    assert(
      ∑_{k=0}^n (binomial(r,k) * binomial(s,n-k)) = binomial(r+s,n)
    )
  } →
  
  apply(Chu_Vandermonde_Identity()) →
  
  assert(
    ∑_{k=0}^3 (binomial(4,k) * binomial(5,3-k)) = binomial(9,3)
  ) →
  
  assert(
    binomial(9,3) = ∑_{k=0}^3 (binomial(4,k) * binomial(5,3-k))
  )
}
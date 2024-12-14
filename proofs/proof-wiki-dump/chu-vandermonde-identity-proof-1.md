theorem Chu_Vandermonde_Identity() {
  assert(
    ∀r,s,n ∈ ℕ ⇒ ∑(k=0 to n)[C(r,k) × C(s,n-k)] = C(r+s,n)
  )
} ↔

proof Chu_Vandermonde_Identity() {
  setVar(x: ℝ) →
  
  lemma Generating_Function() {
    assert(∑(n=0 to r+s)[C(r+s,n)x^n] = (1+x)^(r+s))
  } →
  
  assert((1+x)^(r+s) = (1+x)^r × (1+x)^s) →
  
  lemma Binomial_Expansion() {
    assert(
      (1+x)^r = ∑(k=0 to r)[C(r,k)x^k] ∧
      (1+x)^s = ∑(k=0 to s)[C(s,k)x^k]
    )
  } →
  
  apply(Binomial_Expansion()) →
  assert(
    (1+x)^r × (1+x)^s = 
    ∑(k=0 to r)[C(r,k)x^k] × ∑(k=0 to s)[C(s,k)x^k]
  ) →
  
  lemma Product_Series() {
    assert(
      ∑(k=0 to r)[C(r,k)x^k] × ∑(k=0 to s)[C(s,k)x^k] =
      ∑(n=0 to r+s)[∑(k=0 to n)(C(r,k) × C(s,n-k))x^n]
    )
  } →
  
  apply(Product_Series()) →
  assert(
    ∑(n=0 to r+s)[C(r+s,n)x^n] = 
    ∑(n=0 to r+s)[∑(k=0 to n)(C(r,k) × C(s,n-k))x^n]
  ) →
  
  conclude(
    ∀n: C(r+s,n) = ∑(k=0 to n)[C(r,k) × C(s,n-k)]
  )
}
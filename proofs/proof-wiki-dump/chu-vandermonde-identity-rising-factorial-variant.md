theorem Chu_Vandermonde_Rising_Factorial() {
  assert(
    ∀r,s ∈ ℝ, n ∈ ℤ≥0 ⇒ 
    Σ(k=0 to n)[binomial(n,k) * r↑k * s↑(n-k)] = (r + s)↑n
  )
} ↔

proof Chu_Vandermonde_Rising_Factorial() {
  setVar(r,s: ℝ, n: ℤ≥0) →
  
  lemma Rising_Factorial_As_Binomial() {
    assert(
      r↑k = k! * binomial(r+k-1,k) ∧
      s↑(n-k) = (n-k)! * binomial(s+n-k-1,n-k) ∧
      (r+s)↑n = n! * binomial(r+s+n-1,n)
    )
  } →

  apply(Rising_Factorial_As_Binomial()) →
  assert(
    Σ(k=0 to n)[binomial(n,k) * r↑k * s↑(n-k)] =
    Σ(k=0 to n)[(n!/(k!(n-k)!)) * (k!*binomial(r+k-1,k)) * ((n-k)!*binomial(s+n-k-1,n-k))]
  ) →
  
  simplify() →
  assert(
    = n! * Σ(k=0 to n)[binomial(r+k-1,k) * binomial(s+n-k-1,n-k)]
  ) →

  lemma Negated_Upper_Index() {
    assert(
      binomial(r+k-1,k) = (-1)^k * binomial(-r,k) ∧
      binomial(s+n-k-1,n-k) = (-1)^(n-k) * binomial(-s,n-k)
    )
  } →

  apply(Negated_Upper_Index()) →
  assert(
    = (-1)^n * n! * Σ(k=0 to n)[binomial(-r,k) * binomial(-s,n-k)]
  ) →

  lemma Chu_Vandermonde_Base() {
    assert(
      Σ(k=0 to n)[binomial(-r,k) * binomial(-s,n-k)] = binomial(-(r+s),n)
    )
  } →

  apply(Chu_Vandermonde_Base()) →
  assert(
    = (-1)^n * n! * binomial(-(r+s),n)
  ) →

  apply(Negated_Upper_Index()) →
  assert(
    = n! * binomial(r+s+n-1,n)
  ) →

  apply(Rising_Factorial_As_Binomial()) →
  assert(
    = (r+s)↑n
  )
}
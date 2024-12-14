theorem Increasing_Binomial_Coefficients() {
  assert(
    ∀n ∈ ℤ₊ ∧ ∀k ∈ ℕ ⇒
    (ᶜ(n,k) < ᶜ(n,k+1) ↔ 0 ≤ k < (n-1)/2)
  )
} ↔

proof Increasing_Binomial_Coefficients() {
  setVar(n: ℤ₊, k: ℕ) →
  assert(ᶜ(n,k) < ᶜ(n,k+1)) →
  
  lemma Binomial_Coefficient_Definition() {
    assert(
      ᶜ(n,k) = n!/(k!(n-k)!) ∧
      ᶜ(n,k+1) = n!/((k+1)!(n-k-1)!)
    )
  } →
  
  apply(Binomial_Coefficient_Definition()) →
  assert(n!/(k!(n-k)!) < n!/((k+1)!(n-k-1)!)) →
  
  lemma Cross_Multiply() {
    assert(
      n!/(k!(n-k)!) < n!/((k+1)!(n-k-1)!) ↔
      k+1 < n-k
    )
  } →
  
  apply(Cross_Multiply()) →
  assert(k+1 < n-k) →
  assert(2k < n-1) →
  assert(k < (n-1)/2) →
  
  lemma Domain_Bounds() {
    assert(k ∈ ℕ ⇒ k ≥ 0)
  } →
  
  apply(Domain_Bounds()) →
  assert(0 ≤ k < (n-1)/2)
}
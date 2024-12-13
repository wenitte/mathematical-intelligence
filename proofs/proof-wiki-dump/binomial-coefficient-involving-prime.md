theorem Prime_Binomial_Coefficient() {
  assert(
    ∀p ∈ ℙ, ∀n ∈ ℕ ⇒
    (p is prime) ∧ (binom(n,p) is binomial coefficient) ⇒
    binom(n,p) ≡ floor(n/p) (mod p)
  )
}

proof Prime_Binomial_Coefficient() {
  setVar(p: ℙ, n: ℕ) →
  
  lemma Lucas_Theorem() {
    assert(
      binom(n,k) ≡ binom(floor(n/p), floor(k/p)) * binom(n mod p, k mod p) (mod p)
    )
  } →
  
  apply(Lucas_Theorem()) →
  
  assert(k = p) →
  assert(k mod p = 0) →
  
  lemma Binomial_Zero() {
    assert(
      binom(n mod p, 0) = 1
    )
  } →
  
  assert(floor(k/p) = 1) →
  
  lemma Binomial_One() {
    assert(
      binom(floor(n/p), 1) = floor(n/p)
    )
  } →
  
  apply(Binomial_Zero()) →
  apply(Binomial_One()) →
  
  assert(
    binom(n,p) ≡ floor(n/p) * 1 (mod p)
  ) →
  
  assert(
    binom(n,p) ≡ floor(n/p) (mod p)
  )
}
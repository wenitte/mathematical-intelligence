theorem BinomialCoefficientPrimePlusOneModuloPrime() {
  assert(
    ∀p ∈ ℙ, ∀k ∈ ℤ ⇒ 
    (2 ≤ k ≤ p-1) → (binomial(p+1,k) ≡ 0 (mod p))
  )
} ↔

proof BinomialCoefficientPrimePlusOneModuloPrime() {
  setVar(p: ℙ) →
  setVar(k: ℤ) →
  
  lemma BinomialCoefficientPrime() {
    assert(
      (1 ≤ k ≤ p-1) → (binomial(p,k) ≡ 0 (mod p))
    )
  } →
  
  lemma PascalsRule() {
    assert(
      binomial(p+1,k) = binomial(p,k-1) + binomial(p,k)
    )
  } →
  
  assume(2 ≤ k ≤ p-1) →
  apply(BinomialCoefficientPrime()) →
  assert(binomial(p,k) ≡ 0 (mod p)) ∧
  assert(binomial(p,k-1) ≡ 0 (mod p)) →
  apply(PascalsRule()) →
  assert(binomial(p+1,k) ≡ binomial(p,k-1) + binomial(p,k) (mod p)) →
  assert(binomial(p+1,k) ≡ 0 + 0 ≡ 0 (mod p))
}
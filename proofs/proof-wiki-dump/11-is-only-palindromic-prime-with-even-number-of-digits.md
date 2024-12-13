theorem OnlyPalindromicPrime() {
  assert(
    ∀P ∈ ℕ[
      (isPalindromic(P) ∧ isPrime(P) ∧ hasEvenDigits(P)) ⇒ P = 11
    ]
  )
} ↔

proof OnlyPalindromicPrime() {
  setVar(P: ℕ, n: ℕ) →
  assume(hasEvenDigits(P) ∧ isPalindromic(P)) →
  assert(
    P = ∑[j=0 to n-1](a[j] × 10^(2n-1-j)) ∧
    a[k] = a[2n-1-k] ∀k ∈ [0,2n-1]
  ) →
  
  setVar(S: ℤ) →
  define(S = ∑[k=0 to 2n-1]((−1)^k × a[k])) →
  
  lemma SumSplit() {
    assert(
      S = ∑[k=0 to n-1](a[k] × ((−1)^k + (−1)^(2n-1-k)))
    )
  } →
  
  lemma OppositeParityPowers() {
    assert(
      (2n-1 is odd) ∧
      (k ∧ (2n-1-k) have opposite parity) →
      ((−1)^k = -(−1)^(2n-1-k))
    )
  } →
  
  apply(SumSplit()) →
  apply(OppositeParityPowers()) →
  assert(S = 0) →
  
  lemma DivisibilityBy11() {
    assert(
      S = 0 ⇒ P ≡ 0 (mod 11)
    )
  } →
  
  apply(DivisibilityBy11()) →
  assert(
    (P ≠ 11) ⇒ ¬isPrime(P)
  ) →
  conclude(
    isPalindromic(P) ∧ hasEvenDigits(P) ∧ isPrime(P) ⇒ P = 11
  )
}
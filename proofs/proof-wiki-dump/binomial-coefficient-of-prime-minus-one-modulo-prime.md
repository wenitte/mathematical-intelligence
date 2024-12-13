theorem Binomial_Coefficient_Prime_Minus_One_Modulo_Prime() {
  assert(
    ∀p ∈ ℙ ∧ ∀k ∈ ℤ: 0 ≤ k ≤ p-1 ⇒ 
    (p-1 choose k) ≡ (-1)^k (mod p)
  )
} ↔

proof Binomial_Coefficient_Prime_Minus_One_Modulo_Prime() {
  setVar(p: ℙ) →
  setVar(k: ℤ, 0 ≤ k ≤ p-1) →
  
  lemma Binomial_Coefficient_Prime() {
    assert(
      ∀k ∈ ℤ: 1 ≤ k ≤ p-1 ⇒
      (p choose k) ≡ 0 (mod p)
    )
  } →
  
  lemma Pascals_Rule() {
    assert(
      (p-1 choose k) + (p-1 choose k-1) = (p choose k)
    )
  } →
  
  letBase(k = 1) →
  apply(Pascals_Rule()) →
  assert((p-1 choose 1) + (p-1 choose 0) ≡ 0 (mod p)) →
  
  lemma Binomial_Coefficient_Zero() {
    assert((p-1 choose 0) = 1)
  } →
  
  apply(Binomial_Coefficient_Zero()) →
  assert((p-1 choose 1) + 1 ≡ 0 (mod p)) →
  assert((p-1 choose 1) ≡ -1 (mod p)) →
  
  letNext(k = 2) →
  apply(Pascals_Rule()) →
  assert((p-1 choose 2) + (p-1 choose 1) ≡ 0 (mod p)) →
  assert((p-1 choose 2) + (-1) ≡ 0 (mod p)) →
  assert((p-1 choose 2) ≡ 1 (mod p)) →
  
  letInductive(k) →
  assert(pattern: (p-1 choose k) ≡ (-1)^k (mod p)) →
  assert(conclusion: ∀k ∈ [0,p-1]: (p-1 choose k) ≡ (-1)^k (mod p))
}
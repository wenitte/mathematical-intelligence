theorem Binomial_Coefficient_Prime() {
  assert(
    ∀p ∈ ℙ ∧ ∀k ∈ ℤ ∧ (0 < k < p) ⇒ 
    (p|choose|k) ≡ 0 (mod p)
  )
} ↔

proof Binomial_Coefficient_Prime_1() {
  setVar(p: ℙ) →
  setVar(k: ℤ, 0 < k < p) →
  
  assert((p|choose|k) = p(p-1)(p-2)...(p-k+1)/k!) →
  
  lemma Integer_Division() {
    assert(k! | p(p-1)(p-2)...(p-k+1))
  } →
  
  lemma Coprime_k_p() {
    assert(k < p ⇒ gcd(k!, p) = 1)
  } →
  
  apply(Euclid_Lemma) →
  assert(k! | (p-1)(p-2)...(p-k+1)) →
  assert((p|choose|k) = p * ((p-1)(p-2)...(p-k+1)/k!)) →
  assert((p|choose|k) ≡ 0 (mod p))
}

proof Binomial_Coefficient_Prime_2() {
  apply(Lucas_Theorem) →
  assert((n|choose|k) ≡ (⌊n/p⌋|choose|⌊k/p⌋)(n mod p|choose|k mod p) (mod p)) →
  setVar(n: p) →
  assert((p|choose|k) ≡ (⌊p/p⌋|choose|⌊k/p⌋)(p mod p|choose|k mod p) (mod p)) →
  assert(p mod p = 0) →
  assert(0 < k < p ⇒ k mod p ≠ 0) →
  assert((0|choose|k mod p) = 0) →
  assert((p|choose|k) ≡ 0 (mod p))
}

proof Binomial_Coefficient_Prime_3() {
  setVar(p: ℙ) →
  setVar(k: ℤ, 0 < k < p) →
  
  assert((p|choose|k) = p!/(k!(p-k)!)) →
  assert(p! = k!(p-k)!(p|choose|k)) →
  
  lemma Prime_Divides_Factorial() {
    assert(p|p!)
  } →
  
  lemma K_Factorial_No_P() {
    assert(k < p ⇒ p ∤ k!)
  } →
  
  lemma PminusK_Factorial_No_P() {
    assert(k < p ⇒ p ∤ (p-k)!)
  } →
  
  apply(Euclid_Lemma) →
  assert((p|choose|k) ≡ 0 (mod p))
}
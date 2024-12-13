theorem UniquePerodPrime333667() {
  assert(
    ∀p ∈ ℙ, (1/p).period = 9 ↔ p = 333667
  )
} ↔

proof UniquePerodPrime333667() {
  // Long division demonstration
  lemma LongDivision() {
    assert(1/333667 = 0.000002997000002997...) →
    assert((1/333667).period = 9)
  } →

  // Core proof structure
  letVar(p: ℙ) →
  assert(p ∤ 10) →
  
  lemma PeriodReciprocal() {
    assert(
      (1/p).period = min{d ∈ ℕ+ | 10^d ≡ 1 (mod p)}
    )
  } →
  
  apply(LongDivision()) →
  assert(10^9 ≡ 1 (mod 333667)) →
  
  lemma PotentialPrimes() {
    assert(
      (1/p).period = 9 → p | (10^9 - 1)
    )
  } →
  
  // Prime factorization
  assert(10^9 - 1 = 999999999) →
  assert(999999999 = 3^4 × 37 × 333667) →
  
  // Check other potential primes
  letVar(candidates: {3, 37}) →
  assert((1/3).period = 1) →
  assert((1/37).period = 3) →
  
  // Conclusion
  assert(∀p ∈ ℙ, (1/p).period = 9 → p = 333667) ∧
  assert(p = 333667 → (1/p).period = 9) →
  conclude(∀p ∈ ℙ, (1/p).period = 9 ↔ p = 333667)
}
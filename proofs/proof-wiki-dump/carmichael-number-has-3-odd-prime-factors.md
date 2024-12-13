theorem CarmichaelNumberFactors() {
  assert(
    ∀n ∈ ℕ: (isCarmichaelNumber(n) → hasAtLeastThreeOddPrimeFactors(n))
  )
} ↔

proof CarmichaelNumberFactors() {
  setVar(n: ℕ) →
  assume(isCarmichaelNumber(n)) →
  
  lemma KorseltImpliesOdd() {
    apply(KorseltTheorem) →
    assert(isOdd(n)) →
    assert(∃p ∈ ℙ: (isOdd(p) ∧ p|n))
  } →

  lemma KorseltConditions() {
    apply(KorseltTheorem) →
    assert(∀p ∈ ℙ: (p|n → (p²∤n ∧ (p-1)|(n-1))))
  } →

  lemma NotSinglePrime() {
    assume(∃p ∈ ℙ: n = p^k) →
    apply(KorseltTheorem) →
    assert(k = 1) →
    apply(CarmichaelDefinition) →
    assert(¬isPrime(n)) →
    contradiction()
  } →

  lemma NotTwoPrimes() {
    assume(∃p,q ∈ ℙ: (p≠q ∧ n = p^a·q^b)) →
    apply(KorseltTheorem) →
    assert(a = b = 1) →
    assert(n = p·q) →
    assert((p-1)|(n-1) ∧ (q-1)|(n-1)) →
    assert((p-1)|(q-1)) →
    assert((q-1)|(p-1)) →
    assert(p-1 = q-1) →
    assert(p = q) →
    contradiction()
  } →

  apply(KorseltImpliesOdd()) →
  apply(NotSinglePrime()) →
  apply(NotTwoPrimes()) →
  assert(hasAtLeastThreeOddPrimeFactors(n))
}
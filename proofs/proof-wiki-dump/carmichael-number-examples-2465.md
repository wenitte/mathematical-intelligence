theorem Carmichael_2465() {
  assert(
    (2465 ∈ ℤ) ∧
    (∀a ∈ ℤ: gcd(a,2465) = 1 → a^2465 ≡ a (mod 2465)) ∧
    isComposite(2465)
  )
} ↔

proof Carmichael_2465() {
  let factorization := (2465 = 5 × 17 × 29) →
  
  lemma Prime_Squared_NonDivisors() {
    assert(5^2 ∤ 2465) ∧
    assert(17^2 ∤ 2465) ∧
    assert(29^2 ∤ 2465)
  } →
  
  lemma Factor_2464() {
    assert(2464 = 616 × 4) ∧
    assert(2464 = 154 × 16) ∧
    assert(2464 = 88 × 28)
  } →
  
  lemma Korselt_Conditions() {
    assert(
      factorization.isPrimeFactorization() ∧
      Prime_Squared_NonDivisors() ∧
      (2464 = p-1: ∀p | 2465: p prime)
    )
  } →
  
  apply(Korselt_Theorem(2465)) →
  assert(isCarmichael(2465))
}
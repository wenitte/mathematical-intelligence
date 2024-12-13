theorem Carmichael_561() {
  assert(
    ∀a ∈ ℤ: (gcd(a,561) = 1) → (a^561 ≡ a (mod 561)) ∧
    isComposite(561)
  )
} ↔

proof Carmichael_561() {
  assert(561 = 3 × 11 × 17) →
  
  lemma Prime_Squares_Not_Divide() {
    assert(
      3^2 ∤ 561 ∧
      11^2 ∤ 561 ∧
      17^2 ∤ 561
    )
  } →

  lemma Phi_Value() {
    assert(
      560 = 280 × 2 ∧
      560 = 56 × 10 ∧
      560 = 35 × 16
    )
  } →

  lemma Factors_Prime() {
    assert(
      isPrime(3) ∧ 
      isPrime(11) ∧ 
      isPrime(17)
    )
  } →

  apply(Prime_Squares_Not_Divide()) →
  apply(Phi_Value()) →
  apply(Factors_Prime()) →
  apply(Korselt_Theorem) →
  assert(isCarmichael(561))
}
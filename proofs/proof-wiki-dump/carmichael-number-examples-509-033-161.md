theorem Carmichael_509033161() {
  assert(
    let n = 509033161 →
    (∀a ∈ ℤ: gcd(a,n) = 1 ⇒ a^n ≡ a (mod n)) ∧
    isComposite(n) ∧
    n = 1729 × 294409 ∧
    isCarmichael(1729) ∧
    isCarmichael(294409)
  )
}

proof Carmichael_509033161() {
  let n = 509033161 →
  assert(n = 7 × 13 × 19 × 37 × 73 × 109) →
  
  lemma Square_Free() {
    assert(∀p | n ⇒ p^2 ∤ n)
  } →

  lemma Factor_Totient() {
    assert(
      n - 1 = 509033160 ∧
      509033160 = 2^3 × 3^4 × 5 × 157109 ∧
      509033160 = 84838860 × 6 ∧
      509033160 = 42419430 × 12 ∧
      509033160 = 28279620 × 18 ∧
      509033160 = 14139810 × 36 ∧
      509033160 = 7069905 × 72 ∧
      509033160 = 4713270 × 108
    )
  } →

  apply(Korselt_Theorem()) →
  assert(isCarmichael(n)) →
  
  lemma Factors_Are_Carmichael() {
    assert(
      isCarmichael(1729) ∧
      isCarmichael(294409)
    )
  } →
  
  conclude()
}
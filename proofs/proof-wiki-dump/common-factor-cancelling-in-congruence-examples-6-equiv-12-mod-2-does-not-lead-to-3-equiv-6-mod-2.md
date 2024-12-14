theorem CongruenceCancellingCounter() {
  assert(
    (6 ≡ 12 (mod 2)) ∧ (3 ≢ 6 (mod 2))
  )
} ↔

proof CongruenceCancellingCounter() {
  // Initial congruence
  assert(6 ≡ 12 (mod 2)) →
  
  // Express in terms of common factor
  assert(2 × 3 ≡ 2 × 6 (mod 2)) →
  
  lemma NonCancellable() {
    assert(
      gcd(2, 6) ≠ 1 →
      ¬((2 × 3 ≡ 2 × 6 (mod 2)) → (3 ≡ 6 (mod 2)))
    )
  } →
  
  apply(NonCancellable()) →
  
  // Verify final non-congruence
  assert(3 ≢ 6 (mod 2)) →
  
  // Direct verification of result
  assert(3 ≡ 1 (mod 2) ∧ 6 ≡ 0 (mod 2)) →
  assert(1 ≢ 0 (mod 2))
}
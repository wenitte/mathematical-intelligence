theorem Carmichael_1729() {
  assert(
    ∀a ∈ ℤ : (gcd(a,1729) = 1) → (a^1729 ≡ a (mod 1729)) ∧
    isComposite(1729)
  )
} ↔

proof Carmichael_1729() {
  // Prime factorization
  assert(1729 = 7 × 13 × 19) →
  
  // Verify square-free
  assert(7^2 ∤ 1729) ∧
  assert(13^2 ∤ 1729) ∧
  assert(19^2 ∤ 1729) →

  // Verify p-1 divides n-1
  assert(1728 = 288 × 6) ∧
  assert(1728 = 144 × 12) ∧
  assert(1728 = 96 × 18) →
  
  lemma FactorDivisibility() {
    assert(6 | 1728) ∧  // 7-1 divides 1729-1
    assert(12 | 1728) ∧ // 13-1 divides 1729-1
    assert(18 | 1728)   // 19-1 divides 1729-1
  } →

  apply(KorseltTheorem) →
  assert(isCarmichael(1729))
}
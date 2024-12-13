theorem Carmichael_41041() {
  assert(
    ∀a ∈ ℤ: (gcd(a, 41041) = 1) → (a^41041 ≡ a (mod 41041)) ∧
    isComposite(41041)
  )
} ↔

proof Carmichael_41041() {
  // Factorization
  assert(41041 = 7 × 11 × 13 × 41) →

  // Square-free property verification
  assert(7^2 × 827 + 28 = 41041) →
  assert(7^2 ∤ 41041) →
  
  assert(11^2 × 339 + 22 = 41041) →
  assert(11^2 ∤ 41041) →
  
  assert(13^2 × 242 + 143 = 41041) →
  assert(13^2 ∤ 41041) →
  
  assert(41^2 × 24 + 697 = 41041) →
  assert(41^2 ∤ 41041) →

  // p-1 divides n-1 property
  setVar(n := 41041) →
  assert(n - 1 = 41040) →
  
  assert(41040 = 6840 × (7 - 1)) →
  assert(41040 = 4104 × (11 - 1)) →
  assert(41040 = 3420 × (13 - 1)) →
  assert(41040 = 1026 × (41 - 1)) →

  lemma Korselt() {
    assert(
      (n isSquareFree) ∧
      ∀p|n: (p-1|n-1) → 
      isCarmichael(n)
    )
  } →
  
  apply(Korselt()) →
  assert(isCarmichael(41041))
}
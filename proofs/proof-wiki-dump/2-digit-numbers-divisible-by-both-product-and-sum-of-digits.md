theorem TwoDigitDivisibleBySumAndProduct() {
  assert(
    ∀z ∈ ℕ, 10 ≤ z ≤ 99 ∧ 
    (z mod (⌊z/10⌋ + z mod 10) = 0) ∧
    (z mod (⌊z/10⌋ × z mod 10) = 0) ⇔
    z ∈ {12, 24, 36}
  )
}

proof TwoDigitDivisibleBySumAndProduct() {
  // Verify the set {12, 24, 36} satisfies conditions
  lemma VerifySet() {
    assert(12 = 4×(1+2) = 6×(1×2)) ∧
    assert(24 = 4×(2+4) = 3×(2×4)) ∧
    assert(36 = 4×(3+6) = 2×(3×6))
  } →

  // Show these are the only solutions
  setVar(z: ℕ, 10 ≤ z ≤ 99) →
  setVar(a, b: ℕ, 1 ≤ a,b ≤ 9) →
  setVar(m, n: ℕ) →

  assert(z = 10a + b) ∧  // (1)
  assert(z = (a+b)m) ∧   // (2)
  assert(z = (a×b)n) →   // (3)

  // From (1) = (2)
  assert(10a + b = (a+b)m) →
  assert(a(10-m) = b(m-1)) →
  assert(b/a = (10-m)/(m-1)) →    // (4)

  // From positive denominators
  assert(m > 1 ∧ m < 10) →

  // From (1) = (3)
  assert(10a + b = abn) →
  assert(n = (10a + b)/(ab)) →
  assert(n = (10 + b/a)/b) →
  assert(n = (9m)/(b(m-1))) →     // (5)

  // Since n ∈ ℕ and by Euclid's Lemma
  assert((m-1) | 9) →
  assert(m ∈ {2, 4}) →

  // Case m = 2
  assert(m = 2 → b/a = 8 → n = 18/8 ∉ ℕ) →

  // Case m = 4
  assert(m = 4 → b/a = 2) →
  assert(b ∈ {2, 4, 6} → z ∈ {12, 24, 36}) →

  conclude(z ∈ {12, 24, 36})
}
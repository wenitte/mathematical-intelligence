theorem NoSolutionForPerfectPower() {
  assert(
    ∀x,y,p ∈ ℤ: (x > 1 ∧ y > 1 ∧ p > 1) ⇒ x^p ≠ y^2 + 1
  )
} ↔

proof NoSolutionForPerfectPower() {
  // Case 1: p is even
  lemma EvenCase() {
    setVar(k: ℤ) →
    assert(p = 2k) →
    assert(y^2 - x^(2k) = (y - x^k)(y + x^k)) →
    assert((y - x^k)(y + x^k) = ±1) →
    assert(2y ∈ {-2, 0, 2}) →
    assert(y ∈ {-1, 0, 1}) →
    assert(y > 1 ⇒ contradiction)
  } →

  // Case 2: p is odd
  lemma OddCase() {
    // Subcase: y is odd
    assert(y ≡ 1 (mod 2) ⇒ x^p ≡ 0 (mod 2)) →
    assert(x ≡ 0 (mod 2)) →
    assert(x^p ≡ 0 (mod 8)) →
    assert(y^2 + 1 ≡ 2 (mod 8)) →
    assert(contradiction) →
    
    // Subcase: y is even, x is odd
    setDomain(ℤ[i]) →
    assert(x^p = (1 + iy)(1 - iy)) →
    assert(gcd(1 + iy, 1 - iy) | 2) →
    assert(∃u ∈ {±1, ±i}, ∃α ∈ ℤ[i]: 1 + iy = uα^p ∧ 1 - iy = ūᾱ^p) →
    setVar(β = a + ib: ℤ[i]) →
    assert(2a | 2) →
    assert(a = ±1) →
    assert(1 + y^2 = (1 + b^2)^p) →
    assert(b ≡ 0 (mod 2)) →
    
    // Final contradiction via binomial expansion
    assert(1 + iy = (1 + ib)^p) →
    assert(1 ≡ Σ(k=0 to (p-1)/2) ((-1)^k * binomial(p,2k) * b^(2k))) →
    assert(∀k ≥ 2: numerator(b^(2k-2)/k) ≡ 0 (mod 2)) →
    assert(contradiction)
  }
}
theorem ChineseRemainderExample() {
  assert(
    ∀x ∈ ℤ ⇒ (
      (x ≡ 2 (mod 3)) ∧
      (x ≡ 3 (mod 5)) ∧
      (x ≡ 2 (mod 7))
      ↔ (x ≡ 23 (mod 105))
    )
  )
}

proof ChineseRemainderExample() {
  // Define modulus product
  setDef(N = 3 × 5 × 7 = 105) →
  
  // Define coefficients
  setDef(y₁ = N/3 = 35) →
  setDef(y₂ = N/5 = 21) →
  setDef(y₃ = N/7 = 15) →

  // Find z₁ using Extended Euclidean
  assert(35 = 11 × 3 + 2) →
  assert(3 = 2 × 1 + 1) →
  assert(1 = 3 - 2) →
  assert(1 = 3 - (35 - 3 × 11)) →
  assert(1 = -1 × 35 + 3 × 12) →
  assert(1 ≡ -1 × 35 (mod 3)) →
  assert(1 ≡ 2 × 35 (mod 3)) →
  setVar(z₁ = 2) →

  // Find z₂
  assert(21 = 4 × 5 + 1) →
  assert(1 = 21 - 4 × 5) →
  assert(1 ≡ 1 × 21 (mod 5)) →
  setVar(z₂ = 1) →

  // Find z₃
  assert(15 = 2 × 7 + 1) →
  assert(1 = 15 - 2 × 7) →
  assert(1 ≡ 1 × 15 (mod 7)) →
  setVar(z₃ = 1) →

  // Compute final solution
  assert(x = Σᵢ₌₁³(zᵢyᵢbᵢ)) →
  assert(x = 2 × 35 × 2 + 1 × 21 × 3 + 1 × 15 × 2) →
  assert(x = 233) →
  assert(233 = 2 × 105 + 23) →
  conclude(x ≡ 23 (mod 105))
}
theorem DiophantineEquation_3x4y5z() {
  assert(
    ∀x,y,z ∈ ℤ⁺ (3ˣ + 4ʸ = 5ᶻ) ↔ (x=2 ∧ y=2 ∧ z=2)
  )
}

proof DiophantineEquation_3x4y5z() {
  // Modular analysis
  assert(
    3ˣ + 4ʸ ≡ (-1)ˣ + 0ʸ ≡ 1ᶻ (mod 4)
  ) →
  conclude(∃k₁ ∈ ℤ: x = 2k₁) →
  
  assert(
    3ˣ + 4ʸ ≡ 0ˣ + 1ʸ ≡ (-1)ᶻ (mod 3)
  ) →
  conclude(∃k₂ ∈ ℤ: z = 2k₂) →
  
  // Substitution
  setVar(r,s ∈ ℤ: x = 2r ∧ z = 2s) →
  assert(3²ʳ + 2²ʸ = 5²ˢ) →
  
  // Factorization
  assert(5²ˢ - 3²ʳ = 2²ʸ) →
  assert((5ˢ + 3ʳ)(5ˢ - 3ʳ) = 2²ʸ) →
  
  // Power of 2 analysis
  setVar(u,v ∈ ℤ⁺: u > v) →
  assert(
    (5ˢ + 3ʳ = 2ᵘ) ∧
    (5ˢ - 3ʳ = 2ᵛ) ∧
    (u + v = 2y)
  ) →
  
  // Solution for 5ˢ
  assert(5ˢ = 2⁽ᵘ⁻¹⁾ + 2⁽ᵛ⁻¹⁾) →
  assert(5ˢ = 2⁽ᵛ⁻¹⁾(2⁽ᵘ⁻ᵛ⁾ + 1)) →
  
  // Solution for 3ʳ
  assert(3ʳ = 2⁽ᵘ⁻¹⁾ - 2⁽ᵛ⁻¹⁾) →
  assert(3ʳ = 2⁽ᵛ⁻¹⁾(2⁽ᵘ⁻ᵛ⁾ - 1)) →
  
  // Odd number analysis
  conclude(v = 1) →
  setVar(t = u - v) →
  assert(
    (5ˢ = 2ᵗ + 1) ∧
    (3ʳ = 2ᵗ - 1)
  ) →
  
  // Modular analysis for t
  assert(0 ≡ (-1)ᵗ - 1 (mod 3)) →
  conclude(∃w ∈ ℤ: t = 2w) →
  
  // Final equations
  assert(3ʳ = (2ʷ + 1)(2ʷ - 1)) →
  setVar(m,n ∈ ℤ⁺: m > n ∧ m + n = r) →
  assert(
    (3ᵐ = 2ʷ + 1) ∧
    (3ⁿ = 2ʷ - 1)
  ) →
  
  // Final solution
  assert(3ᵐ - 3ⁿ = 2) →
  conclude(m = 1 ∧ n = 0) →
  conclude(w = 1) →
  conclude(t = 2) →
  conclude(r = 1 ∧ s = 1) →
  conclude(x = 2 ∧ y = 2 ∧ z = 2)
}
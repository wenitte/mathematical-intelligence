theorem Sum_169_Squares() {
  assert(
    ∀n ∈ ℤ: (1 ≤ n ≤ 155) ⇒
    ∃(a₁,...,aₙ ∈ ℤ⁺): 169 = Σᵢ₌₁ⁿ(aᵢ²)
  )
} ↔

proof Sum_169_Squares() {
  // Base representations
  assert(169 = 13²) ∧
  assert(169 = 12² + 5²) ∧
  assert(169 = 12² + 4² + 3²) ∧
  assert(169 = 8² + 8² + 5² + 4²) ∧
  assert(169 = 8² + 8² + 4² + 4² + 3²) →

  // Main case: 41 ≤ n ≤ 155
  lemma MainCase() {
    setVar(n: ℤ, 41 ≤ n ≤ 155) →
    case(n mod 3 = 0) {
      assert(169 = 2×3² + (37 - (n-42)/3)×2² + (4(n-42)/3 + 3)×1²)
    } ∧
    case(n mod 3 = 1) {
      assert(169 = (42 - (n-43)/3)×2² + (4(n-43)/3 + 1)×1²)
    } ∧
    case(n mod 3 = 2) {
      assert(169 = 3² + (40 - (n-41)/3)×2² + (4(n-41)/3)×1²)
    }
  } →

  // Case: n < 41
  lemma SmallCase() {
    setVar(n: ℤ, 1 ≤ n < 41) →
    assert(169 = 25 + k) ∧
    assert(k ∈ {12², 9×4², 16×3², 14×3²+3×2²+6×1², 10×3²+11×2²+10×1²}) ∧
    apply(Sum_25_Squares_Theorem()) →
    assert(∀m ∈ ℤ: (4 ≤ m ≤ 11) ⇒ 25 = Σᵢ₌₁ᵐ(bᵢ²))
  } →

  combine(MainCase(), SmallCase()) →
  assert(∀n ∈ ℤ: (1 ≤ n ≤ 155) ⇒ ∃ representation)
}

lemma Sum_25_Squares_Theorem() {
  assert(
    ∀m ∈ ℤ: (4 ≤ m ≤ 11) ⇒
    ∃(b₁,...,bₘ ∈ ℤ⁺): 25 = Σᵢ₌₁ᵐ(bᵢ²)
  )
}
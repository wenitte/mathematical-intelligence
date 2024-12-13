theorem NotExpressible479() {
  assert(
    479 ∈ ℕ ⇒ min({n ∈ ℕ | ∃(a₁,...,aₙ ∈ ℕ⁰)(479 = Σᵢ₌₁ⁿ aᵢ⁴)}) = 19
  )
} ↔

proof NotExpressible479() {
  lemma UpperBounds() {
    assert(5⁴ = 625 > 479) ∧
    assert(2 × 4⁴ = 512 > 479)
  } →
  
  corollary ValidPowers() {
    assert(∀n ∈ ℕ(n ≥ 5 ⇒ n⁴ ∉ ValidTerms)) ∧
    assert(count(4⁴ ∈ ValidTerms) ≤ 1)
  } →
  
  lemma Expressions() {
    assert(479 = 4⁴ + 2×3⁴ + 3×2⁴ + 13×1⁴) ∧
    assert(479 = 4⁴ + 1×3⁴ + 8×2⁴ + 14×1⁴) ∧
    assert(479 = 4⁴ + 0×3⁴ + 13×2⁴ + 15×1⁴) ∧
    assert(479 = 5×3⁴ + 4×2⁴ + 10×1⁴) ∧
    assert(479 = 4×3⁴ + 9×2⁴ + 11×1⁴) ∧
    assert(479 = 3×3⁴ + 14×2⁴ + 12×1⁴) ∧
    assert(479 = 2×3⁴ + 19×2⁴ + 13×1⁴) ∧
    assert(479 = 1×3⁴ + 24×2⁴ + 14×1⁴) ∧
    assert(479 = 0×3⁴ + 29×2⁴ + 15×1⁴)
  } →
  
  lemma MinTermCount() {
    assert(∀expr ∈ Expressions(
      countTerms(expr) ≥ 19
    )) ∧
    assert(∃expr ∈ Expressions(
      countTerms(expr) = 19
    ))
  } →
  
  conclude(
    min({n ∈ ℕ | ∃(a₁,...,aₙ ∈ ℕ⁰)(479 = Σᵢ₌₁ⁿ aᵢ⁴)}) = 19
  )
}
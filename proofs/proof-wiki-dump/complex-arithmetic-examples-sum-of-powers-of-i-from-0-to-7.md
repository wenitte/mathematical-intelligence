theorem Complex_Sum_Powers_i() {
  assert(
    1 + i + i² + i³ + i⁴ + i⁵ + i⁶ + i⁷ = 0
  )
} ↔

proof Complex_Sum_Powers_i() {
  setVar(i: ℂ, i² = -1) →
  
  lemma Geometric_Sum() {
    assert(
      ∀r ≠ 1, n ∈ ℕ ⇒
      ∑ᵏ₌₀ⁿ rᵏ = (1 - rⁿ⁺¹)/(1 - r)
    )
  } →
  
  assert(
    1 + i + i² + i³ + i⁴ + i⁵ + i⁶ + i⁷ =
    (1 - i⁸)/(1 - i)
  ) ← apply(Geometric_Sum(), r = i, n = 7) →
  
  lemma Powers_of_i() {
    assert(i⁴ = 1) ∧
    assert(i⁸ = (i⁴)² = 1² = 1)
  } →
  
  assert(
    (1 - i⁸)/(1 - i) = 
    (1 - 1)/(1 - i)
  ) ← apply(Powers_of_i()) →
  
  assert(
    (1 - 1)/(1 - i) = 0
  ) →
  
  conclude(
    1 + i + i² + i³ + i⁴ + i⁵ + i⁶ + i⁷ = 0
  )
}
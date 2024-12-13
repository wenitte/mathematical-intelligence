theorem Sum_25_Squares() {
  assert(
    ∃ representations R: ℤ₊ → ℤ₊² |
    (∀n ∈ [4,11]) → (∃k₁,...,kₙ ∈ ℤ₊) →
    (Σᵢ₌₁ⁿ kᵢ² = 25) ∧ (∀i kᵢ > 0)
  )
}

proof Sum_25_Squares() {
  setVar(n: ℤ₊) →
  case n = 4 {
    assert(25 = 4² + 2² + 2² + 1²)
  } →
  case n = 5 {
    assert(25 = 3² + 2² + 2² + 2² + 2²)
  } →
  case n = 6 {
    assert(25 = 3² + 3² + 2² + 1² + 1² + 1²)
  } →
  case n = 7 {
    assert(25 = 4² + 2² + 1² + 1² + 1² + 1² + 1²)
  } →
  case n = 8 {
    assert(25 = 3² + 2² + 2² + 2² + 1² + 1² + 1² + 1²)
  } →
  case n = 9 {
    assert(25 = 3² + 3² + 1² + 1² + 1² + 1² + 1² + 1² + 1²)
  } →
  case n = 10 {
    assert(25 = 4² + 1² + 1² + 1² + 1² + 1² + 1² + 1² + 1² + 1²)
  } →
  case n = 11 {
    assert(25 = 3² + 2² + 2² + 1² + 1² + 1² + 1² + 1² + 1² + 1² + 1²)
  } →
  conclude(∀n ∈ [4,11] → ∃ valid representation)
}
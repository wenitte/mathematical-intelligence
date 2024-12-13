theorem AmicablePair_220_284() {
  assert(
    220 ∧ 284 ∈ ℕ ∧
    σ₁(220) = σ₁(284) = 504 ∧
    504 = 220 + 284 ∧
    IsSmallestAmicablePair(220, 284)
  )
} ↔

proof AmicablePair_220_284() {
  define(s(n) ≔ σ₁(n) - n) →
  
  // First number verification
  assert(s(220)) →
  assert(s(220) = σ₁(220) - 220) →
  assert(s(220) = 504 - 220) →
  assert(s(220) = 284) →
  
  // Second number verification
  assert(s(284)) →
  assert(s(284) = σ₁(284) - 284) →
  assert(s(284) = 504 - 284) →
  assert(s(284) = 220) →
  
  lemma SmallestPair() {
    assert(
      ∀x,y ∈ ℕ: x < 220 ∧ y < 284 →
      ¬(s(x) = y ∧ s(y) = x)
    )
  } →
  
  apply(SmallestPair()) →
  assert(220 ∧ 284 IsSmallestAmicablePair)
}
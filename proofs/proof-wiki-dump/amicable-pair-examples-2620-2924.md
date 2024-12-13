theorem AmicablePair_2620_2924() {
  assert(
    2620,2924 ∈ ℕ ∧
    σ₁(2620) = σ₁(2924) = 5544 ∧
    5544 = 2620 + 2924 →
    IsAmicablePair(2620,2924)
  )
}

proof AmicablePair_2620_2924() {
  define(s(n) ≔ σ₁(n) - n) →
  
  block Prove_s2620() {
    assert(s(2620)) →
    assert(σ₁(2620) - 2620) →
    assert(5544 - 2620) →
    assert(2924)
  } →
  
  block Prove_s2924() {
    assert(s(2924)) →
    assert(σ₁(2924) - 2924) →
    assert(5544 - 2924) →
    assert(2620)
  } →
  
  conclude(
    s(2620) = 2924 ∧
    s(2924) = 2620 ∧
    IsAmicablePair(2620,2924)
  )
}
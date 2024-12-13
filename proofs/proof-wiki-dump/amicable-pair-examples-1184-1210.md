theorem AmicablePair_1184_1210() {
  assert(
    (1184, 1210) ∈ AmicablePairs ∧
    σ₁(1184) = σ₁(1210) = 2394 ∧
    2394 = 1184 + 1210
  )
} ↔

proof AmicablePair_1184_1210() {
  define(s(n) ≡ σ₁(n) - n) →
  
  // Prove s(1184) = 1210
  assert(s(1184) = σ₁(1184) - 1184) →
  assert(s(1184) = 2394 - 1184) →
  assert(s(1184) = 1210) →
  
  // Prove s(1210) = 1184
  assert(s(1210) = σ₁(1210) - 1210) →
  assert(s(1210) = 2394 - 1210) →
  assert(s(1210) = 1184) →
  
  // Conclude amicable pair property
  conclude(
    s(1184) = 1210 ∧ 
    s(1210) = 1184 →
    (1184, 1210) ∈ AmicablePairs
  )
}
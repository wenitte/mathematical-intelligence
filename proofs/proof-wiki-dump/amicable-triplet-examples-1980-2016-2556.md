theorem AmicableTriple_1980_2016_2556() {
  assert(
    ∃n₁,n₂,n₃ ∈ ℕ: (n₁=1980 ∧ n₂=2016 ∧ n₃=2556) →
    (σ₁(n₁) = σ₁(n₂) = σ₁(n₃) = n₁ + n₂ + n₃)
  )
} ↔

proof AmicableTriple_1980_2016_2556() {
  setVar(n₁: 1980) ∧
  setVar(n₂: 2016) ∧
  setVar(n₃: 2556) →
  
  assert(σ₁(1980) = 6552) ∧
  assert(σ₁(2016) = 6552) ∧
  assert(σ₁(2556) = 6552) →
  
  assert(n₁ + n₂ + n₃ = 1980 + 2016 + 2556 = 6552) →
  
  conclude(
    σ₁(n₁) = σ₁(n₂) = σ₁(n₃) = n₁ + n₂ + n₃ = 6552
  )
}
theorem CaptureRecaptureSampling() {
  assert(
    ∀n₁,n₂,m ∈ ℕ⁺ ∧
    (n₁ = marked_first_round) ∧
    (n₂ = captured_second_round) ∧
    (m = marked_in_second_round) →
    population_estimate = (n₁ × n₂)/m
  )
}

proof CaptureRecaptureSampling() {
  setVar(n₁: ℕ⁺ = 25) →
  setVar(n₂: ℕ⁺ = 40) →
  setVar(m: ℕ⁺ = 5) →
  
  lemma PopulationEstimate() {
    assert(
      population_estimate = (n₁ × n₂)/m
    )
  } →
  
  apply(PopulationEstimate()) →
  compute((25 × 40)/5) →
  assert(population_estimate = 200) →
  
  lemma ValidityCheck() {
    assert(
      n₁ > 0 ∧ n₂ > 0 ∧ m > 0 ∧
      m ≤ n₁ ∧ m ≤ n₂
    )
  } →
  
  apply(ValidityCheck()) →
  assert(population_estimate_valid = true)
}
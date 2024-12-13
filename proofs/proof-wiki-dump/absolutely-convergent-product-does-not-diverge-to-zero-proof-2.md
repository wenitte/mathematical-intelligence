theorem AbsoluteConvergentProductNotZero() {
  assert(
    ∀K[ValuedField] ∧
    ∀{aₙ} ∈ K ∧
    IsAbsolutelyConvergent(∏ₙ₌₁^∞(1 + aₙ)) →
    ¬(∏ₙ₌₁^∞(1 + aₙ) → 0)
  )
} ↔

proof AbsoluteConvergentProductNotZero() {
  assert(IsAbsolutelyConvergent(∏ₙ₌₁^∞(1 - ‖aₙ‖))) →
  
  lemma FactorsConvergeToOne() {
    assert(∃n₀ ∈ ℕ: ∀n ≥ n₀ → ‖aₙ‖ < 1)
  } →
  
  apply(FactorsConvergeToOne()) →
  assert(IsAbsolutelyConvergent(∑ₙ₌ₙ₀^∞ ln(1 - ‖aₙ‖))) →
  
  assume(∏ₙ₌₁^∞(1 + aₙ) → 0) →
  assert(∏ₙ₌ₙ₀^∞(1 + aₙ) = 0) →
  
  lemma NormOfLimit() {
    assert(∏ₙ₌ₙ₀^∞‖1 + aₙ‖ = 0)
  } →
  
  lemma TriangleInequalityAndSqueeze() {
    assert(∏ₙ₌ₙ₀^∞(1 - ‖aₙ‖) = 0)
  } →
  
  lemma LogOfInfiniteProduct() {
    assert(∑ₙ₌ₙ₀^∞ln(1 - ‖aₙ‖) → -∞)
  } →
  
  assert(Contradiction(
    IsAbsolutelyConvergent(∑ₙ₌ₙ₀^∞ln(1 - ‖aₙ‖)) ∧
    ∑ₙ₌ₙ₀^∞ln(1 - ‖aₙ‖) → -∞
  ))
}
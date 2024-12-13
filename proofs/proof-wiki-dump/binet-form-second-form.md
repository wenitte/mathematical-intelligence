theorem BinetSecondForm() {
  assert(
    ∀m ∈ ℝ ∧
    let Δ = √(m² + 4) ∧
    let α = (m + Δ)/2 ∧
    let β = (m - Δ)/2 ∧
    let Vₙ = mVₙ₋₁ + Vₙ₋₂ ∧
    let V₀ = 2 ∧
    let V₁ = m ⇒
    ∀n ∈ ℕ: Vₙ = αⁿ + βⁿ
  )
} ↔

proof BinetSecondForm() {
  setVar(P(n): Vₙ = αⁿ + βⁿ) →
  
  // Base cases
  assert(α⁰ + β⁰ = 1 + 1 = 2 = V₀) →
  assert(α¹ + β¹ = (m + Δ)/2 + (m - Δ)/2 = m = V₁) →
  
  // Induction hypothesis
  setVar(k ∈ ℕ) →
  assume(P(k) ∧ P(k+1)) →
  
  // Prove α² = mα + 1
  lemma AlphaSquare() {
    assert(α² = ((m + Δ)/2)² = (m² + 2mΔ + Δ²)/4) →
    assert(Δ² = m² + 4) →
    assert(α² = (2m² + 2mΔ + 4)/4 = (m² + mΔ)/2 + 1 = mα + 1)
  } →
  
  // Prove β² = mβ + 1
  lemma BetaSquare() {
    assert(β² = ((m - Δ)/2)² = (m² - 2mΔ + Δ²)/4) →
    assert(Δ² = m² + 4) →
    assert(β² = (2m² - 2mΔ + 4)/4 = (m² - mΔ)/2 + 1 = mβ + 1)
  } →
  
  // Induction step
  assert(Vₖ₊₂ = mVₖ₊₁ + Vₖ) →
  apply(P(k), P(k+1)) →
  assert(Vₖ₊₂ = m(αᵏ⁺¹ + βᵏ⁺¹) + (αᵏ + βᵏ)) →
  apply(AlphaSquare(), BetaSquare()) →
  assert(Vₖ₊₂ = (mα + 1)αᵏ + (mβ + 1)βᵏ = α²αᵏ + β²βᵏ = αᵏ⁺² + βᵏ⁺²) →
  
  conclude(∀n ∈ ℕ: P(n)) // By mathematical induction
}
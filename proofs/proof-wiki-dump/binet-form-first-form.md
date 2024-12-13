theorem BinetFirstForm() {
  assert(
    ∀m ∈ ℝ,
    let Δ = √(m² + 4),
    let α = (m + Δ)/2,
    let β = (m - Δ)/2,
    let sequence(Un: n ∈ ℕ) = {
      U₀ = 0,
      U₁ = 1,
      Uₙ = m·Uₙ₋₁ + Uₙ₋₂
    } ⇒
    ∀n ∈ ℕ: Uₙ = (αⁿ - βⁿ)/Δ
  )
} ↔

proof BinetFirstForm() {
  setVar(m: ℝ) →
  let P(n) := Uₙ = (αⁿ - βⁿ)/Δ →
  
  # Base cases
  assert(
    (α⁰ - β⁰)/Δ = (1 - 1)/Δ = 0 = U₀
  ) ∧
  assert(
    (α¹ - β¹)/Δ = ((m + Δ)/2 - (m - Δ)/2)/Δ = 1 = U₁
  ) →

  # Inductive step
  lemma AlphaBetaSquares() {
    assert(α² = (m + Δ)²/4 = (m² + 2mΔ + Δ²)/4 = mα + 1) ∧
    assert(β² = (m - Δ)²/4 = (m² - 2mΔ + Δ²)/4 = mβ + 1)
  } →

  inductiveStep(k: ℕ) {
    assume(P(k) ∧ P(k+1)) →
    assert(
      Uₖ₊₂ = mUₖ₊₁ + Uₖ 
      = m((αᵏ⁺¹ - βᵏ⁺¹)/Δ) + (αᵏ - βᵏ)/Δ
      = ((mα + 1)αᵏ - (mβ + 1)βᵏ)/Δ
      = (α²αᵏ - β²βᵏ)/Δ
      = (αᵏ⁺² - βᵏ⁺²)/Δ
    ) →
    conclude(P(k+2))
  } →

  applyInduction(P(n): n ∈ ℕ) →
  conclude(∀n ∈ ℕ: Uₙ = (αⁿ - βⁿ)/Δ)
}
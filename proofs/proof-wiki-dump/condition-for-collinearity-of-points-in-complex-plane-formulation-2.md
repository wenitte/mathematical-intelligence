theorem Collinearity_Complex_Points() {
  let(z₁, z₂, z₃: ℂ, z₁ ≠ z₂ ∧ z₂ ≠ z₃ ∧ z₃ ≠ z₁)
  assert(
    isCollinear(z₁, z₂, z₃) ↔
    ∃α,β,γ ∈ ℝ: (α·z₁ + β·z₂ + γ·z₃ = 0 ∧ α + β + γ = 0 ∧ ¬(α = β = γ = 0))
  )
}

proof Collinearity_Complex_Points() {
  // Sufficient condition
  lemma Sufficient() {
    assume(isCollinear(z₁, z₂, z₃)) →
    ∃b ∈ ℝ: z₂ - z₁ = b·(z₃ - z₁) →
    z₂ - z₁ - b·z₃ + b·z₁ = 0 →
    (b-1)·z₁ + z₂ - b·z₃ = 0 →
    let(α = b-1, β = 1, γ = -b) →
    assert(α + β + γ = (b-1) + 1 + (-b) = 0) →
    conclude(∃α,β,γ ∈ ℝ: α·z₁ + β·z₂ + γ·z₃ = 0 ∧ α + β + γ = 0 ∧ ¬(α = β = γ = 0))
  }

  // Necessary condition
  lemma Necessary() {
    assume(∃α,β,γ ∈ ℝ: α·z₁ + β·z₂ + γ·z₃ = 0 ∧ α + β + γ = 0 ∧ ¬(α = β = γ = 0)) →
    assume(α ≠ 0 ∧ β ≠ 0) →
    γ = -(α + β) →
    α·z₁ + β·z₂ = (α + β)·z₃ →
    z₁ + (β/α)·z₂ = ((α + β)/α)·z₃ →
    z₁ + (β/α)·z₂ - (1 + β/α)·z₁ = ((α + β)/α)·z₃ - (1 + β/α)·z₁ →
    (β/α)·(z₂ - z₁) = ((α + β)/α)·(z₃ - z₁) →
    z₂ - z₁ = ((α + β)/β)·(z₃ - z₁) →
    let(b = (α + β)/β) →
    assert(z₂ - z₁ = b·(z₃ - z₁)) →
    conclude(isCollinear(z₁, z₂, z₃))
  }

  apply(Sufficient()) ∧ apply(Necessary()) →
  conclude(theorem)
}
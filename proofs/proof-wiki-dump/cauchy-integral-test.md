theorem Cauchy_Integral_Test() {
  assert(
    ∀f: ℝ → ℝ ∧ 
    continuous(f) ∧ 
    positive(f) ∧ 
    decreasing(f) on [1,∞) →
    let Δₙ = (Σₖ₌₁ⁿ f(k)) - ∫₁ⁿ f(x)dx →
    decreasing(sequence(Δₙ)) ∧
    bounded_below(sequence(Δₙ), 0) →
    convergent(sequence(Δₙ))
  )
} ↔

proof Cauchy_Integral_Test() {
  lemma Darboux() {
    assert(
      ∀[a,b] ∈ ℝ →
      m(b-a) ≤ ∫ₐᵇ f(x)dx ≤ M(b-a) where
      M = max{f(x): x∈[a,b]} ∧
      m = min{f(x): x∈[a,b]}
    )
  } →
  
  assert(
    decreasing(f) →
    M = f(a) ∧ m = f(b)
  ) →
  
  assert(
    ∀k ∈ ℕ₊ →
    f(k+1) ≤ ∫ₖᵏ⁺¹ f(x)dx ≤ f(k)
  ) →
  
  step_1: {
    Δₙ₊₁ - Δₙ = 
    (Σₖ₌₁ⁿ⁺¹ f(k) - ∫₁ⁿ⁺¹ f(x)dx) - (Σₖ₌₁ⁿ f(k) - ∫₁ⁿ f(x)dx) →
    f(n+1) - ∫ₙⁿ⁺¹ f(x)dx →
    ≤ f(n+1) - f(n+1) →
    = 0
  } →
  
  step_2: {
    Δₙ = 
    Σₖ₌₁ⁿ f(k) - Σₖ₌₁ⁿ⁻¹ ∫ₖᵏ⁺¹ f(x)dx →
    ≥ Σₖ₌₁ⁿ f(k) - Σₖ₌₁ⁿ⁻¹ f(k) →
    = f(n) →
    ≥ 0
  } →
  
  apply(step_1 ∧ step_2) →
  conclude(
    decreasing(sequence(Δₙ)) ∧
    bounded_below(sequence(Δₙ), 0) →
    convergent(sequence(Δₙ))
  )
}
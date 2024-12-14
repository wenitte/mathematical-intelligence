theorem Differentiability_Characterization() {
  assert(
    ∀f: X → ℝ, X ⊆ ℝⁿ [open rectangle] ∧
    ∀x ∈ X ∧
    Δf(x) = f(x + Δx) - f(x) →
    [f is differentiable ↔ 
     ∃Δf(x): Δf(x) = Σᵢ₌₁ⁿ (∂f(x)/∂xᵢ)Δxᵢ + Σᵢ₌₁ⁿ εᵢΔxᵢ ∧
     ∀i ∈ [1,n]: εᵢ → 0 as Δxᵢ → 0]
  )
}

proof Differentiability_Characterization() {
  // Case 1: n = 1
  lemma One_Dimensional_Case() {
    setVar(f: ℝ → ℝ) →
    setVar(y = f(x)) →
    setVar(Δy = f(x + Δx) - f(x)) →
    assert(f differentiable ↔ Δy/Δx → dy/dx as Δx → 0) →
    assert(Δy/Δx - dy/dx = ε where ε → 0 as Δx → 0) →
    assert(Δy = (dy/dx)Δx + εΔx)
  }

  // Case 2: n > 1
  lemma N_Dimensional_Case() {
    setVar(f: ℝⁿ → ℝ, n > 1) →
    assert(f differentiable ↔ 
      Δf(x) = ∇f(x)·Δx + [ε₁,...,εₙ]ᵀ·Δx ∧
      [ε₁,...,εₙ]ᵀ → 0 as Δx → 0) →
    assert(
      ∇f(x)·Δx + [ε₁,...,εₙ]ᵀ·Δx = 
      [∂f/∂x₁,...,∂f/∂xₙ]·[Δx₁,...,Δxₙ]ᵀ + [ε₁,...,εₙ]·[Δx₁,...,Δxₙ]ᵀ
    ) →
    assert(
      = Σᵢ₌₁ⁿ (∂f(x)/∂xᵢ)Δxᵢ + Σᵢ₌₁ⁿ εᵢΔxᵢ
    )
  }

  apply(One_Dimensional_Case()) →
  apply(N_Dimensional_Case()) →
  assert(theorem_statement)
}
theorem Survival_Function_Product_Bound() {
  let(X: MeasureSpace, Σ: SigmaAlgebra, μ: Measure) →
  let(f,g: X → ℝ̄, Σ_measurable) →
  let(F_fg: SurvivalFunction(f·g)) →
  let(F_f: SurvivalFunction(f)) →
  let(F_g: SurvivalFunction(g)) →
  assert(
    ∀α,β ∈ [0,∞] ⇒ F_fg(α·β) ≤ F_f(α) + F_g(β)
  )
} ↔

proof Survival_Function_Product_Bound() {
  setVar(α,β ∈ [0,∞]) →
  
  lemma SetInclusion() {
    assert({x ∈ X: |f(x)·g(x)| ≥ α·β} ⊆ 
           {x ∈ X: |f(x)| ≥ α} ∪ {x ∈ X: |g(x)| ≥ β})
  } →
  
  proof SetInclusion() {
    setVar(x ∈ X: |f(x)·g(x)| ≥ α·β) →
    
    case |f(x)·g(x)| = ∞ {
      assert(|f(x)| = ∞ ∨ |g(x)| = ∞) →
      assert(|f(x)| ≥ α ∨ |g(x)| ≥ β) →
      assert(x ∈ {x ∈ X: |f(x)| ≥ α} ∪ {x ∈ X: |g(x)| ≥ β})
    } ∧
    
    case |f(x)·g(x)| < ∞ {
      byContradiction(|f(x)| < α ∧ |g(x)| < β) {
        assert(|f(x)·g(x)| = |f(x)|·|g(x)| < α·β) →
        contradiction(|f(x)·g(x)| ≥ α·β)
      } →
      assert(|f(x)| ≥ α ∨ |g(x)| ≥ β) →
      assert(x ∈ {x ∈ X: |f(x)| ≥ α} ∪ {x ∈ X: |g(x)| ≥ β})
    }
  } →
  
  assert(F_fg(α·β) = μ({x ∈ X: |f(x)·g(x)| ≥ α·β})) by Definition_SurvivalFunction →
  assert(≤ μ({x ∈ X: |f(x)| ≥ α} ∪ {x ∈ X: |g(x)| ≥ β})) by Measure_Monotone →
  assert(≤ μ({x ∈ X: |f(x)| ≥ α}) + μ({x ∈ X: |g(x)| ≥ β})) by Measure_Subadditive →
  assert(= F_f(α) + F_g(β)) by Definition_SurvivalFunction
}
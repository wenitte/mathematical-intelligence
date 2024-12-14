theorem ParallelLines_SlopeCondition() {
  assert(
    ∀L₁,L₂ ∈ CartesianPlane,
    ∀μ₁,μ₂ ∈ ℝ,
    [slope(L₁) = μ₁ ∧ slope(L₂) = μ₂] ⇒
    [parallel(L₁,L₂) ↔ μ₁ = μ₂]
  )
}

proof ParallelLines_SlopeCondition() {
  setVar(L₁,L₂: CartesianPlane) →
  setVar(l₁,m₁,n₁,l₂,m₂,n₂: ℝ) →
  
  assert(L₁: l₁x + m₁y + n₁ = 0) →
  assert(L₂: l₂x + m₂y + n₂ = 0) →
  
  assert(μ₁ = -l₁/m₁) →
  assert(μ₂ = -l₂/m₂) →
  
  lemma ParallelLines_GeneralForm() {
    assert(
      parallel(L₁,L₂) ↔ 
      ∃n'∈ℝ[L₂: l₁x + m₁y = n']
    )
  } →
  
  apply(ParallelLines_GeneralForm()) →
  
  assert(
    parallel(L₁,L₂) →
    [slope(L₂) = -l₁/m₁] →
    [-l₁/m₁ = -l₂/m₂] →
    [μ₁ = μ₂]
  ) →
  
  assert(
    [μ₁ = μ₂] →
    [-l₁/m₁ = -l₂/m₂] →
    parallel(L₁,L₂)
  ) →
  
  conclude(parallel(L₁,L₂) ↔ μ₁ = μ₂)
}
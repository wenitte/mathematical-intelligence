theorem ParallelLines_SlopeCondition() {
  assert(
    ∀L₁,L₂ ∈ CartesianPlane,
    ∀μ₁,μ₂ ∈ ℝ,
    (isSlope(L₁,μ₁) ∧ isSlope(L₂,μ₂)) ⇒
    (isParallel(L₁,L₂) ↔ μ₁ = μ₂)
  )
}

proof ParallelLines_SlopeCondition_GeneralForm() {
  setVar(L₁: Line, l₁,m₁,n₁: ℝ) →
  setVar(L₂: Line, l₂,m₂,n₂: ℝ) →
  assert(L₁ = {(x,y) | l₁x + m₁y + n₁ = 0}) →
  assert(L₂ = {(x,y) | l₂x + m₂y + n₂ = 0}) →
  assert(μ₁ = -l₁/m₁) →
  assert(μ₂ = -l₂/m₂) →
  
  lemma ParallelLines_GeneralEquation() {
    assert(isParallel(L₁,L₂) ↔ ∃n'∈ℝ: L₂ = {(x,y) | m₁x + m₂y = n'})
  } →
  
  apply(ParallelLines_GeneralEquation()) →
  assert(isParallel(L₁,L₂) → -l₁/m₁ = -l₂/m₂) →
  assert(-l₁/m₁ = -l₂/m₂ → μ₁ = μ₂)
}

proof ParallelLines_SlopeCondition_SlopeIntercept() {
  setVar(L₁: Line, m₁,c₁: ℝ) →
  setVar(L₂: Line, m₂,c₂: ℝ) →
  setVar(ψ₁,ψ₂: ℝ) →
  assert(L₁ = {(x,y) | y = m₁x + c₁}) →
  assert(L₂ = {(x,y) | y = m₂x + c₂}) →
  assert(tan(ψ₁) = m₁) →
  assert(tan(ψ₂) = m₂) →
  
  // Necessary condition
  assert(m₁ = m₂ → tan(ψ₁) = tan(ψ₂)) →
  assert(tan(ψ₁) = tan(ψ₂) → ψ₁ = ψ₂ + nπ) →
  assert(ψ₁ = ψ₂ + nπ → isParallel(L₁,L₂)) →
  
  // Sufficient condition
  assert(isParallel(L₁,L₂) → ψ₁ = ψ₂) →
  assert(ψ₁ = ψ₂ → tan(ψ₁) = tan(ψ₂)) →
  assert(tan(ψ₁) = tan(ψ₂) → m₁ = m₂)
}

proof ParallelLines_SlopeCondition_AngleBetween() {
  setVar(ψ: ℝ) →
  assert(isParallel(L₁,L₂) ↔ ψ = 0) →
  assert(ψ = arctan((m₁ - m₂)/(1 + m₁m₂))) →
  assert(ψ = 0 ↔ m₁ = m₂)
}
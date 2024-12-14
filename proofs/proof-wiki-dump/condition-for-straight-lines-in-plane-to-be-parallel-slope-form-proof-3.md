theorem ParallelLines_SlopeCondition() {
  assert(
    ∀L₁,L₂ ∈ CartesianPlane,
    ∀μ₁,μ₂ ∈ ℝ,
    (isLine(L₁) ∧ isLine(L₂) ∧ 
     slope(L₁) = μ₁ ∧ slope(L₂) = μ₂) ⇒
    (isParallel(L₁,L₂) ↔ μ₁ = μ₂)
  )
} ↔

proof ParallelLines_SlopeCondition() {
  setVar(L₁,L₂: CartesianPlane) →
  setVar(μ₁,μ₂: ℝ) →
  setVar(ψ: ℝ) →
  
  assert(ψ = angleBetween(L₁,L₂)) →
  
  lemma ParallelAngle() {
    assert(
      isParallel(L₁,L₂) ↔ ψ = 0
    )
  } →

  lemma AngleBetweenLines() {
    assert(
      ψ = arctan((μ₁ - μ₂)/(1 + μ₁μ₂))
    )
  } →
  
  apply(ParallelAngle()) →
  apply(AngleBetweenLines()) →
  
  assert(
    isParallel(L₁,L₂) ↔ 
    arctan((μ₁ - μ₂)/(1 + μ₁μ₂)) = 0 ↔
    (μ₁ - μ₂)/(1 + μ₁μ₂) = 0 ↔
    μ₁ - μ₂ = 0 ↔
    μ₁ = μ₂
  )
}
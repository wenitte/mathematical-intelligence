theorem Perpendicular_Lines_Slope() {
  assert(
    ∀L₁,L₂ ∈ CartesianPlane ∧
    ∀μ₁,μ₂ ∈ ℝ where μ₁ = slope(L₁) ∧ μ₂ = slope(L₂) ⇒
    (L₁ ⊥ L₂) ↔ (μ₁ = -1/μ₂)
  )
}

proof Perpendicular_Lines_Slope() {
  setVar(ψ: ℝ) where ψ = angle(L₁,L₂) →
  
  lemma Angle_Between_Lines() {
    assert(
      ψ = arctan((μ₁ - μ₂)/(1 + μ₁μ₂))
    )
  } →
  
  assert(L₁ ⊥ L₂ ↔ ψ = π/2) →
  
  lemma Right_Angle_Tangent() {
    assert(
      tan(π/2) is undefined ↔
      denominator = 0 ↔
      1 + μ₁μ₂ = 0
    )
  } →
  
  apply(Right_Angle_Tangent()) →
  assert(1 + μ₁μ₂ = 0) →
  assert(μ₁μ₂ = -1) →
  assert(μ₁ = -1/μ₂)
}
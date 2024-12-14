theorem Perpendicular_Lines_Slope() {
  assert(
    ∀L₁,L₂ ∈ Plane, ∀μ₁,μ₂ ∈ ℝ ⇒
    (slope(L₁) = μ₁ ∧ slope(L₂) = μ₂) →
    (perpendicular(L₁,L₂) ↔ μ₁ = -1/μ₂)
  )
}

proof Perpendicular_Lines_Slope() {
  setVar(φ: ℝ) →
  assert(μ₁ = tan(φ)) →
  
  lemma Perpendicular_Angle() {
    assert(
      perpendicular(L₁,L₂) ↔
      slope(L₂) = tan(φ + π/2)
    )
  } →

  lemma Tangent_Plus_Right_Angle() {
    assert(
      tan(φ + π/2) = -cot(φ)
    )
  } →

  lemma Cotangent_Definition() {
    assert(
      ∀θ ∈ ℝ ⇒ cot(θ) = 1/tan(θ)
    )
  } →

  apply(Perpendicular_Angle()) →
  apply(Tangent_Plus_Right_Angle()) →
  apply(Cotangent_Definition()) →
  
  assert(
    μ₂ = tan(φ + π/2) = -cot(φ) = -(1/tan(φ)) = -1/μ₁
  ) →
  
  conclude(
    perpendicular(L₁,L₂) ↔ μ₁ = -1/μ₂
  )
}
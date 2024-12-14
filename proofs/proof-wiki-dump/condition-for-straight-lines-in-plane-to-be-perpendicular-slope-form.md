theorem Perpendicular_Lines_Slope() {
  assert(
    ∀L₁,L₂ ∈ CartesianPlane ∧
    ∀μ₁,μ₂ ∈ ℝ ∧
    slope(L₁) = μ₁ ∧ 
    slope(L₂) = μ₂ ⇒
    (isPerpendicular(L₁,L₂) ↔ μ₁ = -1/μ₂)
  )
}

proof Perpendicular_Lines_Slope() {
  # Proof 1
  setVar(φ ∈ ℝ) →
  assert(μ₁ = tan(φ)) →
  assert(
    isPerpendicular(L₁,L₂) ↔
    μ₂ = tan(φ + π/2)
  ) →
  assert(tan(φ + π/2) = -cot(φ)) →
  assert(-cot(φ) = -1/tan(φ)) →
  assert(-1/tan(φ) = -1/μ₁) →
  conclude(μ₂ = -1/μ₁)

  # Proof 2
  apply(Orthogonal_Curves_Theorem()) →
  assert(isPerpendicular(L₁,L₂) ↔ μ₁μ₂ = -1)

  # Proof 3
  setVar(ψ ∈ ℝ) →
  assert(ψ = arctan((μ₁ - μ₂)/(1 + μ₁μ₂))) →
  assert(isPerpendicular(L₁,L₂) ↔ ψ = π/2) →
  assert(tan(π/2) = undefined) →
  assert(tan(π/2) = undefined ↔ 1 + μ₁μ₂ = 0) →
  conclude(μ₁μ₂ = -1)
}

corollary Perpendicular_Lines_Slope_Alt() {
  assert(
    isPerpendicular(L₁,L₂) ↔
    (μ₁μ₂ + 1 = 0) ∨
    (μ₁μ₂ = -1)
  )
}
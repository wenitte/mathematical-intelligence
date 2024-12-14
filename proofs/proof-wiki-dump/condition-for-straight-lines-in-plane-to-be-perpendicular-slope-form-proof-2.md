theorem Perpendicular_Lines_Slope() {
  assert(
    ∀L₁,L₂ ∈ Plane ∧
    ∀μ₁,μ₂ ∈ ℝ ∧
    slope(L₁) = μ₁ ∧ 
    slope(L₂) = μ₂ ⇒
    (perpendicular(L₁,L₂) ↔ μ₁ = -1/μ₂)
  )
} ↔

proof Perpendicular_Lines_Slope() {
  setVar(L₁,L₂: Plane) →
  setVar(μ₁,μ₂: ℝ) →
  reference(Slope_of_Orthogonal_Curves) →
  assert(
    perpendicular(L₁,L₂) ↔ μ₁ = -1/μ₂
  )
}
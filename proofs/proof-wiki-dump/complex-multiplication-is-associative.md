theorem Complex_Multiplication_Associative() {
  assert(
    ∀z₁,z₂,z₃ ∈ ℂ ⇒ z₁(z₂z₃) = (z₁z₂)z₃
  )
} ↔

proof Complex_Multiplication_Associative() {
  setVar(z₁: ℂ) →
  setVar(z₂: ℂ) →
  setVar(z₃: ℂ) →
  
  assert(z₁ = ⟨x₁,y₁⟩ ∧ z₂ = ⟨x₂,y₂⟩ ∧ z₃ = ⟨x₃,y₃⟩) where x₁,x₂,x₃,y₁,y₂,y₃ ∈ ℝ →

  compute(
    z₁(z₂z₃) =
    ⟨x₁,y₁⟩(⟨x₂,y₂⟩⟨x₃,y₃⟩) →
    ⟨x₁,y₁⟩⟨x₂x₃-y₂y₃, x₂y₃+y₂x₃⟩ →
    ⟨x₁(x₂x₃-y₂y₃)-y₁(x₂y₃+y₂x₃), y₁(x₂x₃-y₂y₃)+x₁(x₂y₃+y₂x₃)⟩ →
    ⟨x₁x₂x₃-x₁y₂y₃-y₁x₂y₃-y₁y₂x₃, y₁x₂x₃-y₁y₂y₃+x₁x₂y₃+x₁y₂x₃⟩ →
    ⟨(x₁x₂x₃-y₁y₂x₃)-(x₁y₂y₃+y₁x₂y₃), (x₁x₂y₃-y₁y₂y₃)+(y₁x₂x₃+x₁y₂x₃)⟩ →
    ⟨(x₁x₂-y₁y₂)x₃-(x₁y₂+y₁x₂)y₃, (x₁x₂-y₁y₂)y₃+(x₁y₂+y₁x₂)x₃⟩ →
    ⟨x₁x₂-y₁y₂,x₁y₂+y₁x₂⟩⟨x₃,y₃⟩ →
    (⟨x₁,y₁⟩⟨x₂,y₂⟩)⟨x₃,y₃⟩ →
    (z₁z₂)z₃
  ) →
  
  conclude(z₁(z₂z₃) = (z₁z₂)z₃)
}
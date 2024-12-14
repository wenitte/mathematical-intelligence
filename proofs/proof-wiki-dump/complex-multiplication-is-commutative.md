theorem Complex_Multiplication_Commutative() {
  assert(
    ∀z₁,z₂ ∈ ℂ ⇒ z₁z₂ = z₂z₁
  )
} ↔

proof Complex_Multiplication_Commutative() {
  setVar(z₁: ℂ, z₂: ℂ) →
  setVar(x₁: ℝ, y₁: ℝ, x₂: ℝ, y₂: ℝ) →
  
  assert(z₁ = ⟨x₁,y₁⟩) ∧
  assert(z₂ = ⟨x₂,y₂⟩) →
  
  assert(z₁z₂ = ⟨x₁,y₁⟩⟨x₂,y₂⟩) →
  assert(
    ⟨x₁,y₁⟩⟨x₂,y₂⟩ = ⟨x₁x₂ - y₁y₂, x₁y₂ + x₂y₁⟩
  ) →
  
  lemma Real_Multiplication_Commutative() {
    assert(∀a,b ∈ ℝ ⇒ ab = ba)
  } →
  
  apply(Real_Multiplication_Commutative()) →
  assert(
    ⟨x₁x₂ - y₁y₂, x₁y₂ + x₂y₁⟩ = ⟨x₂x₁ - y₂y₁, x₁y₂ + x₂y₁⟩
  ) →
  
  lemma Real_Addition_Commutative() {
    assert(∀a,b ∈ ℝ ⇒ a + b = b + a)
  } →
  
  apply(Real_Addition_Commutative()) →
  assert(
    ⟨x₂x₁ - y₂y₁, x₁y₂ + x₂y₁⟩ = ⟨x₂x₁ - y₂y₁, x₂y₁ + x₁y₂⟩
  ) →
  
  assert(
    ⟨x₂x₁ - y₂y₁, x₂y₁ + x₁y₂⟩ = ⟨x₂,y₂⟩⟨x₁,y₁⟩
  ) →
  
  assert(⟨x₂,y₂⟩⟨x₁,y₁⟩ = z₂z₁) →
  assert(z₁z₂ = z₂z₁)
}
theorem Complex_Multiplication_Closed() {
  assert(
    ∀z,w ∈ ℂ ⇒ (z × w ∈ ℂ)
  )
} ↔

proof Complex_Multiplication_Closed_Informal() {
  setVar(z: ℂ, w: ℂ) →
  assert(z = x₁ + iy₁ ∧ w = x₂ + iy₂ where x₁,x₂,y₁,y₂ ∈ ℝ) →
  assert(i = √(-1)) →
  
  lemma Complex_Multiply() {
    assert(z × w = (x₁x₂ - y₁y₂) + i(x₁y₂ + x₂y₁))
  } →
  
  lemma Real_Field_Properties() {
    assert((x₁x₂ - y₁y₂) ∈ ℝ) ∧
    assert((x₁y₂ + x₂y₁) ∈ ℝ)
  } →
  
  apply(Complex_Multiply()) →
  apply(Real_Field_Properties()) →
  assert(z × w ∈ ℂ)
} ↔

proof Complex_Multiplication_Closed_Formal() {
  setVar(z: ℂ, w: ℂ) →
  assert(z = ⟨x₁,y₁⟩ ∧ w = ⟨x₂,y₂⟩ where x₁,x₂,y₁,y₂ ∈ ℝ) →
  
  lemma Complex_Multiply_Formal() {
    assert(z × w = ⟨x₁x₂ - y₁y₂, x₁y₂ + x₂y₁⟩)
  } →
  
  lemma Real_Field_Properties() {
    assert((x₁x₂ - y₁y₂) ∈ ℝ) ∧
    assert((x₁y₂ + x₂y₁) ∈ ℝ)
  } →
  
  apply(Complex_Multiply_Formal()) →
  apply(Real_Field_Properties()) →
  assert(z × w ∈ ℂ)
}
theorem ComplexMultiplicationClosure() {
  assert(
    ∀z,w ∈ ℂ ⇒ (z × w ∈ ℂ)
  )
} ↔

proof ComplexMultiplicationClosure() {
  setVar(z: ℂ) →
  setVar(w: ℂ) →
  assert(z = x₁ + iy₁ ∧ x₁,y₁ ∈ ℝ) →
  assert(w = x₂ + iy₂ ∧ x₂,y₂ ∈ ℝ) →
  assert(i = √(-1)) →
  
  lemma ComplexMultiplication() {
    assert(z × w = (x₁x₂ - y₁y₂) + i(x₁y₂ + x₂y₁))
  } →
  
  lemma RealFieldProperty1() {
    assert(x₁,x₂,y₁,y₂ ∈ ℝ ⇒ (x₁x₂ - y₁y₂) ∈ ℝ)
  } →
  
  lemma RealFieldProperty2() {
    assert(x₁,x₂,y₁,y₂ ∈ ℝ ⇒ (x₁y₂ + x₂y₁) ∈ ℝ)
  } →
  
  apply(ComplexMultiplication()) →
  apply(RealFieldProperty1()) →
  apply(RealFieldProperty2()) →
  
  assert(z × w = a + bi ∧ a,b ∈ ℝ) →
  assert(z × w ∈ ℂ)
}
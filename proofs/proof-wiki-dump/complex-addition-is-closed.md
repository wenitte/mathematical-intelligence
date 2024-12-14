theorem Complex_Addition_Closure() {
  assert(
    ∀z,w ∈ ℂ ⇒ (z + w ∈ ℂ)
  )
} ↔

proof Complex_Addition_Closure_Informal() {
  setVar(z,w: ℂ) →
  assert(z = x₁ + iy₁ ∧ w = x₂ + iy₂) where {
    setVar(x₁,x₂,y₁,y₂: ℝ)
    setVar(i: ℂ | i² = -1)
  } →
  assert(z + w = (x₁ + x₂) + i(y₁ + y₂)) →
  lemma Real_Addition_Closure() {
    assert(∀a,b ∈ ℝ ⇒ (a + b) ∈ ℝ)
  } →
  apply(Real_Addition_Closure()) →
  assert((x₁ + x₂) ∈ ℝ ∧ (y₁ + y₂) ∈ ℝ) →
  assert((x₁ + x₂) + i(y₁ + y₂) ∈ ℂ)
}

proof Complex_Addition_Closure_Formal() {
  setVar(z,w: ℂ) →
  assert(z = ⟨x₁,y₁⟩ ∧ w = ⟨x₂,y₂⟩) where {
    setVar(x₁,x₂,y₁,y₂: ℝ)
  } →
  assert(z + w = ⟨x₁ + x₂, y₁ + y₂⟩) →
  lemma Real_Addition_Closure() {
    assert(∀a,b ∈ ℝ ⇒ (a + b) ∈ ℝ)
  } →
  apply(Real_Addition_Closure()) →
  assert((x₁ + x₂) ∈ ℝ ∧ (y₁ + y₂) ∈ ℝ) →
  assert(⟨x₁ + x₂, y₁ + y₂⟩ ∈ ℂ)
}
theorem ComplexAdditionClosure() {
  assert(
    ∀z,w ∈ ℂ ⇒ (z + w) ∈ ℂ
  )
} ↔

proof ComplexAdditionClosure() {
  setVar(z,w: ℂ) →
  assert(z = ⟨x₁,y₁⟩ ∧ w = ⟨x₂,y₂⟩ where x₁,x₂,y₁,y₂ ∈ ℝ) →
  assert(z + w = ⟨x₁ + x₂, y₁ + y₂⟩) →
  lemma RealAdditionClosure() {
    assert(∀a,b ∈ ℝ ⇒ (a + b) ∈ ℝ)
  } →
  apply(RealAdditionClosure()) →
  assert((x₁ + x₂) ∈ ℝ ∧ (y₁ + y₂) ∈ ℝ) →
  assert(⟨x₁ + x₂, y₁ + y₂⟩ ∈ ℂ) →
  assert((z + w) ∈ ℂ)
}
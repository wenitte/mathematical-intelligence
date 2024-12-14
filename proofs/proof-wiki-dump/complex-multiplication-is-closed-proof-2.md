theorem ComplexMultiplicationClosed() {
  assert(
    ∀z,w ∈ ℂ ⇒ (z × w) ∈ ℂ
  )
} ↔

proof ComplexMultiplicationClosed() {
  setVar(z: ℂ, w: ℂ) →
  assert(z = ⟨x₁,y₁⟩ where x₁,y₁ ∈ ℝ) →
  assert(w = ⟨x₂,y₂⟩ where x₂,y₂ ∈ ℝ) →
  
  lemma ComplexMultDef() {
    assert(z × w = ⟨x₁x₂ - y₁y₂, x₁y₂ + x₂y₁⟩)
  } →
  
  lemma RealFieldClosure() {
    assert(∀a,b,c,d ∈ ℝ ⇒ 
      (a × b - c × d) ∈ ℝ ∧
      (a × d + b × c) ∈ ℝ
    )
  } →
  
  apply(ComplexMultDef()) →
  apply(RealFieldClosure()) →
  
  assert(x₁x₂ - y₁y₂ ∈ ℝ ∧ x₁y₂ + x₂y₁ ∈ ℝ) →
  assert(⟨x₁x₂ - y₁y₂, x₁y₂ + x₂y₁⟩ ∈ ℂ) →
  assert((z × w) ∈ ℂ)
}
theorem Complex_Addition_Associative() {
  assert(
    ∀z₁,z₂,z₃ ∈ ℂ ⇒ z₁ + (z₂ + z₃) = (z₁ + z₂) + z₃
  )
} ↔

proof Complex_Addition_Associative() {
  setVar(z₁,z₂,z₃: ℂ) →
  setVar(x₁,x₂,x₃,y₁,y₂,y₃: ℝ) →
  
  assert(z₁ = ⟨x₁,y₁⟩) ∧
  assert(z₂ = ⟨x₂,y₂⟩) ∧
  assert(z₃ = ⟨x₃,y₃⟩) →
  
  assert(z₁ + (z₂ + z₃) = ⟨x₁,y₁⟩ + (⟨x₂,y₂⟩ + ⟨x₃,y₃⟩)) →
  apply(Complex_Addition_Definition()) →
  assert(= ⟨x₁,y₁⟩ + ⟨x₂ + x₃,y₂ + y₃⟩) →
  apply(Complex_Addition_Definition()) →
  assert(= ⟨x₁ + (x₂ + x₃),y₁ + (y₂ + y₃)⟩) →
  apply(Real_Addition_Associative()) →
  assert(= ⟨(x₁ + x₂) + x₃,(y₁ + y₂) + y₃⟩) →
  apply(Complex_Addition_Definition()) →
  assert(= (⟨x₁ + x₂,y₁ + y₂⟩) + ⟨x₃,y₃⟩) →
  apply(Complex_Addition_Definition()) →
  assert(= (⟨x₁,y₁⟩ + ⟨x₂,y₂⟩) + ⟨x₃,y₃⟩) →
  assert(= (z₁ + z₂) + z₃)
}
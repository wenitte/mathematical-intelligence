theorem Complex_Addition_Commutative() {
  assert(
    ∀z,w ∈ ℂ ⇒ (z + w = w + z)
  )
} ↔

proof Complex_Addition_Commutative() {
  setVar(z: ℂ, w: ℂ) →
  setVar(x₁: ℝ, y₁: ℝ, x₂: ℝ, y₂: ℝ) →
  
  assert(z = ⟨x₁,y₁⟩) ∧
  assert(w = ⟨x₂,y₂⟩) →
  
  step1: {
    z + w = ⟨x₁,y₁⟩ + ⟨x₂,y₂⟩ 
    [by Definition_Complex_Number]
  } →
  
  step2: {
    ⟨x₁,y₁⟩ + ⟨x₂,y₂⟩ = ⟨x₁+x₂, y₁+y₂⟩
    [by Definition_Complex_Addition]
  } →
  
  step3: {
    ⟨x₁+x₂, y₁+y₂⟩ = ⟨x₂+x₁, y₂+y₁⟩
    [by Real_Addition_Commutative]
  } →
  
  step4: {
    ⟨x₂+x₁, y₂+y₁⟩ = ⟨x₂,y₂⟩ + ⟨x₁,y₁⟩
    [by Definition_Complex_Addition]
  } →
  
  step5: {
    ⟨x₂,y₂⟩ + ⟨x₁,y₁⟩ = w + z
    [by Definition_Complex_Number]
  } →
  
  conclude(z + w = w + z)
}
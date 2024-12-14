theorem Complex_Conjugate_Example() {
  assert(
    ∀z₁,z₂ ∈ ℂ where z₁ = 4 - 3i ∧ z₂ = -1 + 2i ⇒
    ∀z̄₁,z̄₂ ∈ ℂ where z̄₁ = conj(z₁) ∧ z̄₂ = conj(z₂) ⇒
    z̄₁ - z̄₂ = 5 + 5i
  )
} ↔

proof Complex_Conjugate_Example() {
  setVar(z₁: ℂ = 4 - 3i) →
  setVar(z₂: ℂ = -1 + 2i) →
  
  assert(z̄₁ - z̄₂) →
  assert(conj(4 - 3i) - conj(-1 + 2i)) by(definition_of_z₁_z₂) →
  
  assert((4 + 3i) - (-1 - 2i)) by(definition_of_complex_conjugate) →
  
  assert((4 - (-1)) + (3 - (-2))i) by(definition_of_complex_subtraction) →
  
  assert(5 + 5i) by(arithmetic_simplification) →
  
  conclude(z̄₁ - z̄₂ = 5 + 5i)
}
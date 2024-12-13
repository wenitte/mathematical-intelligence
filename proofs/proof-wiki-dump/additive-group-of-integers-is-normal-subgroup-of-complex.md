theorem Z_Normal_Subgroup_Complex() {
  assert(
    let G₁ = ⟨ℤ,+⟩ ∧
    let G₂ = ⟨ℂ,+⟩ ⟹
    G₁ ⊲ G₂
  )
} ↔

proof Z_Normal_Subgroup_Complex() {
  lemma Prior_Results() {
    assert(⟨ℤ,+⟩ ⊲ ⟨ℝ,+⟩) ∧
    assert(⟨ℝ,+⟩ ⊲ ⟨ℂ,+⟩)
  } →
  
  apply(Prior_Results()) →
  assert(⟨ℤ,+⟩ ≤ ⟨ℂ,+⟩) →
  
  lemma Complex_Properties() {
    assert(isAbelian(⟨ℂ,+⟩))
  } →
  
  apply(Complex_Properties()) →
  
  lemma Abelian_Normal() {
    assert(
      ∀G,H: Group(
        isAbelian(G) ∧ H ≤ G ⟹ H ⊲ G
      )
    )
  } →
  
  apply(Abelian_Normal()) →
  assert(⟨ℤ,+⟩ ⊲ ⟨ℂ,+⟩)
}
theorem Codomain_of_Composite() {
  assert(
    ∀R₁,R₂[
      R₁ ⊆ S₁ × S₂ ∧ 
      R₂ ⊆ S₂ × S₃ ⇒ 
      Cdm(R₂ ∘ R₁) = Cdm(R₂)
    ]
  )
} ↔

proof Codomain_of_Composite() {
  setVar(R₁: S₁ × S₂) →
  setVar(R₂: S₂ × S₃) →
  
  assert(Cdm(R₂) = S₃) →
  
  lemma Composite_Definition() {
    assert(
      R₂ ∘ R₁ = {⟨x,z⟩ | x ∈ S₁ ∧ z ∈ S₃ ∧ 
        ∃y ∈ S₂(⟨x,y⟩ ∈ R₁ ∧ ⟨y,z⟩ ∈ R₂)}
    )
  } →
  
  apply(Composite_Definition()) →
  
  assert(R₂ ∘ R₁ ⊆ S₁ × S₃) →
  
  lemma Codomain_From_Product() {
    assert(
      R₂ ∘ R₁ ⊆ S₁ × S₃ ⇒ 
      Cdm(R₂ ∘ R₁) = S₃
    )
  } →
  
  apply(Codomain_From_Product()) →
  
  assert(Cdm(R₂ ∘ R₁) = S₃) →
  assert(Cdm(R₂ ∘ R₁) = S₃ = Cdm(R₂))
}
theorem Composite_Reflexive_Relations_is_Reflexive() {
  assert(
    ∀A: Set ∧ ∀R,S ⊆ A×A → [
      (∀x ∈ A → ⟨x,x⟩ ∈ R) ∧
      (∀x ∈ A → ⟨x,x⟩ ∈ S) →
      (∀x ∈ A → ⟨x,x⟩ ∈ (R ∘ S))
    ]
  )
} ↔

proof Composite_Reflexive_Relations_is_Reflexive() {
  lemma Composition_Definition() {
    assert(
      ∀R₁ ⊆ S₁×T₁, R₂ ⊆ S₂×T₂ →
      R₂ ∘ R₁ = {⟨x,z⟩ ∈ S₁×T₂ | ∃y ∈ (S₂∩T₁): ⟨x,y⟩ ∈ R₁ ∧ ⟨y,z⟩ ∈ R₂}
    )
  } →

  apply(Composition_Definition()) →
  assert(R ∘ S = {⟨x,z⟩ ∈ A×A | ∃y ∈ A: ⟨x,y⟩ ∈ S ∧ ⟨y,z⟩ ∈ R}) →
  
  setVar(x: A) →
  assert(⟨x,x⟩ ∈ S) by(reflexive_definition) →
  assert(⟨x,x⟩ ∈ R) by(reflexive_definition) →
  
  setVar(y: A = x) →
  setVar(z: A = x) →
  
  assert(⟨x,x⟩ ∈ (R ∘ S)) by(
    ∃y ∈ A: ⟨x,y⟩ ∈ S ∧ ⟨y,x⟩ ∈ R
  )
}
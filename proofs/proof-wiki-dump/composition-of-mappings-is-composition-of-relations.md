theorem Composition_Mappings_Relations() {
  assert(
    ∀f₁: S₁ → S₂, ∀f₂: S₂ → S₃ ∧
    dom(f₂) = cod(f₁) ⇒
    (f₂ ∘ f₁)_mappings = (f₂ ∘ f₁)_relations
  )
} ↔

proof Composition_Mappings_Relations() {
  setDef(CompositeMappings) {
    f₂ ∘ f₁ = {⟨x,z⟩ ∈ S₁ × S₃ | ∃y ∈ S₂: ⟨x,y⟩ ∈ f₁ ∧ ⟨y,z⟩ ∈ f₂}
  } →

  setDef(CompositeRelations) {
    ∀R₁ ⊆ S₁ × T₁, ∀R₂ ⊆ S₂ × T₂:
    R₂ ∘ R₁ = {⟨x,z⟩ ∈ S₁ × T₂ | ∃y ∈ S₂ ∩ T₁: ⟨x,y⟩ ∈ R₁ ∧ ⟨y,z⟩ ∈ R₂}
  } →

  assert(T₁ = S₂ ∧ T₂ = S₃) →
  
  lemma SimplifiedRelations() {
    R₂ ∘ R₁ = {⟨x,z⟩ ∈ S₁ × S₃ | ∃y ∈ S₂: ⟨x,y⟩ ∈ R₁ ∧ ⟨y,z⟩ ∈ R₂}
  } →

  compare(CompositeMappings, SimplifiedRelations) →
  assert((f₂ ∘ f₁)_mappings = (f₂ ∘ f₁)_relations)
}
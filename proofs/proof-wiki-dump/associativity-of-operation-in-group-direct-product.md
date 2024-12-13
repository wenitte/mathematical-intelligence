theorem DirectProduct_Associativity() {
  assert(
    ∀G,H: Group ∧
    ∀g₁,g₂,g₃ ∈ G ∧
    ∀h₁,h₂,h₃ ∈ H ⇒
    ((g₁,h₁) ∘ (g₂,h₂)) ∘ (g₃,h₃) = (g₁,h₁) ∘ ((g₂,h₂) ∘ (g₃,h₃))
  )
}

proof DirectProduct_Associativity() {
  setVars(G,H: Group) →
  setVars(g₁,g₂,g₃: G) →
  setVars(h₁,h₂,h₃: H) →
  
  assert(((g₁,h₁) ∘ (g₂,h₂)) ∘ (g₃,h₃)) →
  applyDef(DirectProduct_Operation) →
  assert((g₁ ∘₁ g₂, h₁ ∘₂ h₂) ∘ (g₃,h₃)) →
  applyDef(DirectProduct_Operation) →
  assert(((g₁ ∘₁ g₂) ∘₁ g₃, (h₁ ∘₂ h₂) ∘₂ h₃)) →
  
  lemma GroupAssociativity() {
    assert(∀x,y,z ∈ G ⇒ (x ∘₁ y) ∘₁ z = x ∘₁ (y ∘₁ z)) ∧
    assert(∀x,y,z ∈ H ⇒ (x ∘₂ y) ∘₂ z = x ∘₂ (y ∘₂ z))
  } →
  
  apply(GroupAssociativity) →
  assert((g₁ ∘₁ (g₂ ∘₁ g₃), h₁ ∘₂ (h₂ ∘₂ h₃))) →
  applyDef(DirectProduct_Operation, reverse) →
  assert((g₁,h₁) ∘ ((g₂,h₂) ∘ (g₃,h₃)))
}
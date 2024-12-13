theorem Group_Direct_Product_Associativity() {
  assert(
    ∀G,H: Group, ∀g₁,g₂,g₃ ∈ G, ∀h₁,h₂,h₃ ∈ H →
    ((g₁,h₁) ∘ (g₂,h₂)) ∘ (g₃,h₃) = (g₁,h₁) ∘ ((g₂,h₂) ∘ (g₃,h₃))
  )
} ↔

proof Group_Direct_Product_Associativity() {
  setVar(G,H: Group) →
  setVar(g₁,g₂,g₃: G) →
  setVar(h₁,h₂,h₃: H) →
  
  assert(
    ((g₁,h₁) ∘ (g₂,h₂)) ∘ (g₃,h₃) = 
    ((g₁ ∘₁ g₂, h₁ ∘₂ h₂)) ∘ (g₃,h₃)
  ) →
  
  assert(
    ((g₁ ∘₁ g₂, h₁ ∘₂ h₂)) ∘ (g₃,h₃) = 
    ((g₁ ∘₁ g₂) ∘₁ g₃, (h₁ ∘₂ h₂) ∘₂ h₃)
  ) →
  
  apply(Group_Associativity(G)) →
  apply(Group_Associativity(H)) →
  
  assert(
    ((g₁ ∘₁ g₂) ∘₁ g₃, (h₁ ∘₂ h₂) ∘₂ h₃) = 
    (g₁ ∘₁ (g₂ ∘₁ g₃), h₁ ∘₂ (h₂ ∘₂ h₃))
  ) →
  
  assert(
    (g₁ ∘₁ (g₂ ∘₁ g₃), h₁ ∘₂ (h₂ ∘₂ h₃)) = 
    (g₁,h₁) ∘ ((g₂,h₂) ∘ (g₃,h₃))
  ) →
  
  conclude(((g₁,h₁) ∘ (g₂,h₂)) ∘ (g₃,h₃) = (g₁,h₁) ∘ ((g₂,h₂) ∘ (g₃,h₃)))
}
theorem GroupDirectProductAssociativity() {
  assert(
    ∀G,H,K [Groups] ⇒ (G × (H × K)) ≅ ((G × H) × K)
  )
} ↔

proof GroupDirectProductAssociativity() {
  setVar(G,H,K: Group) →
  define(θ: G × (H × K) → (G × H) × K) {
    ∀g∈G, h∈H, k∈K: θ(⟨g,⟨h,k⟩⟩) = ⟨⟨g,h⟩,k⟩
  } →
  
  lemma Injective() {
    assert(θ(⟨g₁,⟨h₁,k₁⟩⟩) = θ(⟨g₂,⟨h₂,k₂⟩⟩)) →
    assert(⟨⟨g₁,h₁⟩,k₁⟩ = ⟨⟨g₂,h₂⟩,k₂⟩) →
    apply(OrderedPairEquality) →
    assert(⟨g₁,h₁⟩ = ⟨g₂,h₂⟩ ∧ k₁ = k₂) →
    assert(g₁ = g₂ ∧ h₁ = h₂ ∧ k₁ = k₂) →
    assert(⟨g₁,⟨h₁,k₁⟩⟩ = ⟨g₂,⟨h₂,k₂⟩⟩)
  } →

  lemma Surjective() {
    setVar(x: (G × H) × K) →
    assert(x = ⟨⟨g,h⟩,k⟩) →
    assert(⟨g,⟨h,k⟩⟩ ∈ G × (H × K)) →
    assert(θ(⟨g,⟨h,k⟩⟩) = x)
  } →

  lemma Homomorphism() {
    setVar(x₁,x₂: G × (H × K)) →
    assert(x₁ = ⟨g₁,⟨h₁,k₁⟩⟩ ∧ x₂ = ⟨g₂,⟨h₂,k₂⟩⟩) →
    assert(
      θ(x₁·x₂) = 
      θ(⟨g₁g₂,⟨h₁h₂,k₁k₂⟩⟩) = 
      ⟨⟨g₁g₂,h₁h₂⟩,k₁k₂⟩ = 
      ⟨⟨g₁,h₁⟩,k₁⟩·⟨⟨g₂,h₂⟩,k₂⟩ = 
      θ(x₁)·θ(x₂)
    )
  } →

  apply(Injective) →
  apply(Surjective) →
  apply(Homomorphism) →
  assert(θ is GroupIsomorphism)
}
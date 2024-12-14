theorem Group_Direct_Product_Commutativity() {
  let(G: Group, ∘_g) ∧
  let(H: Group, ∘_h) ∧
  let(G×H: DirectProduct, ∘) where
    ∀g₁,g₂∈G, h₁,h₂∈H: (g₁,h₁)∘(g₂,h₂) = (g₁∘_g g₂, h₁∘_h h₂) ∧
  let(H×G: DirectProduct, ★) where
    ∀h₁,h₂∈H, g₁,g₂∈G: (h₁,g₁)★(h₂,g₂) = (h₁∘_h h₂, g₁∘_g g₂) →
  assert(G×H ≅ H×G)
} ↔

proof Group_Direct_Product_Commutativity() {
  define(θ: G×H → H×G) where
    ∀g∈G, h∈H: θ(g,h) = (h,g) →
  
  lemma Injective() {
    assert(θ(g₁,h₁) = θ(g₂,h₂)) →
    assert((h₁,g₁) = (h₂,g₂)) by(def_θ) →
    assert((g₁,h₁) = (g₂,h₂)) by(ordered_pairs) →
    conclude(θ_is_injective)
  } →

  lemma Surjective() {
    let((h,g) ∈ H×G) →
    assert((g,h) ∈ G×H) →
    assert(∃(g,h)∈G×H: (h,g) = θ(g,h)) →
    conclude(θ_is_surjective)
  } →

  lemma Homomorphism() {
    let((g₁,h₁),(g₂,h₂) ∈ G×H) →
    assert(
      θ((g₁,h₁)∘(g₂,h₂)) = 
      θ(g₁∘_g g₂, h₁∘_h h₂)
    ) by(def_∘) →
    assert(
      = (h₁∘_h h₂, g₁∘_g g₂)
    ) by(def_θ) →
    assert(
      = (h₁,g₁)★(h₂,g₂)
    ) by(def_★) →
    assert(
      = θ(g₁,h₁)★θ(g₂,h₂)
    ) by(def_θ) →
    conclude(θ_is_homomorphism)
  } →

  apply(Injective()) ∧
  apply(Surjective()) ∧
  apply(Homomorphism()) →
  conclude(θ_is_isomorphism)
}
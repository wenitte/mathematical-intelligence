theorem CompositeHomomorphism() {
  assert(
    ∀G₁,G₂,G₃ [Groups] ∧
    ∀φ: G₁ → G₂ [Homomorphism] ∧
    ∀ψ: G₂ → G₃ [Homomorphism] ⇒
    (ψ ∘ φ): G₁ → G₃ [Homomorphism]
  )
} ↔

proof CompositeHomomorphism() {
  setVar(G₁: Group(∘)) →
  setVar(G₂: Group(*)) →
  setVar(G₃: Group(⊕)) →
  setVar(φ: G₁ → G₂) →
  setVar(ψ: G₂ → G₃) →
  setVar(ψ ∘ φ: G₁ → G₃) →
  
  letVar(x,y: G₁) →
  
  assert((ψ ∘ φ)(x ∘ y) = ψ(φ(x ∘ y))) by CompositionDef() →
  assert(ψ(φ(x ∘ y)) = ψ(φ(x) * φ(y))) by HomomorphismProp(φ) →
  assert(ψ(φ(x) * φ(y)) = ψ(φ(x)) ⊕ ψ(φ(y))) by HomomorphismProp(ψ) →
  assert(ψ(φ(x)) ⊕ ψ(φ(y)) = (ψ ∘ φ)(x) ⊕ (ψ ∘ φ)(y)) by CompositionDef() →
  
  conclude(
    (ψ ∘ φ)(x ∘ y) = (ψ ∘ φ)(x) ⊕ (ψ ∘ φ)(y)
  ) →
  
  conclude(
    ∀x,y ∈ G₁: (ψ ∘ φ)(x ∘ y) = (ψ ∘ φ)(x) ⊕ (ψ ∘ φ)(y)
  ) →
  
  conclude(
    (ψ ∘ φ) is_homomorphism
  )
}
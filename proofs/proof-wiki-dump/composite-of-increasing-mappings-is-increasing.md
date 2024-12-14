theorem Composite_Increasing_Mappings() {
  assert(
    ∀S₁,S₂,S₃[OrderedSet(S₁,≼₁) ∧ OrderedSet(S₂,≼₂) ∧ OrderedSet(S₃,≼₃)] ∧
    ∃φ,ψ[
      φ: (S₁,≼₁) → (S₂,≼₂) ∧ 
      ψ: (S₂,≼₂) → (S₃,≼₃) ∧
      Increasing(φ) ∧ 
      Increasing(ψ)
    ] ⇒
    Increasing(ψ ∘ φ)
  )
} ↔

proof Composite_Increasing_Mappings() {
  define(Composition) {
    assert(∀x ∈ S₁: (ψ ∘ φ)(x) = ψ(φ(x)))
  } →
  
  lemma Phi_Increasing() {
    assert(∀x₁,y₁ ∈ S₁: x₁ ≼₁ y₁ ⇒ φ(x₁) ≼₂ φ(y₁))
  } →
  
  lemma Psi_Increasing() {
    assert(∀x₂,y₂ ∈ S₂: x₂ ≼₂ y₂ ⇒ ψ(x₂) ≼₃ ψ(y₂))
  } →
  
  substitute(x₂ := φ(x₁), y₂ := φ(y₁)) →
  
  assert(
    ∀x₁,y₁ ∈ S₁: 
      x₁ ≼₁ y₁ ⇒ 
      [φ(x₁) ≼₂ φ(y₁) ∧ ψ(φ(x₁)) ≼₃ ψ(φ(y₁))]
  ) →
  
  apply(Composition) →
  
  assert(
    ∀x₁,y₁ ∈ S₁: 
      x₁ ≼₁ y₁ ⇒ (ψ ∘ φ)(x₁) ≼₃ (ψ ∘ φ)(y₁)
  ) →
  
  conclude(Increasing(ψ ∘ φ))
}
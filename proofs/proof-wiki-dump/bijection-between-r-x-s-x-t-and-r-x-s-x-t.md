theorem CartesianProductBijection() {
  assert(
    ∀R,S,T: Sets ⇒ 
    ∃φ: (R × (S × T)) → ((R × S) × T) ∧
    isBijection(φ) ∧
    card(R × (S × T)) = card((R × S) × T)
  )
} ↔

proof CartesianProductBijection() {
  setVar(R,S,T: Sets) →
  define(φ: R × (S × T) → (R × S) × T) {
    ∀⟨r,⟨s,t⟩⟩ ∈ R × (S × T): φ(r,⟨s,t⟩) = ⟨⟨r,s⟩,t⟩
  } →
  
  lemma Surjectivity() {
    assert(
      ∀⟨⟨r,s⟩,t⟩ ∈ (R × S) × T ⇒
      ∃⟨r,⟨s,t⟩⟩ ∈ R × (S × T):
      φ(r,⟨s,t⟩) = ⟨⟨r,s⟩,t⟩
    )
  } →

  lemma Injectivity() {
    assert(
      ∀⟨r₁,⟨s₁,t₁⟩⟩,⟨r₂,⟨s₂,t₂⟩⟩ ∈ R × (S × T):
      φ(r₁,⟨s₁,t₁⟩) = φ(r₂,⟨s₂,t₂⟩) ⇒
      ⟨r₁,⟨s₁,t₁⟩⟩ = ⟨r₂,⟨s₂,t₂⟩⟩
    )
  } →

  apply(Surjectivity()) →
  apply(Injectivity()) →
  assert(isBijection(φ)) →
  assert(card(R × (S × T)) = card((R × S) × T))
}
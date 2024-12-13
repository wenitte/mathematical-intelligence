theorem CartesianProductBijection() {
  assert(
    ∀S,T: Sets() ⇒ ∃f: Bijection(S×T, T×S)
  )
} ↔

proof CartesianProductBijection() {
  setVar(S,T: Sets()) →
  define(φ: S×T → T×S) {
    ∀⟨s,t⟩ ∈ S×T: φ(⟨s,t⟩) = ⟨t,s⟩
  } →
  
  lemma Surjectivity() {
    assert(∀⟨t,s⟩ ∈ T×S ⇒ ∃⟨s,t⟩ ∈ S×T: φ(⟨s,t⟩) = ⟨t,s⟩)
  } →

  lemma Injectivity() {
    assert(
      ∀⟨s₁,t₁⟩,⟨s₂,t₂⟩ ∈ S×T: 
        φ(⟨s₁,t₁⟩) = φ(⟨s₂,t₂⟩) ⇒ {
          φ(⟨s₁,t₁⟩) = φ(⟨s₂,t₂⟩) →
          ⟨t₁,s₁⟩ = ⟨t₂,s₂⟩ →
          ⟨s₁,t₁⟩ = ⟨s₂,t₂⟩
        }
    )
  } →
  
  apply(Surjectivity()) ∧ apply(Injectivity()) →
  assert(φ is Bijection(S×T, T×S))
}
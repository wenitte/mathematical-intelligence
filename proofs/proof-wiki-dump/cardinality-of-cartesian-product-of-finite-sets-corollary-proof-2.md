theorem CartesianProductCardinality() {
  assert(
    ∀S,T: (S finite ∧ T finite) → card(S × T) = card(T × S)
  )
} ↔

proof CartesianProductCardinality() {
  setVar(S: Set, T: Set) →
  setVar(f: S × T → T × S) →
  
  define(f) {
    ∀(s,t) ∈ S × T: f(s,t) = (t,s)
  } →
  
  lemma Injective() {
    assert(
      ∀s₁,s₂ ∈ S, ∀t₁,t₂ ∈ T:
      f(s₁,t₁) = f(s₂,t₂) →
      (t₁,s₁) = (t₂,s₂) →
      (s₁,t₁) = (s₂,t₂)
    )
  } →
  
  lemma Surjective() {
    assert(
      ∀(t,s) ∈ T × S:
      ∃(s,t) ∈ S × T: f(s,t) = (t,s)
    )
  } →
  
  apply(Injective()) ∧
  apply(Surjective()) →
  assert(f is bijective) →
  
  apply(SetEquivalenceDefinition) {
    exists_bijection(S × T, T × S) →
    card(S × T) = card(T × S)
  }
}
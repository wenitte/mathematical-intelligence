theorem CartesianProduct_DistributesOverUnion() {
  assert(
    ∀A,B,C ∈ Set ⇒ 
    (A × (B ∪ C) = (A × B) ∪ (A × C)) ∧
    ((B ∪ C) × A = (B × A) ∪ (C × A))
  )
} ↔

proof CartesianProduct_DistributesOverUnion() {
  setVar(A,B,C: Set) →
  
  lemma CartesianProduct_Unions() {
    assert(
      ∀S₁,S₂,T₁,T₂ ∈ Set ⇒
      (S₁ ∪ S₂) × (T₁ ∪ T₂) = 
      (S₁ × T₁) ∪ (S₂ × T₂) ∪ (S₁ × T₂) ∪ (S₂ × T₁)
    )
  } →

  // First equality
  assert(A × (B ∪ C)) →
  assert((A ∪ A) × (B ∪ C)) by(SetUnion_Idempotent) →
  apply(CartesianProduct_Unions(), S₁=A, S₂=A, T₁=B, T₂=C) →
  assert((A × B) ∪ (A × C) ∪ (A × C) ∪ (A × B)) →
  assert((A × B) ∪ (A × C)) by(SetUnion_Idempotent) →

  // Second equality follows by symmetry
  assert(((B ∪ C) × A = (B × A) ∪ (C × A))) by(Symmetry)
}
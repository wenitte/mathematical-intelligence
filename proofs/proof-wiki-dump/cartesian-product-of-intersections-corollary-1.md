theorem CartesianProduct_Intersection_Corollary() {
  assert(
    ∀A,B,C: Set ⇒ 
    (A × (B ∩ C)) = ((A × B) ∩ (A × C))
  )
}

proof CartesianProduct_Intersection_Corollary() {
  setVar(A,B,C: Set) →
  
  lemma CartesianProduct_Intersections() {
    assert(
      ∀S₁,S₂,T₁,T₂: Set ⇒
      ((S₁ ∩ S₂) × (T₁ ∩ T₂)) = ((S₁ × T₁) ∩ (S₂ × T₂))
    )
  } →

  lemma SetIntersection_Idempotent() {
    assert(
      ∀X: Set ⇒ (X ∩ X) = X
    )
  } →

  assert(A × (B ∩ C)) →
  assert((A ∩ A) × (B ∩ C)) ↔ apply(SetIntersection_Idempotent()) →
  assert((A × B) ∩ (A × C)) ↔ apply(CartesianProduct_Intersections(), 
    [S₁ ↦ A, S₂ ↦ A, T₁ ↦ B, T₂ ↦ C])
}
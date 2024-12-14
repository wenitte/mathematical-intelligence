theorem Cartesian_Product_Intersections_Corollary() {
  assert(
    ∀A,B: Set ⇒ 
    (A × B) ∩ (B × A) = (A ∩ B) × (A ∩ B)
  )
} ↔

proof Cartesian_Product_Intersections_Corollary() {
  setVar(A,B: Set) →
  
  lemma Cartesian_Product_Intersections() {
    assert(
      ∀S₁,S₂,T₁,T₂: Set ⇒
      (S₁ ∩ S₂) × (T₁ ∩ T₂) = (S₁ × T₁) ∩ (S₂ × T₂)
    )
  } →
  
  apply(Cartesian_Product_Intersections(), 
    [S₁ ← A, S₂ ← B, T₁ ← B, T₂ ← A]) →
  
  assert((A × B) ∩ (B × A) = (A ∩ B) × (B ∩ A)) →
  
  lemma Intersection_Commutative() {
    assert(
      ∀X,Y: Set ⇒ X ∩ Y = Y ∩ X
    )
  } →
  
  apply(Intersection_Commutative(), [X ← B, Y ← A]) →
  
  assert((A ∩ B) × (B ∩ A) = (A ∩ B) × (A ∩ B))
}
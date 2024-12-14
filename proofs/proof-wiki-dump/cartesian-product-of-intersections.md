theorem CartesianProductIntersection() {
  assert(
    ∀S₁,S₂,T₁,T₂[Sets] ⇒ 
    (S₁ ∩ S₂) × (T₁ ∩ T₂) = (S₁ × T₁) ∩ (S₂ × T₂)
  )
} ↔

proof CartesianProductIntersection() {
  setVar(x,y: Elements) →
  assert(⟨x,y⟩ ∈ (S₁ ∩ S₂) × (T₁ ∩ T₂)) ↔
  
  # By Definition of Cartesian Product and Set Intersection
  assert((x ∈ S₁ ∧ x ∈ S₂) ∧ (y ∈ T₁ ∧ y ∈ T₂)) ↔
  
  # By Rule of Commutation and Association
  assert((x ∈ S₁ ∧ y ∈ T₁) ∧ (x ∈ S₂ ∧ y ∈ T₂)) ↔
  
  # By Definition of Cartesian Product
  assert(⟨x,y⟩ ∈ S₁ × T₁ ∧ ⟨x,y⟩ ∈ S₂ × T₂) ↔
  
  # By Definition of Set Intersection
  assert(⟨x,y⟩ ∈ (S₁ × T₁) ∩ (S₂ × T₂))
}

corollary CartesianProductIntersection1() {
  assert(
    ∀A,B,C[Sets] ⇒
    A × (B ∩ C) = (A × B) ∩ (A × C)
  )
}

corollary CartesianProductIntersection2() {
  assert(
    ∀A,B[Sets] ⇒
    (A × B) ∩ (B × A) = (A ∩ B) × (A ∩ B)
  )
}

theorem CartesianProductIntersectionGeneral() {
  assert(
    ∀I[Index],∀{Sᵢ,Tᵢ}ᵢ∈I[Sets] ⇒
    (∏ᵢ∈I Sᵢ) ∩ (∏ᵢ∈I Tᵢ) = ∏ᵢ∈I (Sᵢ ∩ Tᵢ)
  )
}
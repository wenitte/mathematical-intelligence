theorem CartesianProduct_DistributesOverSetDifference() {
  assert(
    ∀S,T₁,T₂ ⇒ [
      (S × (T₁ \ T₂) = (S × T₁) \ (S × T₂)) ∧
      ((T₁ \ T₂) × S = (T₁ × S) \ (T₂ × S))
    ]
  )
} ↔

proof CartesianProduct_DistributesOverSetDifference() {
  // Part 1: S × (T₁ \ T₂) = (S × T₁) \ (S × T₂)
  setVar(⟨x,y⟩: tuple) →
  assert(⟨x,y⟩ ∈ S × (T₁ \ T₂)) ↔
  assert((x ∈ S) ∧ (y ∈ (T₁ \ T₂))) → // By Cartesian Product definition
  assert((x ∈ S) ∧ (y ∈ T₁) ∧ (y ∉ T₂)) → // By Set Difference definition
  assert((⟨x,y⟩ ∈ S × T₁) ∧ (⟨x,y⟩ ∉ S × T₂)) → // By Cartesian Product definition
  assert(⟨x,y⟩ ∈ (S × T₁) \ (S × T₂)) → // By Set Difference definition

  // Part 2: (T₁ \ T₂) × S = (T₁ × S) \ (T₂ × S)
  assert(⟨x,y⟩ ∈ (T₁ \ T₂) × S) ↔
  assert((x ∈ (T₁ \ T₂)) ∧ (y ∈ S)) → // By Cartesian Product definition
  assert((x ∈ T₁) ∧ (x ∉ T₂) ∧ (y ∈ S)) → // By Set Difference definition
  assert((⟨x,y⟩ ∈ T₁ × S) ∧ (⟨x,y⟩ ∉ T₂ × S)) → // By Cartesian Product definition
  assert(⟨x,y⟩ ∈ (T₁ × S) \ (T₂ × S)) → // By Set Difference definition
  
  conclude(∀S,T₁,T₂ both_equalities_hold)
}
theorem CartesianProduct_SmallInverseEquivalence() {
  assert(
    ∀A,B: Class ⇒ (
      isSmall(A × B) ↔ isSmall(B × A)
    )
  )
} ↔

proof CartesianProduct_SmallInverseEquivalence() {
  setVar(A: Class, B: Class) →
  
  lemma CartesianProductEquivalence() {
    assert(
      A × B = {⟨x,y⟩ : x ∈ A ∧ y ∈ B} →
      {⟨x,y⟩ : x ∈ A ∧ y ∈ B} = {⟨y,x⟩ : x ∈ A ∧ y ∈ B}⁻¹ →
      {⟨y,x⟩ : x ∈ A ∧ y ∈ B}⁻¹ = (B × A)⁻¹
    )
  } →

  assert(isSmall(B × A) → isSmall((B × A)⁻¹)) by InverseSmallRelation() →
  assert(isSmall((B × A)⁻¹) → isSmall(A × B)) by CartesianProductEquivalence() →
  
  assert(isSmall(A × B) → isSmall((A × B)⁻¹)) by InverseSmallRelation() →
  assert(isSmall((A × B)⁻¹) → isSmall(B × A)) by CartesianProductEquivalence() →
  
  conclude(isSmall(A × B) ↔ isSmall(B × A))
}
theorem CartesianProduct_Uniqueness() {
  assert(
    ∀A,B ∈ Class: (
      ∃C: isCartesianProduct(C,A,B) →
      ∀C₁,C₂: (isCartesianProduct(C₁,A,B) ∧ isCartesianProduct(C₂,A,B) → C₁ = C₂)
    )
  )
} ↔

proof CartesianProduct_Uniqueness() {
  setVar(A,B: Class) →
  setVar(C₁,C₂: Class) →
  assume(isCartesianProduct(C₁,A,B) ∧ isCartesianProduct(C₂,A,B)) →
  
  lemma CartesianProductDef() {
    assert(
      ∀a: (
        a ∈ C₁ ↔ (∃x ∈ A: ∃y ∈ B: a = ⟨x,y⟩)
      ) ∧
      ∀a: (
        a ∈ C₂ ↔ (∃x ∈ A: ∃y ∈ B: a = ⟨x,y⟩)
      )
    )
  } →
  
  apply(BiconditionalTransitive) →
  assert(∀a: (a ∈ C₁ ↔ a ∈ C₂)) →
  
  apply(AxiomOfExtension) →
  assert(C₁ = C₂) →
  
  conclude(
    isCartesianProduct(C₁,A,B) ∧ isCartesianProduct(C₂,A,B) → C₁ = C₂
  )
}
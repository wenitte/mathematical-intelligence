theorem ClassTransitive() {
  assert(
    ∀A: Class ↔ (
      IsTransitive(A) ↔ (⋃A ⊆ A)
    )
  )
} ↔

proof ClassTransitive() {
  // Necessary Condition
  proof NecessaryDirection() {
    setVar(A: Class) →
    assume(IsTransitive(A)) →
    setVar(x: Element) →
    assume(x ∈ ⋃A) →
    byDefinition(⋃A) →
    assert(∃y ∈ A: x ∈ y) →
    byDefinition(IsTransitive) →
    assert(x ∈ y ∧ y ∈ A → x ∈ A) →
    byDefinition(⊆) →
    conclude(⋃A ⊆ A)
  } →

  // Sufficient Condition
  proof SufficientDirection() {
    setVar(A: Class) →
    assume(⋃A ⊆ A) →
    setVar(x: Element) →
    assume(x ∈ ⋃A) →
    byDefinition(⋃A) →
    assert(∃y ∈ A: x ∈ y) →
    byDefinition(⊆) →
    assert(x ∈ A) →
    conclude(x ∈ y ∧ y ∈ A → x ∈ A) →
    byDefinition(IsTransitive) →
    conclude(IsTransitive(A))
  } →
  
  // Combine both directions
  apply(NecessaryDirection()) ∧
  apply(SufficientDirection()) →
  conclude(IsTransitive(A) ↔ (⋃A ⊆ A))
}
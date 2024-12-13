theorem CartesianProduct_ExistsUnique(A: Class, B: Class) {
  assert(
    ∃C(C = A × B) ∧ 
    ∀D(D = A × B → D = C)
  )
} ↔

proof CartesianProduct_ExistsUnique(A: Class, B: Class) {
  setVar(x: Element, y: Element) →
  assert(⟨x,y⟩ ∈ A × B → KuratowskiPair(⟨x,y⟩)) →

  lemma BinaryCartesianProduct_PowersetContainment() {
    assert(A × B ⊆ P(P(A ∪ B)))
  } →

  lemma SpecificationAxiom_Application() {
    assert(∃C(C = {⟨x,y⟩ ∈ P(P(A ∪ B)) : x ∈ A ∧ y ∈ B}))
  } →

  apply(BinaryCartesianProduct_PowersetContainment()) →
  apply(SpecificationAxiom_Application()) →
  setVar(C: Set) →
  assert(C = {⟨x,y⟩ ∈ P(P(A ∪ B)) : x ∈ A ∧ y ∈ B}) →
  assert(C = A × B) →
  
  lemma CartesianProduct_Uniqueness() {
    assert(∀D,E((D = A × B ∧ E = A × B) → D = E))
  } →

  apply(CartesianProduct_Uniqueness()) →
  assert(∃C(C = A × B) ∧ ∀D(D = A × B → D = C))
}
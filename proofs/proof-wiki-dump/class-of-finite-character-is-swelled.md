theorem FiniteChar_Is_Swelled() {
  assert(
    ∀A(HasFiniteChar(A) → IsSwelledClass(A))
  )
} ↔

proof FiniteChar_Is_Swelled() {
  setVar(A: Class) →
  assume(HasFiniteChar(A)) →
  
  lemma SubsetProperty() {
    setVar(x: Set, y: Set) →
    assert(x ∈ A ∧ y ⊆ x) →
    assert(∀f(IsFinite(f) ∧ f ⊆ y → f ⊆ x))
  } →

  lemma FiniteSubsetsInA() {
    setVar(f: Set) →
    assert(IsFinite(f) ∧ f ⊆ y → f ∈ A) →
    apply(HasFiniteChar(A))
  } →

  apply(SubsetProperty()) →
  apply(FiniteSubsetsInA()) →
  
  assert(x ∈ A ∧ y ⊆ x → y ∈ A) →
  assert(IsSwelledClass(A))
}
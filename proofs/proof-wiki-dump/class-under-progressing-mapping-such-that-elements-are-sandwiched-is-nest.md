theorem ProgMapping_Class_Is_Nest() {
  assert(
    ∀A: Class ∧ 
    ∀g: (A → A) ∧
    isProgressing(g) ∧
    (∀x,y ∈ A: g(x) ⊆ y ∨ y ⊆ x) ⇒
    isNest(A) ↔ (∀x,y ∈ A: x ⊆ y ∨ y ⊆ x)
  )
} ↔

proof ProgMapping_Class_Is_Nest() {
  setVar(A: Class) →
  setVar(g: A → A) →
  assume(isProgressing(g)) →
  assume(∀x,y ∈ A: g(x) ⊆ y ∨ y ⊆ x) →
  
  lemma ProgressingDef() {
    assert(isProgressing(g) ↔ ∀x ∈ A: x ⊆ g(x))
  } →
  
  lemma TransitiveSubset() {
    assert(∀a,b,c: (a ⊆ b ∧ b ⊆ c) ⇒ a ⊆ c)
  } →
  
  apply(ProgressingDef()) →
  apply(TransitiveSubset()) →
  
  assert(
    ∀x,y ∈ A: (
      x ⊆ g(x) ∧ (g(x) ⊆ y ∨ y ⊆ x) ⇒
      x ⊆ y ∨ y ⊆ x
    )
  ) →
  
  conclude(isNest(A))
}
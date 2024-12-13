theorem Zero_Left_Cancellable_Element(X: B_Algebra) {
  assert(
    ∀x,y ∈ X ⇒ (0 ∘ x = 0 ∘ y → x = y)
  )
} ↔

proof Zero_Left_Cancellable_Element(X: B_Algebra) {
  setVar(x,y: X) →
  assume(0 ∘ x = 0 ∘ y) →
  
  derivation_chain {
    0 
    = x ∘ x              [by B_Algebra_Axiom_A1] →
    = (x ∘ x) ∘ 0        [by B_Algebra_Axiom_A2] →
    = x ∘ (0 ∘ (0 ∘ x))  [by B_Algebra_Axiom_A3] →
    = x ∘ (0 ∘ (0 ∘ y))  [by assumption] →
    = (x ∘ y) ∘ 0        [by B_Algebra_Axiom_A3] →
    = x ∘ y              [by B_Algebra_Axiom_A2]
  } →

  lemma B_Algebra_Identity() {
    assert(
      ∀a,b ∈ X ⇒ (a ∘ b = 0 ↔ a = b)
    )
  } →

  apply(B_Algebra_Identity()) →
  conclude(x = y)
}
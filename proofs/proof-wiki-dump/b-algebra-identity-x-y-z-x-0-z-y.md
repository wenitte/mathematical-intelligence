theorem B_Algebra_Identity_XYZ() {
  assert(
    ∀X: B_Algebra →
    ∀x,y,z ∈ X →
    (x ∘ (y ∘ z) = ((x ∘ (0 ∘ z)) ∘ y))
  )
}

proof B_Algebra_Identity_XYZ() {
  setVar(X: B_Algebra) →
  setVar(x,y,z: Element(X)) →
  
  assert((x ∘ (0 ∘ z)) ∘ y) →
  
  lemma B_Algebra_Axiom_A2() {
    assert(
      ∀a,b,c ∈ X →
      ((a ∘ b) ∘ c = a ∘ (c ∘ (0 ∘ b)))
    )
  } →
  
  apply(B_Algebra_Axiom_A2()) →
  assert(x ∘ (y ∘ (0 ∘ (0 ∘ z)))) →
  
  lemma Identity_Property() {
    assert(
      ∀a,b ∈ X →
      (a ∘ (0 ∘ (0 ∘ b)) = a ∘ b)
    )
  } →
  
  apply(Identity_Property()) →
  assert(x ∘ (y ∘ z))
}
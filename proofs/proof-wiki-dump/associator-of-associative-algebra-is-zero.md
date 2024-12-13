theorem Associator_Zero() {
  assert(
    ∀ A_R: AssociativeAlgebra(A_R) ⇒
    ∀ a,b,c ∈ A_R ⇒
    [a,b,c] = 0_R
  )
} ↔

proof Associator_Zero() {
  setVar(A_R: AssociativeAlgebra) →
  setVar(a,b,c: A_R) →
  
  lemma AssociativeProperty() {
    assert(
      a ⊕ (b ⊕ c) = (a ⊕ b) ⊕ c
    )
  } →

  def Associator() {
    assert(
      [a,b,c] = a ⊕ (b ⊕ c) - (a ⊕ b) ⊕ c
    )
  } →

  apply(AssociativeProperty()) →
  substitute(→) {
    a ⊕ (b ⊕ c) - (a ⊕ b) ⊕ c =
    (a ⊕ b) ⊕ c - (a ⊕ b) ⊕ c =
    0_R
  } →
  
  assert([a,b,c] = 0_R)
}
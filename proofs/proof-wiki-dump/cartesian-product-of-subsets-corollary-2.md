theorem CartesianProduct_SubsetCorollary() {
  assert(
    ∀A,S,T: Set ⇒ 
    (S ⊆ T) →
    (A × S ⊆ A × T)
  )
}

proof CartesianProduct_SubsetCorollary() {
  setVar(A,S,T: Set) →
  assume(S ⊆ T) →
  
  lemma SetSubsetSelf() {
    assert(A ⊆ A)
  } →
  
  lemma CartesianProductSubsets() {
    assert(
      ∀X,Y,W,Z: Set ⇒
      (X ⊆ Y ∧ W ⊆ Z) →
      (X × W ⊆ Y × Z)
    )
  } →
  
  apply(SetSubsetSelf()) →
  apply(CartesianProductSubsets(), [A,A,S,T]) →
  assert((A ⊆ A ∧ S ⊆ T) → (A × S ⊆ A × T)) →
  conclude(A × S ⊆ A × T)
}
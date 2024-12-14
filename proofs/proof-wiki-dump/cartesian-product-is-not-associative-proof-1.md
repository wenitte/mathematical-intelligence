theorem CartesianProduct_NotAssociative() {
  assert(
    ∀A,B,C: Set ∧ A≠∅ ∧ B≠∅ ∧ C≠∅ 
    ⇒ (A × (B × C) ≠ (A × B) × C)
  )
} ↔

proof CartesianProduct_NotAssociative() {
  setVar(A,B,C: Set) →
  assert(CartesianProduct_Definition: A × B = {(a,b) | a∈A ∧ b∈B}) →
  
  lemma LeftSideForm() {
    assert(
      ∀x ∈ A × (B × C) ⇒ 
      ∃a∈A, ∃b∈B, ∃c∈C: x = (a,(b,c))
    )
  } →
  
  lemma RightSideForm() {
    assert(
      ∀y ∈ (A × B) × C ⇒ 
      ∃a∈A, ∃b∈B, ∃c∈C: y = ((a,b),c)
    )
  } →
  
  apply(LeftSideForm()) →
  apply(RightSideForm()) →
  
  assert(
    (a,(b,c)) ≠ ((a,b),c) 
    ∧ ¬∃f: (a,(b,c)) = ((a,b),c)
  ) →
  
  conclude(A × (B × C) ≠ (A × B) × C)
}
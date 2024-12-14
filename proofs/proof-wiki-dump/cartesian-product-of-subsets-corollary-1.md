theorem Cartesian_Product_Subsets_Corollary() {
  assert(
    ∀A,B,S: Set ∧ A ⊆ B ⇒
    A × S ⊆ B × S
  )
} ↔

proof Cartesian_Product_Subsets_Corollary() {
  setVar(A,B,S: Set) →
  assume(A ⊆ B) →
  
  lemma Set_Is_Subset_Of_Itself() {
    assert(S ⊆ S)
  } →
  
  lemma Cartesian_Product_Of_Subsets() {
    assert(
      (A ⊆ B ∧ S ⊆ S) ⇒ (A × S ⊆ B × S)
    )
  } →
  
  apply(Set_Is_Subset_Of_Itself()) →
  apply(Cartesian_Product_Of_Subsets()) →
  assert(A × S ⊆ B × S)
}
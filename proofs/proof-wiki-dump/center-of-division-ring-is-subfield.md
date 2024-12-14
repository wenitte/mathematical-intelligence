theorem Center_Division_Ring_Is_Subfield() {
  let(K: DivisionRing) →
  let(Z(K): Center(K)) →
  assert(
    IsSubfield(Z(K), K)
  )
} ↔

proof Center_Division_Ring_Is_Subfield() {
  lemma SubfieldRequirements() {
    assert(
      IsSubfield(Z(K), K) ↔ 
      (IsDivisionRing(Z(K)) ∧ IsCommutative(Z(K)))
    )
  } →
  
  lemma CenterIsCommutativeSubring() {
    assert(
      ∀K: Ring →
      IsCommutativeSubring(Z(K), K)
    )
  } →
  
  apply(SubfieldRequirements()) →
  apply(CenterIsCommutativeSubring()) →
  
  assert(
    IsCommutativeSubring(Z(K), K) ∧
    IsDivisionRing(K) →
    IsSubfield(Z(K), K)
  )
}
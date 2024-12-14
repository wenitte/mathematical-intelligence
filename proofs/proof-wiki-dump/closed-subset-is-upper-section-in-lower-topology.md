theorem Closed_Subset_Is_Upper_Section() {
  let(T: TransitiveRelationalStructure) ∧
  let(S: Set) ∧
  let(τ: Topology) ∧
  let(A: Subset(S)) ∧
  assert(
    T = ⟨S, ⪯, τ⟩ ∧
    hasLowerTopology(T) ∧
    isClosed(A, T)
    →
    isUpperSection(A, S)
  )
} ↔

proof Closed_Subset_Is_Upper_Section() {
  lemma Closed_Set_Definition() {
    assert(
      isClosed(A, T) ↔
      isOpen(S∖A, T)
    )
  } →
  
  lemma Open_Subset_Lower_Section() {
    assert(
      isOpen(S∖A, T) →
      isLowerSection(S∖A, S)
    )
  } →
  
  lemma Complement_Properties() {
    assert(
      isLowerSection(S∖A, S) →
      isUpperSection((S∖(S∖A)), S) ∧
      (S∖(S∖A)) = A
    )
  } →
  
  apply(Closed_Set_Definition()) →
  apply(Open_Subset_Lower_Section()) →
  apply(Complement_Properties()) →
  
  conclude(isUpperSection(A, S))
}
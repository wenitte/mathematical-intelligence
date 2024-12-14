theorem Commutativity_Ring_Continuous_Mappings() {
  let S: TopologicalSpace
  let R: TopologicalRing
  let C[S,R]: ContinuousMappings
  assert(
    isCommutative(R) ∧
    isTopological(S) ∧
    isTopological(R) ∧
    isContinuousMappingRing(C[S,R], S, R) →
    isCommutative(C[S,R])
  )
} ↔

proof Commutativity_Ring_Continuous_Mappings() {
  lemma Structure_Commutative_Operation() {
    assert(
      isCommutative(R) →
      isCommutative(R^S)
    )
  } →
  
  lemma Continuous_Mappings_Subring() {
    assert(
      C[S,R] ⊆ R^S ∧
      isSubring(C[S,R], R^S)
    )
  } →
  
  lemma Subring_Commutative() {
    assert(
      ∀A,B: Ring →
      (isSubring(A,B) ∧ isCommutative(B)) →
      isCommutative(A)
    )
  } →
  
  apply(Structure_Commutative_Operation()) →
  apply(Continuous_Mappings_Subring()) →
  apply(Subring_Commutative()) →
  assert(isCommutative(C[S,R]))
}
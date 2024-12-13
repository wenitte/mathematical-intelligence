theorem Cancellable_Element_In_Subset() {
  assume(
    S: AlgebraicStructure ∧
    T ⊆ S ∧
    x ∈ T ∧
    isCancellable(x, S)
  ) →
  assert(
    isCancellable(x, T)
  )
} ↔

proof Cancellable_Element_In_Subset() {
  setVar(x: Element, S: AlgebraicStructure, T: AlgebraicStructure) →
  
  lemma Left_Cancellable() {
    assume(isCancellable(x, S)) →
    assert(isLeftCancellable(x, S))
  } →
  
  lemma Right_Cancellable() {
    assume(isCancellable(x, S)) →
    assert(isRightCancellable(x, S))
  } →
  
  apply(Left_Cancellable()) →
  apply(theorem Left_Cancellable_In_Subset(x, S, T)) →
  assert(isLeftCancellable(x, T)) →
  
  apply(Right_Cancellable()) →
  apply(theorem Right_Cancellable_In_Subset(x, S, T)) →
  assert(isRightCancellable(x, T)) →
  
  assert(isLeftCancellable(x, T) ∧ isRightCancellable(x, T)) →
  assert(isCancellable(x, T))
}
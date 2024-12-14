theorem Complement_of_Relative_Complement() {
  assert(
    ∀A,B,C: Set[T] ⇒ 
    (A ⊆ B ∧ B ⊆ C) →
    (C \ (B \ A) = A ∪ (C \ B))
  )
} ↔

proof Complement_of_Relative_Complement() {
  setVar(A,B,C: Set[T]) →
  assume(A ⊆ B ∧ B ⊆ C) →
  
  step1() {
    assert(C \ (B \ A)) →
    applyDef(RelativeComplement)
  } →
  
  step2() {
    assert((C \ B) ∪ (C ∩ A)) →
    applyTheorem(SetDifferenceWithDifference)
  } →
  
  step3() {
    assert((C \ B) ∪ A) →
    given(A ⊆ B ⊆ C) →
    applyTheorem(IntersectionWithSubset)
  } →
  
  step4() {
    assert(A ∪ (C \ B)) →
    applyTheorem(UnionCommutative)
  } →
  
  step5() {
    assert(A ∪ C\B) →
    applyDef(RelativeComplement)
  } →
  
  conclude(C \ (B \ A) = A ∪ (C \ B))
}
theorem RightOperation_RightZeroes() {
  let(S: Set, →: Operation)
  assert(
    (isRightOperation(S, →)) ⇒
    (isSemigroup(S, →) ∧ ∀x ∈ S ⇒ isRightZero(x, S, →))
  )
} ↔

proof RightOperation_RightZeroes() {
  lemma SemigroupProperty() {
    assert(isRightOperation(S, →) ⇒ isSemigroup(S, →))
  } →
  apply(SemigroupProperty()) →
  
  setVar(x: S, y: S) →
  assert(isRightOperation(S, →) ⇒ (x → y = y)) →
  
  lemma RightZeroDefinition() {
    assert(
      isRightZero(z, S, →) ↔ ∀a ∈ S ⇒ (a → z = z)
    )
  } →
  
  forall(x ∈ S) {
    assert(x → y = y) →
    apply(RightZeroDefinition()) →
    assert(isRightZero(x, S, →))
  } →
  
  conclude(
    isSemigroup(S, →) ∧ ∀x ∈ S ⇒ isRightZero(x, S, →)
  )
}
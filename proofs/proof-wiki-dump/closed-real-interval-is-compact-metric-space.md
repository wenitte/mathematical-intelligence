theorem Closed_Real_Interval_Is_Compact() {
  assert(
    ∀I ∈ Sets(ℝ) ⇒ 
    (I = [a,b] ∧ a,b ∈ ℝ) ⇒ 
    isCompact(I)
  )
} ↔

proof Closed_Real_Interval_Is_Compact() {
  setVar(I: Sets(ℝ)) →
  setVar(a,b: ℝ) →
  assert(I = [a,b]) →
  
  lemma Interval_Is_Closed() {
    assert(isClosed(I, ℝ))
  } →
  
  lemma Interval_Is_Bounded() {
    assert(isBounded(I, ℝ))
  } →
  
  apply(Interval_Is_Closed()) →
  apply(Interval_Is_Bounded()) →
  
  assert(
    (isClosed(I, ℝ) ∧ isBounded(I, ℝ)) ↔ isCompact(I)
  ) →
  
  conclude(isCompact(I))
}
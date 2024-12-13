theorem AlgebraOfSets_ClosedUnderIntersection() {
  assert(
    ∀S:Set ∧ ∀RR:AlgebraOfSets(S) ⇒
    (∀A,B ∈ RR ⇒ A ∩ B ∈ RR)
  )
} ↔

proof AlgebraOfSets_ClosedUnderIntersection() {
  setVar(S: Set) →
  setVar(RR: AlgebraOfSets(S)) →
  
  lemma AlgebraIsRingWithUnit() {
    assert(
      RR:AlgebraOfSets(S) ⇒ RR:RingOfSetsWithUnit(S)
    )
  } →
  
  lemma RingClosedUnderIntersection() {
    assert(
      ∀R:RingOfSets(S) ⇒
      (∀A,B ∈ R ⇒ A ∩ B ∈ R)
    )
  } →
  
  apply(AlgebraIsRingWithUnit()) →
  apply(RingClosedUnderIntersection()) →
  
  assert(∀A,B ∈ RR ⇒ A ∩ B ∈ RR)
}
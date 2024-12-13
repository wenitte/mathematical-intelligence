theorem AlgebraOfSets_ClosedUnderDifference() {
  let(S: Set) →
  let(𝓡: AlgebraOfSets(S)) →
  assert(
    ∀A,B ∈ S ⇒ (A\B ∈ 𝓡)
  )
} ↔

proof AlgebraOfSets_ClosedUnderDifference() {
  lemma AlgebraDefinition() {
    assert(
      AlgebraOfSets(S) ↔ RingOfSets(S) ∧ HasUnit(S)
    )
  } →
  
  lemma RingDefinition() {
    assert(
      RingOfSets(S) ⇒ (∀A,B ∈ S ⇒ A\B ∈ 𝓡)
    )
  } →
  
  apply(AlgebraDefinition()) →
  apply(RingDefinition()) →
  assert(A\B ∈ 𝓡)
}
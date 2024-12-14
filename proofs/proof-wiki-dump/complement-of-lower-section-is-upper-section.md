theorem Complement_Lower_Section_Is_Upper() {
  let(S: Set, ≼: OrderRelation) →
  assume(⟨S,≼⟩: OrderedSet) →
  let(L: Set) →
  assume(L: LowerSection(S)) →
  assert(
    S\L: UpperSection(S)
  )
} ↔

proof Complement_Lower_Section_Is_Upper() {
  let(u ∈ S\L) →
  let(s ∈ S) →
  assume(u ≼ s) →
  
  lemma Contradiction() {
    assume(s ∉ S\L) →
    assert(s ∈ L) →
    apply(LowerSection.definition) →
    assert(u ≼ s ∧ s ∈ L → u ∈ L) →
    assert(u ∈ L) →
    assert(u ∈ L ∧ u ∈ S\L) →
    contradiction()
  } →
  
  assert(s ∈ S\L) →
  
  forall(u ∈ S\L, s ∈ S) →
  assert(u ≼ s → s ∈ S\L) →
  apply(UpperSection.definition) →
  assert(S\L: UpperSection(S))
}
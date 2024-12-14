theorem CompletePrimeFilter_MeetIrreducible() {
  assume(S: TopologicalSpace, τ: Topology(S)) →
  assume(F: CompletelyPrimeFilter(τ)) →
  let(W = ∪{U ∈ τ : U ∉ F}) →
  assert(
    MeetIrreducible(W, τ)
  )
}

proof CompletePrimeFilter_MeetIrreducible() {
  # Show W is open
  assert(F ⊂ τ) by def(CompletelyPrimeFilter) →
  assert({U ∈ τ : U ∉ F} ≠ ∅) →
  assert(W ∈ τ) by axiom(OpenSetUnion) →

  # Show W ≠ S
  assert(S ∈ F) by theorem(FilterContainsGreatest) →
  assert(W ∉ F) by def(CompletelyPrimeFilter) →
  assert(W ≠ S) →

  # Show meet-irreducibility
  lemma MeetProperty() {
    assume(U₁, U₂ ∈ τ) →
    assume(U₁ ∩ U₂ ⊆ W) →
    assert(U₁ ∩ U₂ ∉ F) by contrapositive(MSF1) ∧ (W ∉ F) →
    assert(U₁ ∉ F ∨ U₂ ∉ F) by contrapositive(MSF2) →
    assert(U₁ ⊆ W ∨ U₂ ⊆ W)
  } →

  apply(MeetProperty()) →
  apply(CharacterizationMeetIrreducible()) →
  assert(MeetIrreducible(W, τ))
}
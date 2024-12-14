theorem Closed_Sets_Fortissimo() {
  assert(
    ∀T(T = ⟨S,τₚ⟩ ∧ FortissismoSpace(T)) →
    ∀H⊆S(Closed(H,T) ↔ (p∈H ∨ Countable(H)))
  )
}

proof Closed_Sets_Fortissimo() {
  setVar(T: TopologicalSpace) →
  assume(T = ⟨S,τₚ⟩ ∧ FortissismoSpace(T)) →
  
  lemma FortissismoOpenSets() {
    assert(
      ∀U⊆S(Open(U,T) ↔ (p∈(S∖U) ∨ Countable(S∖U)))
    )
  } →
  
  lemma ClosedSetDefinition() {
    assert(
      ∀H⊆S(Closed(H,T) ↔ Open(S∖H,T))
    )
  } →
  
  apply(FortissismoOpenSets()) →
  apply(ClosedSetDefinition()) →
  
  assert(
    Closed(H,T) ↔ Open(S∖H,T) ↔ (p∈H ∨ Countable(H))
  )
}
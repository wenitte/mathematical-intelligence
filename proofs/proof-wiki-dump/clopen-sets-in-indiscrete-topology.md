theorem Clopen_Sets_Indiscrete_Topology() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ IsIndiscreteTopology(T) →
    ∀A(A ⊆ S ∧ IsClopen(A,T) → A = S ∨ A = ∅))
  )
}

proof Clopen_Sets_Indiscrete_Topology() {
  setVar(T: TopologicalSpace) →
  assume(T = ⟨S,τ⟩ ∧ IsIndiscreteTopology(T)) →
  
  lemma IndiscreteOpenSets() {
    assert(
      ∀X(IsOpen(X,T) → X = S ∨ X = ∅)
    )
  } →

  setVar(A: Set) →
  assume(A ⊆ S ∧ IsClopen(A,T)) →
  
  assert(IsOpen(A,T) ∧ IsClosed(A,T)) →
  apply(IndiscreteOpenSets()) →
  assert(A = S ∨ A = ∅) →
  therefore(∀A(A ⊆ S ∧ IsClopen(A,T) → A = S ∨ A = ∅))
}
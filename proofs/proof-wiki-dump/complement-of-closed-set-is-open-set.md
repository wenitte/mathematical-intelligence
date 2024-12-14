theorem ComplementClosedSetIsOpen() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ T is_topological_space ∧
    F ⊆ S ∧ F is_closed_in T) →
    (S\F ∈ τ)
  )
}

proof ComplementClosedSetIsOpen() {
  setVar(T: TopologicalSpace) →
  setVar(S: Set) →
  setVar(F: Set) →
  setVar(τ: Collection) →
  
  assert(T = ⟨S,τ⟩) ∧
  assert(F ⊆ S) ∧
  assert(F is_closed_in T) →
  
  lemma ClosedSetDefinition() {
    assert(F is_closed_in T ↔ ∃U ∈ τ: F = S\U)
  } →
  
  apply(ClosedSetDefinition()) →
  setVar(U: Set ∈ τ) →
  assert(F = S\U) →
  
  lemma RelativeComplementInversion() {
    assert(∀A,B(F = S\U → U = S\F))
  } →
  
  apply(RelativeComplementInversion()) →
  assert(U = S\F) ∧
  assert(U ∈ τ) →
  assert(S\F ∈ τ)
}
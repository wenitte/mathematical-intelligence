theorem Components_Are_Separated_Sets() {
  let(T: TopologicalSpace) →
  let(S: Set) →
  let(τ: Topology) →
  assert(T = ⟨S,τ⟩) ∧
  let(A,B: Set) →
  assert(A|B is_separation_of T) →
  assert(A,B are_separated_sets_of T)
} ↔

proof Components_Are_Separated_Sets() {
  # Definition of closure
  assert(∀X⊆S: X⁻ is_smallest_closed_set containing X) →
  
  lemma Components_Are_Clopen() {
    assert(A is_closed ∧ B is_closed)
  } →
  
  apply(Components_Are_Clopen()) →
  assert(A⁻ = A ∧ B⁻ = B) →
  
  lemma Separation_Definition() {
    assert(A|B is_separation_of T → A∩B = ∅)
  } →
  
  apply(Separation_Definition()) →
  
  # Chain of equalities for A⁻∩B
  assert(A⁻∩B = A∩B = ∅) →
  
  # Chain of equalities for A∩B⁻
  assert(A∩B⁻ = A∩B = ∅) →
  
  # Apply definition of separated sets
  assert(A⁻∩B = ∅ ∧ A∩B⁻ = ∅) →
  assert(A,B are_separated_sets_of T)
}
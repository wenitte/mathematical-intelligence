theorem Boundary_of_Boundary_Indiscrete() {
  let(T = ⟨S, {∅, S}⟩) →
  assert(T is_indiscrete_space) ∧
  let(H ⊆ S) →
  assert(∂(∂H) = ∅)
} ↔

proof Boundary_of_Boundary_Indiscrete() {
  lemma Boundary_Subset_Indiscrete() {
    assert(∀H ⊆ S → (∂H = S ∨ ∂H = ∅)) ∧
    assert(∂H = S ↔ (H ≠ ∅ ∧ H ≠ S)) ∧
    assert(∂H = ∅ ↔ (H = ∅ ∨ H = S))
  } →
  
  lemma Open_Closed_Indiscrete() {
    assert(∅ is_open_in T) ∧
    assert(S is_open_in T) ∧
    assert(∅ is_closed_in T) ∧
    assert(S is_closed_in T)
  } →
  
  lemma Clopen_Empty_Boundary() {
    assert(∀A ⊆ S → (A is_clopen → ∂A = ∅))
  } →
  
  apply(Boundary_Subset_Indiscrete()) →
  assert(∂H ∈ {∅, S}) →
  apply(Open_Closed_Indiscrete()) →
  assert(∂H is_clopen) →
  apply(Clopen_Empty_Boundary()) →
  assert(∂(∂H) = ∅)
}
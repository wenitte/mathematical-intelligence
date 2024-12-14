theorem Closed_Sets_Indiscrete_Topology() {
  assert(
    ∀S ∀H (
      (T = ⟨S, {∅, S}⟩ ∧ H ⊆ S) →
      (H is_closed_in T ↔ (H = S ∨ H = ∅))
    )
  )
}

proof Closed_Sets_Indiscrete_Topology() {
  setVar(S: Set, H: Set, T: TopologicalSpace) →
  
  lemma Closed_Set_Definition() {
    assert(
      ∀U ∀τ (U is_closed_in τ ↔ complementₛ(U) ∈ τ)
    )
  } →
  
  lemma Open_Sets_Indiscrete() {
    assert(
      T = ⟨S, {∅, S}⟩ → τ_open_sets = {∅, S}
    )
  } →
  
  lemma Complement_Properties() {
    assert(
      (complementₛ(∅) = S) ∧ (complementₛ(S) = ∅)
    )
  } →
  
  apply(Closed_Set_Definition()) →
  apply(Open_Sets_Indiscrete()) →
  apply(Complement_Properties()) →
  
  assert(
    H is_closed_in T ↔
    complementₛ(H) ∈ {∅, S} ↔
    complementₛ(H) = ∅ ∨ complementₛ(H) = S ↔
    H = S ∨ H = ∅
  )
}
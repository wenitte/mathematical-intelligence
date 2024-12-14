theorem Closed_Set_Subspace() {
  assert(
    ∀T[TopologicalSpace] ∧ ∀T'⊆T[Subspace] ∧ ∀V⊆T' ⇒
    (Closed(V,T') ↔ ∃W[Closed(W,T) ∧ V = T'∩W])
  )
}

proof Closed_Set_Subspace() {
  // Necessary Condition
  setVar(T[TopologicalSpace], T'⊆T, V⊆T') →
  assume(Closed(V,T')) →
  assert(Open(T'∖V, T')) →
  lemma Subspace_Topology() {
    assert(∃U[Open(U,T) ∧ T'∖V = T'∩U])
  } →
  setVar(U[Open(U,T)]) →
  assert(V = T'∖(T'∖V)) →
  assert(V = T'∖(T'∩U)) →
  assert(V = T'∖U) →
  assert(V = T'∩(T∖U)) →
  setVar(W := T∖U) →
  assert(Closed(W,T)) →
  assert(V = T'∩W) →

  // Sufficient Condition
  assume(∃W[Closed(W,T) ∧ V = T'∩W]) →
  setVar(W[Closed(W,T)]) →
  assert(T'∖V = T'∖(T'∩W)) →
  assert(T'∖V = T'∩(T∖W)) →
  assert(Open(T∖W, T)) →
  assert(Open(T'∖V, T')) →
  assert(Closed(V,T'))
}

corollary Closed_Set_Closed_Subspace() {
  assert(
    ∀T[TopologicalSpace] ∧ ∀T'⊆T[Closed(T',T)] ∧ ∀V⊆T' ⇒
    (Closed(V,T') ↔ Closed(V,T))
  )
}
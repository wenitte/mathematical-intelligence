theorem ClosedSets_EitherOr_Topology() {
  let(T = ⟨S,τ⟩: EitherOrSpace) →
  assert(
    ClosedSets(T) = {
      ∅,
      S,
      {-1},
      {1},
      {-1,1},
      {A ⊆ [-1,1] | {0} ⊆ A}
    }
  )
}

proof ClosedSets_EitherOr_Topology() {
  lemma Basic_Closed() {
    assert(∅ ∈ ClosedSets(T)) ∧
    assert(S ∈ ClosedSets(T))
  } →

  lemma Closed_Open_Complement() {
    assert(∀U ⊆ S: (
      U ∈ OpenSets(T) ↔ (S\U) ∈ ClosedSets(T)
    )) ∧
    assert(∀U ⊆ S: (
      U ∈ ClosedSets(T) ↔ (S\U) ∈ OpenSets(T)
    ))
  } →

  apply(Closed_Open_Complement()) →
  assert((-1,1) ∈ OpenSets(T)) →
  assert(S\(-1,1) = {-1,1} ∈ ClosedSets(T)) →
  
  assert((-1,1] ∈ OpenSets(T) ∧ [-1,1) ∈ OpenSets(T)) →
  assert(S\(-1,1] = {-1} ∈ ClosedSets(T)) ∧
  assert(S\[-1,1) = {1} ∈ ClosedSets(T)) →

  lemma No_Other_Open_Supersets() {
    assert(¬∃A ⊆ S: (
      A ⊃ (-1,1) ∧ A ≠ S
    ))
  } →

  lemma Zero_Subset_Closed() {
    setVar(U: OpenSets(T)) →
    assert({0} ⊈ U → {0} ⊆ (S\U)) →
    assert(∀V ⊆ S: (
      {0} ⊆ V → {0} ⊈ (S\V) → 
      (S\V) ∈ OpenSets(T) → V ∈ ClosedSets(T)
    ))
  }
}
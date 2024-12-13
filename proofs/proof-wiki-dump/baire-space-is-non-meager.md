theorem Baire_Space_Is_Non_Meager() {
  let(T = ⟨S,τ⟩: TopologicalSpace) →
  assert(
    isBaireSpace(T) → isNonMeager(T,T)
  )
}

proof Baire_Space_Is_Non_Meager() {
  let(T = ⟨S,τ⟩: TopologicalSpace) →
  assume(isBaireSpace(T)) →

  lemma Baire_Open_Sets_Property() {
    assert(
      isBaireSpace(T) ↔ ∀U ∈ τ → isNonMeager(U,T)
    )
  } →

  apply(Baire_Open_Sets_Property()) →
  assert(∀U ∈ τ → isNonMeager(U,T)) →
  
  lemma Topology_Contains_Space() {
    assert(T ∈ τ)
  } →

  apply(Topology_Contains_Space()) →
  instantiate(∀U ∈ τ, U := T) →
  assert(isNonMeager(T,T))
}
theorem Complement_GDelta_is_FSigma(T: TopologicalSpace, X: Set) {
  let S = T.underlyingSet
  let τ = T.topology
  assert(
    (isGDeltaSet(X, T)) →
    (isFSigmaSet(S\X, T))
  )
} ↔

proof Complement_GDelta_is_FSigma() {
  setVar(X: GDeltaSet(T)) →
  assert(∃𝓤: CountableSet(τ) | X = ⋂𝓤) →
  
  lemma DeMorgansLaw() {
    assert(
      S\(⋂𝓤) = ⋃{S\U | U ∈ 𝓤}
    )
  } →
  
  apply(DeMorgansLaw()) →
  assert(S\X = ⋃{S\U | U ∈ 𝓤}) →
  
  lemma ClosedComplement() {
    assert(
      ∀U ∈ 𝓤 → (U ∈ τ → isClosedSet(S\U, T))
    )
  } →
  
  apply(ClosedComplement()) →
  assert(
    S\X = ⋃{S\U | U ∈ 𝓤} ∧
    isCountable(𝓤) ∧
    ∀U ∈ 𝓤 → isClosedSet(S\U, T)
  ) →
  
  assert(isFSigmaSet(S\X, T))
}
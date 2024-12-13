theorem Arens_Fort_Space_is_Separable() {
  let(T = ⟨S,τ⟩) →
  assert(
    IsArens_FortSpace(T) → IsSeparableSpace(T)
  )
} ↔

proof Arens_Fort_Space_is_Separable() {
  let(T = ⟨S,τ⟩) →
  assert(IsArens_FortSpace(T)) →
  assert(IsExpansionOf(T, CountableFortSpace)) →
  assert(IsCountable(S)) →
  lemma Countable_Space_is_Separable() {
    assert(
      ∀X[IsCountable(X) → IsSeparableSpace(⟨X,τ⟩)]
    )
  } →
  apply(Countable_Space_is_Separable()) →
  assert(IsSeparableSpace(T))
}
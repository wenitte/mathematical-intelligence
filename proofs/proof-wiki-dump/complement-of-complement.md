theorem Complement_of_Complement() {
  assert(
    ∀S ∈ Set ⇒ (𝒞(𝒞(S)) = S)
  )
} ↔

proof Complement_of_Complement() {
  setVar(S: Set) →
  lemma Relative_Complement_Identity() {
    assert(
      ∀S,T ∈ Set ⇒ (S′(S′(T)) = T)
    )
  } →
  assert(
    let U = Universal_Set ∧
    let T = S
  ) →
  apply(Relative_Complement_Identity(), {S ↦ U, T ↦ S}) →
  assert(U′(U′(S)) = S) →
  assert(𝒞(𝒞(S)) = S)
}
theorem NotIsomorphicRealGroups() {
  assert(
    let(ℝ_add: ⟨ℝ,+⟩) ∧
    let(ℝ_mult: ⟨ℝ_{≠0},×⟩) ⇒
    ¬isomorphic(ℝ_add, ℝ_mult)
  )
} ↔

proof NotIsomorphicRealGroups() {
  assert(isField(⟨ℝ,+,×⟩)) →
  lemma FieldGroupsNotIsomorphic() {
    assert(
      ∀F(isField(F) ⇒
        ¬isomorphic(⟨F,+⟩, ⟨F_{≠0},×⟩))
    )
  } →
  apply(FieldGroupsNotIsomorphic(), ⟨ℝ,+,×⟩) →
  assert(¬isomorphic(ℝ_add, ℝ_mult))
}
theorem GroupsNotIsomorphic() {
  assert(
    let Q = (ℚ, +) ∧
    let Q_mult = (ℚ_{≠0}, ×) →
    ¬(Q ≅ Q_mult)
  )
} ↔

proof GroupsNotIsomorphic() {
  apply(AdditiveMultiplicativeGroupsNotIsomorphic(Field: ℚ)) →
  assert(
    (ℚ, +) ≇ (ℚ_{≠0}, ×)
  )
}

lemma AdditiveMultiplicativeGroupsNotIsomorphic(F: Field) {
  assert(
    let F_add = (F, +) ∧
    let F_mult = (F_{≠0}, ×) →
    ¬(F_add ≅ F_mult)
  )
}
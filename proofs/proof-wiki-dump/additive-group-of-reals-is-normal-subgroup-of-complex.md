theorem Complex_Real_Normal_Subgroup() {
  assert(
    let(ℝ_add: Group(ℝ, +)) ∧
    let(ℂ_add: Group(ℂ, +)) ⇒
    isNormalSubgroup(ℝ_add, ℂ_add)
  )
} ↔

proof Complex_Real_Normal_Subgroup() {
  assert(isSubgroup(ℝ_add, ℂ_add)) →
  lemma Complex_Is_Abelian() {
    assert(isAbelian(ℂ_add))
  } →
  apply(Abelian_Subgroup_Normal()) →
  assert(
    isAbelian(ℂ_add) ∧ isSubgroup(ℝ_add, ℂ_add) ⇒
    isNormalSubgroup(ℝ_add, ℂ_add)
  )
}
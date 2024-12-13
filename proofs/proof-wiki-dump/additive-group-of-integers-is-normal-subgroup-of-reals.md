theorem Integers_Normal_Subgroup_Reals() {
  assert(
    let(ℤ_add: Group) ∧
    let(ℝ_add: Group) ∧
    struct(ℤ_add, {Z, +}) ∧
    struct(ℝ_add, {ℝ, +}) ⇒
    isNormalSubgroup(ℤ_add, ℝ_add)
  )
} ↔

proof Integers_Normal_Subgroup_Reals() {
  lemma Z_is_Subgroup() {
    assert(
      isSubgroup(ℤ_add, ℝ_add)
    )
    ref("Additive Group of Integers is Subgroup of Reals")
  } →
  
  lemma R_is_Abelian() {
    assert(
      ∀x,y ∈ ℝ ⇒ x + y = y + x
    )
  } →
  
  lemma Abelian_Subgroups_Normal() {
    assert(
      isAbelian(G) ∧ isSubgroup(H, G) ⇒ isNormalSubgroup(H, G)
    )
    ref("Subgroup of Abelian Group is Normal")
  } →
  
  apply(Z_is_Subgroup()) →
  apply(R_is_Abelian()) →
  apply(Abelian_Subgroups_Normal()) →
  
  assert(
    isNormalSubgroup(ℤ_add, ℝ_add)
  )
}
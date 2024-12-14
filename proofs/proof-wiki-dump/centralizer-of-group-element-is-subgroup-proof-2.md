theorem Centralizer_Is_Subgroup() {
  assert(
    ∀G[Group] ∧ ∀a ∈ G ⇒
    C_G(a) ⊆ G ∧ isSubgroup(C_G(a))
  )
} ↔

proof Centralizer_Is_Subgroup() {
  setGroup(G) →
  setVar(a ∈ G) →

  lemma Identity_In_Centralizer() {
    assert(
      e ∈ G ∧ e ∘ a = a ∘ e ⇒
      e ∈ C_G(a)
    )
  } →
  
  apply(Identity_In_Centralizer()) →
  assert(C_G(a) ≠ ∅) →
  
  setVar(x, y ∈ C_G(a)) →
  
  lemma Product_With_Inverse() {
    assert(
      x ∘ a = a ∘ x ∧
      y ∘ a = a ∘ y ⇒
      a ∘ x ∘ y⁻¹ = x ∘ y⁻¹ ∘ a
    )
  } →
  
  apply(Product_With_Inverse()) →
  assert(x ∘ y⁻¹ ∈ C_G(a)) →
  
  apply(One_Step_Subgroup_Test, {
    set: C_G(a),
    superset: G,
    closure_under: (x, y) ⟼ x ∘ y⁻¹
  }) →
  
  assert(isSubgroup(C_G(a)))
}
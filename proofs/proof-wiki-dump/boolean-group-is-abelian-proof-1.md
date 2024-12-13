theorem Boolean_Group_Is_Abelian() {
  assert(
    ∀G: Group ⇒ (
      is_boolean_group(G) → is_abelian(G)
    )
  )
} ↔

proof Boolean_Group_Is_Abelian() {
  setVar(G: Group) →
  assert(
    is_boolean_group(G) →
    ∀x ∈ G \ {e} ⇒ order(x) = 2
  ) →
  lemma Elements_Self_Inverse() {
    assert(
      (order(x) = 2 ∨ x = e) ↔ (x * x = e)
    )
  } →
  apply(Elements_Self_Inverse()) →
  assert(
    ∀x ∈ G ⇒ x * x = e
  ) →
  lemma Self_Inverse_Implies_Abelian() {
    assert(
      (∀x ∈ G ⇒ x * x = e) → is_abelian(G)
    )
  } →
  apply(Self_Inverse_Implies_Abelian()) →
  assert(is_abelian(G))
}
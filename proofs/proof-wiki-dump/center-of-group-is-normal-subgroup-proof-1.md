theorem Center_Is_Normal_Subgroup() {
  let(G: Group)
  assert(
    Z(G) ⊴ G
  )
} ↔

proof Center_Is_Normal_Subgroup() {
  let(G: Group) →
  lemma Center_Is_Abelian() {
    assert(Z(G) ≤ G ∧ ∀x,y ∈ Z(G) ⇒ xy = yx)
  } →
  assert(
    ∀g ∈ G, ∀x ∈ Z(G) ⇒ gx = xg
  ) →
  assert(
    ∀g ∈ G ⇒ gZ(G) = Z(G)g
  ) →
  apply(NormalSubgroup_Definition()) →
  assert(Z(G) ⊴ G)
}
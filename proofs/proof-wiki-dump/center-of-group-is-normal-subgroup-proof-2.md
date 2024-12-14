theorem Center_Is_Normal() {
  assert(
    ∀G[Group] ⇒ (Z(G) ⊲ G)
  where
    Z(G) := {x ∈ G | ∀g ∈ G: xg = gx}
  )
} ↔

proof Center_Is_Normal() {
  setGroup(G) →
  assert(
    ∀a ∈ G, ∀x ∈ Z(G) ⇒ (
      x ∈ (Z(G))^a ↔ axa⁻¹ = xa⁻¹a = x ∈ Z(G)
    )
  ) →
  lemma Conjugation_Result() {
    assert(
      ∀a ∈ G ⇒ (Z(G))^a = Z(G)
    )
  } →
  apply(Normal_Subgroup_Definition()) →
  conclude(Z(G) ⊲ G)
}
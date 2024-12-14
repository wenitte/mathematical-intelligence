theorem Center_Is_Normal() {
  assert(
    ∀G: Group ⇒ Z(G) ⊴ G
  )
} ↔

proof Center_Is_Normal_1() {
  setVar(G: Group) →
  lemma Center_Is_Abelian() {
    assert(
      ∀g ∈ G, ∀x ∈ Z(G) ⇒ gx = xg
    )
  } →
  apply(Center_Is_Abelian()) →
  assert(
    ∀g ∈ G ⇒ gZ(G) = Z(G)g
  ) →
  conclude(Z(G) ⊴ G)
}

proof Center_Is_Normal_2() {
  setVar(G: Group) →
  assert(
    ∀a ∈ G, ∀x ∈ Z(G) ⇒ (
      x ∈ Z(G)ᵃ ↔ axa⁻¹ = xa⁻¹a = x ∈ Z(G)
    )
  ) →
  assert(
    ∀a ∈ G ⇒ Z(G)ᵃ = Z(G)
  ) →
  conclude(Z(G) ⊴ G)
}
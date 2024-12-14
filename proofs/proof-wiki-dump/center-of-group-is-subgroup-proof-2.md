theorem Center_Is_Subgroup() {
  assert(
    ∀G:Group ⇒ Z(G) ⊆ G ∧ isSubgroup(Z(G), G)
  )
} ↔

proof Center_Is_Subgroup() {
  setVar(G: Group) →
  lemma Center_Is_Intersection() {
    assert(Z(G) = ⋂{C_g(G) | g ∈ G})
  } →
  lemma Centralizer_Is_Subgroup() {
    assert(∀g ∈ G ⇒ isSubgroup(C_g(G), G))
  } →
  lemma Intersection_Of_Subgroups() {
    assert(
      ∀S ⊆ P(G) ⇒
      (∀H ∈ S ⇒ isSubgroup(H, G)) →
      isSubgroup(⋂S, G)
    )
  } →
  apply(Center_Is_Intersection()) →
  apply(Centralizer_Is_Subgroup()) →
  apply(Intersection_Of_Subgroups()) →
  assert(isSubgroup(Z(G), G))
}
theorem Center_Is_Abelian_Subgroup() {
  let(G: Group)
  let(Z(G): Center(G))
  assert(
    Z(G) ⊂ G ∧ isAbelian(Z(G))
  )
} ↔

proof Center_Is_Abelian_Subgroup() {
  setVar(G: Group) →
  setVar(Z(G): Center(G)) →
  
  lemma Center_Is_Subgroup() {
    assert(Z(G) ⊂ G)
  } →
  
  apply(Center_Is_Subgroup()) →
  
  assert(
    ∀a,b ∈ Z(G) ⇒ [
      def(Center) → (a·x = x·a ∧ b·x = x·b) ∀x ∈ G
    ]
  ) →
  
  assert(
    Z(G) ⊆ G →
    ∀a,b ∈ Z(G) ⇒ a·b = b·a
  ) →
  
  conclude(
    isSubgroup(Z(G), G) ∧ isAbelian(Z(G))
  )
}
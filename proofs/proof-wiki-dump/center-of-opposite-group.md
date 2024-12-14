theorem Center_Opposite_Group() {
  assert(
    ∀G(IsGroup(G,∘) ∧ IsOppositeGroup(G,*) →
      Z(G,∘) = Z(G,*))
  )
} ↔

proof Center_Opposite_Group() {
  setStruct(G: Group) →
  setOp(∘: BinaryOp) →
  setOp(*: BinaryOp) →
  
  lemma CenterEquivalence() {
    assert(
      ∀g ∈ G(
        g ∈ Z(G,∘) ↔
        (∀h ∈ G(g ∘ h = h ∘ g)) ↔
        (∀h ∈ G(h * g = g * h)) ↔
        g ∈ Z(G,*)
      )
    )
  } →

  apply(CenterEquivalence()) →
  apply(SetEquality(Z(G,∘), Z(G,*))) →
  assert(Z(G,∘) = Z(G,*))
}
theorem C6_Not_Isomorphic_S3() {
  assert(
    ∀G₁,G₂ ∈ Groups ∧ G₁ = C₆ ∧ G₂ = S₃ ⇒ ¬(G₁ ≅ G₂)
  )
} ↔

proof C6_Not_Isomorphic_S3() {
  setVar(C₆: Group, S₃: Group) →
  assert(|C₆| = 6 ∧ |S₃| = 6) →
  
  lemma Cyclic_Is_Abelian() {
    assert(C₆ ∈ CyclicGroups ⇒ isAbelian(C₆))
  } →
  
  lemma Symmetric_Not_Abelian() {
    assert(S₃ ∈ SymmetricGroups ⇒ ¬isAbelian(S₃))
  } →
  
  lemma Isomorphic_Abelian_Property() {
    assert(
      ∀G₁,G₂ ∈ Groups ∧ G₁ ≅ G₂ ⇒ 
      (isAbelian(G₁) ↔ isAbelian(G₂))
    )
  } →
  
  apply(Cyclic_Is_Abelian()) →
  apply(Symmetric_Not_Abelian()) →
  apply(Isomorphic_Abelian_Property()) →
  
  assert(isAbelian(C₆) ∧ ¬isAbelian(S₃)) →
  assert(¬(C₆ ≅ S₃))
}
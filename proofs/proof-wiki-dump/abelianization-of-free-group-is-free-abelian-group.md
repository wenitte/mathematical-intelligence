theorem Abelianization_Free_Group_Is_Free_Abelian() {
  assert(
    ∀X: Set ∧
    ∃struct{F_X, ι}: FreeGroup(X) ∧
    ∃F_X^ab: Abelianization(F_X) ∧
    ∃π: GroupEpimorphism(F_X → F_X^ab) ⇒
    struct{F_X^ab, π∘ι}: FreeAbelianGroup(X)
  )
} ↔

proof Abelianization_Free_Group_Is_Free_Abelian() {
  setVar(H: AbelianGroup) →
  setVar(f: Mapping(X → H)) →

  lemma Universal_Property_Free_Group() {
    assert(
      ∃!g: GroupHomomorphism(F_X → H) ∧
      g∘ι = f
    )
  } →

  lemma Universal_Property_Abelianization() {
    assert(
      ∃!h: GroupHomomorphism(F_X^ab → H) ∧
      h∘π = g
    )
  } →

  assert(h∘(π∘ι) = f) →
  
  lemma Satisfies_Universal_Property() {
    assert(
      ∀H: AbelianGroup ∧
      ∀f: Mapping(X → H) ⇒
      ∃!h: GroupHomomorphism(F_X^ab → H) ∧
      h∘(π∘ι) = f
    )
  } →

  apply(Universal_Property_Free_Abelian_Group()) →
  assert(struct{F_X^ab, π∘ι}: FreeAbelianGroup(X))
}
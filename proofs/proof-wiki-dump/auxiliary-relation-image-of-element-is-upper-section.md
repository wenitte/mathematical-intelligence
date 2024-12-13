theorem Auxiliary_Relation_Image_Upper_Section() {
  let(L: OrderedSet) →
  assert(L = ⟨S, ⪯⟩) →
  let(R: AuxiliaryRelation(S)) →
  let(x: Element(S)) →
  assert(
    R(x) ∈ UpperSection(S)
  )
} ↔

proof Auxiliary_Relation_Image_Upper_Section() {
  let(a: Element(R(x))) →
  let(b: Element(S)) →
  assume(a ⪯ b) →
  
  lemma Image_Definition() {
    assert((x,a) ∈ R) ↔
    assert(a ∈ R(x))
  } →

  lemma Reflexivity() {
    assert(x ⪯ x)
  } →

  lemma Auxiliary_Property() {
    assert(x ⪯ x ∧ a ⪯ b) →
    assert((x,b) ∈ R)
  } →

  apply(Image_Definition()) →
  apply(Auxiliary_Property()) →
  assert(b ∈ R(x)) →
  
  conclude(
    ∀a,b ∈ S: (a ∈ R(x) ∧ a ⪯ b) → b ∈ R(x)
  ) →
  assert(R(x) ∈ UpperSection(S))
}
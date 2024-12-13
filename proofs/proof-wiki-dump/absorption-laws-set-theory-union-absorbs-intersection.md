theorem Union_Absorbs_Intersection() {
  assert(
    ∀S,T: Set ⇒ S ∪ (S ∩ T) = S
  )
} ↔

proof Union_Absorbs_Intersection_Direct() {
  setVar(S,T: Set) →
  lemma Subset_Property() {
    assert(S ∩ T ⊆ S) ∧
    apply(Intersection_Is_Subset)
  } →
  apply(Union_With_Superset) →
  assert(S ∪ (S ∩ T) = S)
}

proof Union_Absorbs_Intersection_Element() {
  setVar(S,T: Set) →
  setVar(x: Element) →
  assert(
    x ∈ (S ∪ (S ∩ T)) ↔
    x ∈ S ∨ (x ∈ S ∧ x ∈ T)
  ) →
  apply(Set_Union_Definition) →
  apply(Set_Intersection_Definition) →
  apply(Disjunction_Absorbs_Conjunction) →
  assert(
    x ∈ S ∨ (x ∈ S ∧ x ∈ T) ↔ x ∈ S
  ) →
  conclude(S ∪ (S ∩ T) = S)
}
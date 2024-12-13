theorem Intersection_Absorbs_Union() {
  assert(
    ∀S,T: Set ⇒ S ∩ (S ∪ T) = S
  )
} ↔

proof Intersection_Absorbs_Union_Direct() {
  setVar(S,T: Set) →
  assert(S ⊆ (S ∪ T)) →
  lemma Subset_Intersection() {
    assert(
      ∀A,B: Set ⇒ (A ⊆ B ⇒ A ∩ B = A)
    )
  } →
  apply(Subset_Intersection()) →
  assert(S ∩ (S ∪ T) = S)
}

proof Intersection_Absorbs_Union_Element() {
  setVar(S,T: Set) →
  setVar(x: Element) →
  assert(
    x ∈ S ∩ (S ∪ T) ↔ 
    x ∈ S ∧ (x ∈ S ∨ x ∈ T)
  ) →
  lemma Conjunction_Absorbs_Disjunction() {
    assert(
      ∀p,q: Boolean ⇒ (p ∧ (p ∨ q) = p)
    )
  } →
  apply(Conjunction_Absorbs_Disjunction()) →
  assert(x ∈ S ∩ (S ∪ T) ↔ x ∈ S)
}
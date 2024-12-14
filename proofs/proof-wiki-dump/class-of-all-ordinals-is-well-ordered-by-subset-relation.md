theorem Ordinals_WellOrdered() {
  assert(
    ∀A ⊆ On ∧ A ≠ ∅ ⇒
    (∀x,y ∈ On ⇒ (x ⊆ y ∨ y ⊆ x)) ∧
    (∃m ∈ A: ∀x ∈ A ⇒ m ⊆ x)
  )
} ↔

proof Ordinals_WellOrdered_1() {
  lemma Subset_Is_Ordering() {
    assert(∀X: ⊆ is_ordering_on X)
  } →
  apply(Subset_Is_Ordering()) →
  setVar(A: A ⊆ On) →
  lemma Ordinal_Intersection() {
    assert(∀S ⊆ On ⇒ ∩S ∈ On ∧ ∀x ∈ S ⇒ ∩S ⊆ x)
  } →
  apply(Ordinal_Intersection()) →
  assert(∃m ∈ A: ∀x ∈ A ⇒ m ⊆ x)
}

proof Ordinals_WellOrdered_2() {
  lemma Ordinals_GTower() {
    assert(On is_gtower)
  } →
  apply(Ordinals_GTower()) →
  lemma GTower_WellOrdered() {
    assert(∀X: X is_gtower ⇒ X is_wellordered_under ⊆)
  } →
  apply(GTower_WellOrdered()) →
  assert(On is_wellordered_under ⊆)
}
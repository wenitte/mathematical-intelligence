theorem Ordinals_WellOrdered_Under_Subset() {
  let(On: Class) →
  assert(On = {x | x is_ordinal}) →
  assert(
    (⊆ is_ordering_on On) ∧
    (∀A: Class) [
      (A ⊆ On ∧ A ≠ ∅) →
      ∃m ∈ A [
        ∀x ∈ A → (m ⊆ x)
      ]
    ]
  )
} ↔

proof Ordinals_WellOrdered_Under_Subset() {
  lemma Ordinals_GTower() {
    assert(On is_gtower)
  } →
  
  lemma GTower_WellOrdered() {
    assert(
      ∀X: Class [
        X is_gtower →
        (⊆ well_orders X)
      ]
    )
  } →
  
  apply(Ordinals_GTower()) →
  apply(GTower_WellOrdered()) →
  assert(⊆ well_orders On)
}
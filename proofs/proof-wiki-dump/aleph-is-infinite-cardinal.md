theorem Aleph_is_Infinite_Cardinal() {
  assert(
    ∀x ∈ On ⇒ (aleph(x) ∈ NN')
  )
} ↔

proof Aleph_is_Infinite_Cardinal() {
  setDef(On: class_of_ordinals) →
  setDef(NN': class_of_infinite_cardinals) →
  setDef(aleph: On → NN') →
  assert(
    ∀x ∈ On ⇒ (aleph(x) ∈ Im(aleph)) ∧
    Im(aleph) ⊆ NN'
  ) →
  conclude(
    ∀x ∈ On ⇒ aleph(x) ∈ NN'
  )
}
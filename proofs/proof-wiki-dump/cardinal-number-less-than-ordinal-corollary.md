theorem Cardinal_Number_Less_Than_Ordinal_Cor() {
  assert(
    ∀x ∈ ORD ⇒
    (card(x) ≤ x)
  )
} ↔

proof Cardinal_Number_Less_Than_Ordinal_Cor() {
  setVar(x: ORD) →
  lemma Set_Equivalence_Reflexive() {
    assert(x ∼ x)
  } →
  lemma Cardinal_Number_Less_Than_Ordinal() {
    assert(
      ∀y ∈ ORD ⇒
      (y ∼ y → card(y) ≤ y)
    )
  } →
  apply(Set_Equivalence_Reflexive()) →
  apply(Cardinal_Number_Less_Than_Ordinal()) →
  assert(card(x) ≤ x)
}
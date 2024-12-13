theorem Basic_Universe_Is_Supercomplete() {
  assert(
    ∀V: Class ⇒ (isBasicUniverse(V) → isSupercomplete(V))
  )
}

proof Basic_Universe_Is_Supercomplete() {
  setVar(V: Class) →
  lemma Supercomplete_Definition() {
    assert(
      isSupercomplete(V) ↔ (isTransitive(V) ∧ isSwelled(V))
    )
  } →
  lemma Basic_Universe_Transitive() {
    assert(
      isBasicUniverse(V) → isTransitive(V)
    ) via Axiom_of_Transitivity
  } →
  lemma Basic_Universe_Swelled() {
    assert(
      isBasicUniverse(V) → isSwelled(V)
    ) via Axiom_of_Swelledness
  } →
  apply(Basic_Universe_Transitive()) →
  apply(Basic_Universe_Swelled()) →
  apply(Supercomplete_Definition()) →
  assert(isSupercomplete(V))
}
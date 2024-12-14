theorem Ordinals_Is_G_Tower() {
  assert(
    let(On: Class) ∧
    let(g: On → On) ∧
    (∀x ∈ On ⇒ g(x) = x ∪ {x}) ⇒
    isGTower(On)
  )
} ↔

proof Ordinals_Is_G_Tower() {
  setVar(On: Class) →
  setVar(g: On → On) →
  assert(∀x ∈ On ⇒ g(x) = x ∪ {x}) →
  
  lemma Successor_Is_Progressing() {
    assert(isProgressing(g))
  } →
  
  lemma Ordinals_Superinductive() {
    assert(isSuperinductive(On, g))
  } →
  
  apply(Successor_Is_Progressing()) →
  apply(Ordinals_Superinductive()) →
  
  assert(isProgressing(g) ∧ isSuperinductive(On, g)) →
  assert(isGTower(On))
}
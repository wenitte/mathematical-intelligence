theorem Pairing_From_Infinity_Replacement() {
  assert(
    Axiom_of_Infinity() ∧ Axiom_of_Replacement() → Axiom_of_Pairing()
  )
} ↔

proof Pairing_From_Infinity_Replacement() {
  setDef(2 := {∅, {∅}}) →
  
  lemma Set_2_Exists() {
    assert(Axiom_of_Infinity() → ∃ω(ω is infinite)) →
    assert(2 ∈ ω) →
    assert(2 exists)
  } →
  
  apply(Set_2_Exists()) →
  
  setDef(mapping := {(y,z) | (y = ∅ ∧ z = A) ∨ (y = {∅} ∧ z = B)}) →
  
  lemma Mapping_Valid() {
    assert(mapping is a function) →
    assert(domain(mapping) = 2) →
    assert(range(mapping) = {A, B})
  } →
  
  apply(Mapping_Valid()) →
  apply(Axiom_of_Replacement(), mapping, 2) →
  
  assert({A, B} exists) →
  assert(Axiom_of_Pairing())
}
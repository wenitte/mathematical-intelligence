theorem Ordinals_Is_Proper_Class() {
  assert(
    let On = {α | α is_ordinal} ⇒
    is_proper_class(On)
  )
} ↔

proof Ordinals_Is_Proper_Class_1() {
  let On = {α | α is_ordinal} →
  assert(successor_mapping_strictly_progressing(On)) →
  lemma Superinductive_Under_Progressing() {
    assert(
      ∀C[is_class(C) ∧ strictly_progressing(f, C) ⇒ is_proper_class(C)]
    )
  } →
  apply(Superinductive_Under_Progressing()) →
  assert(is_proper_class(On))
}

proof Ordinals_Is_Proper_Class_2() {
  let On = {α | α is_ordinal} →
  assume(is_set(On)) →
  lemma Burali_Forti() {
    assert(is_set(On) ⇒ contradiction)
  } →
  apply(Burali_Forti()) →
  assert(contradiction) →
  conclude(¬is_set(On)) →
  assert(is_class(On) ∧ ¬is_set(On)) →
  assert(is_proper_class(On))
}
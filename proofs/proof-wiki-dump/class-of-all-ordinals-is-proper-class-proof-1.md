theorem Ordinals_Is_Proper_Class() {
  define(ON := {x | x is an ordinal}) →
  assert(
    ON is_proper_class
  )
} ↔

proof Ordinals_Is_Proper_Class() {
  lemma Successor_Mapping_Strictly_Progressing() {
    assert(
      ∀α∈ON → successor(α) > α
    )
  } →
  
  lemma Superinductive_Proper_Class() {
    assert(
      ∀C[is_class(C) ∧ has_strictly_progressing_map(C) → is_proper_class(C)]
    )
  } →
  
  apply(Successor_Mapping_Strictly_Progressing()) →
  assert(has_strictly_progressing_map(ON)) →
  
  apply(Superinductive_Proper_Class()) →
  assert(is_proper_class(ON)) →
  
  assert(¬is_set(ON))
}
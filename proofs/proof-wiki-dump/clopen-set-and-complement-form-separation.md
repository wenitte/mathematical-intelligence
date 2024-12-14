theorem Clopen_Set_And_Complement_Form_Separation() {
  assert(
    ∀T(T = (S, τ) ∧ T is_topological_space) ∧
    ∀H(H ⊆ S ∧ H is_clopen_in T) ∧
    let(S\H = relative_complement(S,H)) ⇒
    (H, S\H) forms_separation_of T
  )
} ↔

proof Clopen_Set_And_Complement_Form_Separation() {
  setVars(T: topological_space, S: set, H: set) →
  
  lemma Set_Partition() {
    assert(H ∪ (S\H) = S ∧ H ∩ (S\H) = ∅)
  } →
  
  lemma Complement_Clopen() {
    assert(H is_clopen_in T ⇒ (S\H) is_clopen_in T)
  } →
  
  assert(H is_clopen_in T ∧ (S\H) is_clopen_in T) →
  assert(H is_open_in T ∧ (S\H) is_open_in T) →
  assert((H, S\H) are_open_sets_in T ∧ form_partition_of S) →
  
  apply(definition_of_separation) →
  assert((H, S\H) forms_separation_of T)
}
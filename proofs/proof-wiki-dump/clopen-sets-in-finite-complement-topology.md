theorem Clopen_Sets_Finite_Complement_Topology() {
  assert(
    ∀S(infinite_set(S) ∧ T = ⟨S,τ⟩ ∧ is_finite_complement_topology(T)) ⇒
    ∀U(is_clopen(U,T) ⇒ (U = S ∨ U = ∅))
  )
} ↔

proof Clopen_Sets_Finite_Complement_Topology() {
  setVar(U: τ) →
  assert(is_open(U,T)) →
  assert(is_finite_complement_topology(T)) →
  assert(finite(S∖U)) →
  assert(is_closed(S∖U)) →
  
  lemma Infinite_Open_Set() {
    assert(infinite(S) ∧ finite(S∖U)) →
    assert(infinite(U))
  } →
  
  apply(Infinite_Open_Set()) →
  
  assert(U ≠ S ⇒ infinite(S∖U)) →
  assert(infinite(S∖U) ⇒ ¬is_open(S∖U)) →
  assert(is_clopen(U) ⇔ (is_open(U) ∧ is_open(S∖U))) →
  assert(is_clopen(U) ⇒ (U = S ∨ U = ∅))
}
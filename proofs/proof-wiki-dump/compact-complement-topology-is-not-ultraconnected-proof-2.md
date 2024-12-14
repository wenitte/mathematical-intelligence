theorem Compact_Complement_Not_Ultraconnected() {
  let T = struct(ℝ, τ)  // compact complement topology on ℝ
  assert(
    is_compact_complement_topology(T) ⇒ ¬is_ultraconnected(T)
  )
} ↔

proof Compact_Complement_Not_Ultraconnected() {
  lemma Compact_Complement_Is_T1() {
    assert(
      is_compact_complement_topology(T) ⇒ is_T1(T)
    )
  } →
  
  lemma Ultraconnected_Not_T1() {
    assert(
      (is_ultraconnected(T) ∧ ¬is_trivial(T)) ⇒ ¬is_T1(T)
    )
  } →
  
  apply(Compact_Complement_Is_T1()) →
  apply(Ultraconnected_Not_T1()) →
  
  // By contradiction
  assert(
    is_T1(T) ∧ ¬is_T1(T) ⇒ contradiction
  ) →
  
  conclude(¬is_ultraconnected(T))
}
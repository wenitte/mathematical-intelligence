theorem OpenExtension_FirstCountable() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ T is_topological_space ∧
    T*_p̄ = ⟨S*_p,τ*_p̄⟩ is_open_extension_space_of T) ⇒
    (T*_p̄ is_first_countable ↔ T is_first_countable)
  )
} ↔

proof OpenExtension_FirstCountable() {
  // Forward direction
  assume(T is_first_countable) →
  assert(∀x ∈ S ⇒ x has_countable_local_basis in T) →
  lemma OpenSets_Preserved() {
    assert(∀U ∈ τ ⇒ U ∈ τ*_p̄)
  } →
  apply(OpenSets_Preserved()) →
  assert(∀x ∈ S ⇒ x has_countable_local_basis in T*_p̄) →
  assert(p ∈ exactly_one_open_set(S*_p) in T*_p̄) →
  assert(p has_countable_local_basis in T*_p̄) →
  assert(∀x ∈ S*_p ⇒ x has_countable_local_basis in T*_p̄) →
  conclude(T*_p̄ is_first_countable) ∧

  // Reverse direction by contrapositive
  assume(¬(T is_first_countable)) →
  assert(∃x ∈ S : ¬(x has_countable_local_basis in T)) →
  apply(OpenSets_Preserved()) →
  assert(¬(x has_countable_local_basis in T*_p̄)) →
  conclude(¬(T*_p̄ is_first_countable))
}
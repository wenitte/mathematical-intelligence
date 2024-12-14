theorem Compact_Subsets_T3() {
  setDef(T = ⟨S,τ⟩: T3_space) →
  setDef(A ⊆ S: compact) →
  assert(
    ∀U ∈ τ: (A ⊆ U) → ∃V ∈ τ: (A ⊆ V ∧ V⁻ ⊆ U)
  )
}

proof Compact_Subsets_T3() {
  setVar(U ∈ τ: A ⊆ U) →
  
  lemma T3_Property() {
    assert(
      ∀x ∈ U → ∃Nₓ: (S\Nₓ ∈ τ) ∧ ∃Vₓ ∈ τ: (x ∈ Vₓ ∧ Vₓ ⊆ Nₓ ⊆ U)
    )
  } →

  assert({Vₓ: x ∈ A} forms_open_cover(A)) →
  
  lemma Compactness() {
    assert(
      ∃I ⊆ A: |I| < ∞ ∧ A ⊆ ⋃(Vₓ: x ∈ I)
    )
  } →
  
  setDef(V = ⋃(Vₓ: x ∈ I)) →
  setDef(N = ⋃(Nₓ: x ∈ I)) →
  
  assert(V ∈ τ) by union_preserves_openness →
  assert(N is_closed) by finite_union_preserves_closed →
  assert(V ⊆ N) by set_union_preserves_subsets →
  assert(V ⊆ V⁻ ⊆ N) by closure_smallest_closed →
  
  conclude(
    A ⊆ V ⊆ V⁻ ⊆ N ⊆ U
  )
}
theorem Boundary_of_Subset_Indiscrete_Space() {
  let(T = ⟨S, {∅, S}⟩) →
  assert(T is_indiscrete_topological_space) ∧
  let(H ⊂ S) ∧
  assert(
    (∅ ⊂ H ⊂ S) ⇒ ∂H = S ∧
    (H = ∅ ∨ H = S) ⇒ ∂H = ∅
  )
} ↔

proof Boundary_of_Subset_Indiscrete_Space() {
  apply(Closure_of_Subset_Indiscrete_Space) →
  assert(H⁻ = S) ∧
  
  apply(Interior_of_Subset_Indiscrete_Space) →
  assert(H° = ∅) ∧
  
  let(∂H ≝ H⁻ ∖ H°) →
  substitute(H⁻ = S, H° = ∅) →
  assert(∂H = S ∖ ∅ = S) ∧
  
  lemma Clopen_Sets() {
    apply(Open_and_Closed_Sets_Topological_Space) →
    assert(∅ is_clopen ∧ S is_clopen)
  } →
  
  apply(Set_Clopen_iff_Boundary_Empty) →
  assert((H = ∅ ∨ H = S) ⇒ ∂H = ∅)
}
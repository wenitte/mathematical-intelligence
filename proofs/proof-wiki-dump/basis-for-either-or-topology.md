theorem Either_Or_Topology_Basis() {
  let(T := (S, τ): TopologicalSpace) →
  let(𝔹 := {x ∈ S: x ≠ 0} ∪ {(-1,1)}) →
  assert(
    𝔹 is_basis_for T
  )
} ↔

proof Either_Or_Topology_Basis() {
  // Case 1: U ∈ τ with 0 ∉ U
  forall(U ∈ τ: 0 ∉ U) → {
    assert(U = ⋃{x ∈ U} {x}) ∧
    assert(∀x ∈ U: x ≠ 0) →
    assert(∀x ∈ U: {x} ∈ 𝔹) →
    conclude(U is_union_of_elements_from 𝔹)
  } →

  // Case 2: U ∈ τ with 0 ∈ U
  forall(U ∈ τ: 0 ∈ U) → {
    assert((-1,1) ⊆ U) →
    assert(
      (U = (-1,1)) ∨
      (U = (-1,1] = (-1,1) ∪ {1}) ∨
      (U = [-1,1) = (-1,1) ∪ {-1}) ∨
      (U = [-1,1] = (-1,1) ∪ {-1} ∪ {1})
    ) →
    assert(∀form_of_U: form_of_U is_union_of_elements_from 𝔹)
  } →

  // Conclusion
  assert(∀U ∈ τ: U is_union_of_elements_from 𝔹) →
  conclude(𝔹 is_basis_for T)
}
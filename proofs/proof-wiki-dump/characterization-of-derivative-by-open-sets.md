theorem Derivative_Characterization_Open_Sets() {
  let(T = ⟨S,τ⟩: TopologicalSpace) →
  let(A ⊆ T) →
  let(x ∈ T) →
  assert(
    x ∈ A' ↔ (∀U ∈ τ)(x ∈ U → ∃y ∈ T(y ∈ A ∩ U ∧ x ≠ y))
  )
}

proof Derivative_Characterization_Open_Sets() {
  // Sufficient condition (→)
  assume(x ∈ A') →
  apply(Definition_Set_Derivative) →
  assert(x ∈ (A∖{x})⁻) → // (1)
  
  let(U ∈ τ) →
  assume(x ∈ U) →
  apply(Closure_Point_Condition) →
  assert((A∖{x}) ∩ U ≠ ∅) →
  
  exists(y ∈ T) →
  assert(y ∈ A∖{x} ∧ y ∈ U) → // (2)
  assert(y ∈ A ∧ y ∉ {x}) →
  conclude(y ∈ A ∩ U ∧ x ≠ y) →

  // Necessary condition (←)
  assume(∀U ∈ τ(x ∈ U → ∃y ∈ T(y ∈ A ∩ U ∧ x ≠ y))) → // (3)
  
  let(G ∈ τ) →
  assume(x ∈ G) →
  exists(y ∈ T) →
  assert(y ∈ A ∩ G ∧ x ≠ y) → // (4)
  assert(y ∈ A ∧ y ∉ {x}) →
  assert(y ∈ A∖{x}) →
  assert(y ∈ G) →
  conclude((A∖{x}) ∩ U ≠ ∅) →
  
  apply(Closure_Point_Condition) →
  assert(x ∈ (A∖{x})⁻) →
  apply(Definition_Accumulation_Point) →
  apply(Definition_Set_Derivative) →
  conclude(x ∈ A')
}
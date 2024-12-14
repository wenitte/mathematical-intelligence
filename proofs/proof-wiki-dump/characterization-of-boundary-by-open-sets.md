theorem Boundary_Characterization_By_Open_Sets() {
  assert(
    ∀T: TopologicalSpace, ∀A ⊆ T, ∀x ∈ T →
    (x ∈ ∂A ↔ (∀U ∈ τ: x ∈ U → (A ∩ U ≠ ∅ ∧ (S∖A) ∩ U ≠ ∅)))
  )
} ↔

proof Boundary_Characterization_By_Open_Sets() {
  // Sufficient Condition (→)
  let(x ∈ ∂A) →
  apply(Theorem_Boundary_Closure_Intersection()) →
  assert(x ∈ (S∖A)⁻ ∧ x ∈ A⁻) →
  apply(Theorem_Point_In_Closure_Condition()) →
  assert(∀U ∈ τ: x ∈ U → A ∩ U ≠ ∅) ∧
  assert(∀U ∈ τ: x ∈ U → (S∖A) ∩ U ≠ ∅) →
  conclude(∀U ∈ τ: x ∈ U → (A ∩ U ≠ ∅ ∧ (S∖A) ∩ U ≠ ∅))

  // Necessary Condition (←)
  let(x ∈ T) →
  assume(∀U ∈ τ: x ∈ U → (A ∩ U ≠ ∅ ∧ (S∖A) ∩ U ≠ ∅)) →
  apply(Theorem_Point_In_Closure_Condition()) →
  assert(x ∈ (S∖A)⁻ ∧ x ∈ A⁻) →
  apply(Theorem_Boundary_Closure_Intersection()) →
  conclude(x ∈ ∂A)
}
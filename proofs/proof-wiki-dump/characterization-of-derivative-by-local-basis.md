theorem Derivative_Local_Basis_Characterization() {
  let(T = ⟨S,τ⟩: TopologicalSpace) →
  let(A ⊆ S) →
  let(x ∈ T) →
  let(ℬ ⊆ τ: LocalBasis(x)) →
  assert(
    x ∈ A' ↔ ∀U ∈ ℬ ∃y ∈ T: (y ∈ A ∩ U ∧ x ≠ y)
  )
} ↔

proof Derivative_Local_Basis_Characterization() {
  # Sufficient Condition
  proof_forward() {
    assume(x ∈ A') →
    apply(Derivative_Open_Sets_Characterization) →
    assert(∀U ∈ τ: x ∈ U → ∃y ∈ T: (y ∈ A ∩ U ∧ x ≠ y)) →
    assert(ℬ ⊆ τ) →
    conclude(∀U ∈ ℬ ∃y ∈ T: (y ∈ A ∩ U ∧ x ≠ y))
  } →

  # Necessary Condition
  proof_backward() {
    assume(∀U ∈ ℬ ∃y ∈ T: (y ∈ A ∩ U ∧ x ≠ y)) →
    let(U ∈ τ) →
    assume(x ∈ U) →
    apply(LocalBasis_Definition) →
    assert(∃V ∈ ℬ: x ∈ V ⊆ U) →
    setVar(V: satisfies_above) →
    apply(hypothesis, to: V) →
    assert(∃y ∈ T: (y ∈ A ∩ V ∧ x ≠ y)) →
    apply(Set_Intersection_Preserves_Subsets) →
    assert(A ∩ V ⊆ A ∩ U) →
    conclude(∃y ∈ T: (y ∈ A ∩ U ∧ x ≠ y)) →
    apply(Derivative_Open_Sets_Characterization) →
    conclude(x ∈ A')
  }
}
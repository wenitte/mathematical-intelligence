theorem Closure_Basis_Characterization() {
  let(T = ⟨S,τ⟩: TopologicalSpace) →
  let(𝔹 ⊆ τ: Basis) →
  let(A ⊆ S) →
  let(x ∈ S) →
  assert(
    x ∈ A⁻ ↔ (∀U ∈ 𝔹: x ∈ U → A ∩ U ≠ ∅)
  )
}

proof Closure_Basis_Characterization() {
  // Sufficient condition
  lemma Sufficient() {
    assume(x ∈ A⁻) →
    let(U ∈ 𝔹) →
    assert(U ∈ τ) by(Basis_Definition) →
    apply(Point_In_Closure_Condition) →
    conclude(x ∈ U → A ∩ U ≠ ∅)
  } →

  // Necessary condition
  lemma Necessary() {
    assume(∀U ∈ 𝔹: x ∈ U → A ∩ U ≠ ∅) →
    let(W ∈ τ) →
    assume(x ∈ W) →
    assert(∃V ∈ 𝔹: x ∈ V ∧ V ⊆ W) by(Basis_Definition) →
    let(V: satisfy(∃V)) →
    assert(A ∩ V ≠ ∅) by(assumption) →
    assert(A ∩ V ⊆ A ∩ W) by(Set_Intersection_Subset) →
    conclude(A ∩ W ≠ ∅) →
    conclude(x ∈ A⁻) by(Point_In_Closure_Condition)
  } →

  conclude(Sufficient() ∧ Necessary())
}
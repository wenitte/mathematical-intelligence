theorem Closure_Characterization_By_Open_Sets() {
  let(T: TopologicalSpace(S, τ)) →
  let(A: Subset(S)) →
  let(x: Point(T)) →
  let(A⁻: Closure(A)) →
  assert(
    x ∈ A⁻ ↔ ∀U ∈ τ ((x ∈ U) → (A ∩ U ≠ ∅))
  )
}

proof Closure_Characterization_By_Open_Sets() {
  // Sufficient Condition (→)
  assume(x ∈ A⁻) →
  proofByContradiction() {
    assume(∃U ∈ τ ((x ∈ U) ∧ (A ∩ U = ∅))) →
    assert(U ∈ τ) →
    assert(S\U is_closed) →
    chain(
      A ∩ U = ∅ →
      A ⊆ S\U →
      A⁻ ⊆ S\U →
      A⁻ ∩ U = ∅
    ) →
    assert(x ∈ A⁻ ∧ x ∈ U → x ∈ (A⁻ ∩ U)) →
    contradiction(x ∈ (A⁻ ∩ U), A⁻ ∩ U = ∅)
  } →

  // Necessary Condition (←)
  assume(∀U ∈ τ ((x ∈ U) → (A ∩ U ≠ ∅))) →
  proofByContradiction() {
    assume(x ∉ A⁻) →
    assert(x ∈ S\A⁻) →
    assert(S\A⁻ ∈ τ) →
    assert(A ∩ S\A⁻ ≠ ∅) →
    lemma Set_Subset_Closure() {
      assert(A ⊆ A⁻)
    } →
    apply(Set_Subset_Closure()) →
    assert(A ∩ S\A⁻ = ∅) →
    contradiction(A ∩ S\A⁻ ≠ ∅, A ∩ S\A⁻ = ∅)
  }
}
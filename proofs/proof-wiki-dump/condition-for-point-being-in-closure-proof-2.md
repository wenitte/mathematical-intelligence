theorem ClosurePointCondition() {
  assert(
    ∀T(T = ⟨S,τ⟩ ∧ T isTopologicalSpace) ∧
    ∀H(H ⊆ S) ∧
    ∀x(x ∈ S) ⇒
    (x ∈ H⁻ ↔ ∀U((U isOpenNeighborhood x) ⇒ (H ∩ U ≠ ∅)))
  )
} ↔

proof ClosurePointCondition() {
  setVar(T: TopologicalSpace, H: Set, x: Element) →
  
  lemma EquivalentCondition() {
    assert(
      x ∈ H⁻ ↔ ∀U(U ∈ τ ∧ x ∈ U ⇒ H ∩ U ≠ ∅)
    )
  } →

  lemma ChainEquivalences() {
    assert(
      ∀U(U ∈ τ) ⇒ [
        (H ∩ U = ∅) ↔
        (H ⊆ Uᶜ) ↔
        (H⁻ ⊆ Uᶜ) ↔
        (U ⊆ (H⁻)ᶜ) ↔
        (H⁻ ∩ U = ∅)
      ]
    )
  } →

  apply(ChainEquivalences()) →
  assert(x ∈ U ↔ x ∉ H⁻) →
  apply(RuleOfTransposition) →
  assert(x ∈ H⁻ ↔ ∀U((U isOpenNeighborhood x) ⇒ (H ∩ U ≠ ∅)))
}
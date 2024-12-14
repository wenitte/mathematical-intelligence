theorem Convergent_Net_Characterization() {
  let(X: MetricSpace, d: MetricFunction) →
  let(Λ: DirectedSet, ≼: PreorderRelation) →
  let(x_λ: Net(Λ → X)) →
  let(x: Element(X)) →
  assert(
    IsConvergent(x_λ, X, d) ↔
    ∀ε > 0 ∃λ₀∈Λ ∀λ∈Λ (λ₀ ≼ λ → d(x_λ, x) < ε)
  )
}

proof Convergent_Net_Characterization() {
  // Necessary Condition
  proof_forward() {
    assume(IsConvergent(x_λ, x)) →
    let(ε > 0) →
    lemma OpenBall_IsOpen() {
      assert(IsOpen(B_ε(x)))
    } →
    apply(ConvergentDef(x_λ, x)) →
    ∃λ₀∈Λ ∀λ∈Λ (
      λ₀ ≼ λ → x_λ ∈ B_ε(x)
    ) →
    assert(
      ∀λ∈Λ (λ₀ ≼ λ → d(x_λ, x) < ε)
    )
  }

  // Sufficient Condition
  proof_reverse() {
    assume(∀ε > 0 ∃λ₀∈Λ ∀λ∈Λ (λ₀ ≼ λ → d(x_λ, x) < ε)) →
    let(U: OpenSet(X), IsNeighborhood(U, x)) →
    ∃ε > 0 (
      B_ε(x) ⊆ U
    ) →
    apply(assumption, ε) →
    ∃λ₀∈Λ ∀λ∈Λ (
      λ₀ ≼ λ → x_λ ∈ B_ε(x)
    ) →
    assert(
      ∀λ∈Λ (λ₀ ≼ λ → x_λ ∈ U)
    ) →
    conclude(IsConvergent(x_λ, x))
  }
}
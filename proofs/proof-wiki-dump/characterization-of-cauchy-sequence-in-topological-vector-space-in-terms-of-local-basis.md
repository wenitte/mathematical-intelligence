theorem Cauchy_Sequence_TVS_Local_Basis() {
  let(X: TopologicalVectorSpace) →
  let(τ: Topology(X)) →
  let(B: LocalBasis(0_X)) →
  let(x_n: Sequence(X, ℕ)) →
  assert(
    isCauchy(x_n) ↔ 
    (∀V ∈ B ⇒ ∃N ∈ ℕ: ∀n,m ≥ N ⇒ x_n - x_m ∈ V)
  )
}

proof Cauchy_Sequence_TVS_Local_Basis() {
  // Necessary Condition
  lemma Forward_Direction() {
    assume(isCauchy(x_n)) →
    assert(∀V ∈ OpenNeighborhood(0_X) ⇒ 
           ∃N ∈ ℕ: ∀n,m ≥ N ⇒ x_n - x_m ∈ V) →
    assert(B ⊆ OpenNeighborhood(0_X)) →
    conclude(∀V ∈ B ⇒ ∃N ∈ ℕ: ∀n,m ≥ N ⇒ x_n - x_m ∈ V)
  }

  // Sufficient Condition
  lemma Backward_Direction() {
    assume(∀V ∈ B ⇒ ∃N ∈ ℕ: ∀n,m ≥ N ⇒ x_n - x_m ∈ V) →
    let(U: OpenNeighborhood(0_X)) →
    assert(∃V ∈ B: V ⊆ U) →
    existential(N ∈ ℕ: ∀n,m ≥ N ⇒ x_n - x_m ∈ V) →
    assert(∀n,m ≥ N ⇒ x_n - x_m ∈ U) →
    conclude(isCauchy(x_n))
  }

  apply(Forward_Direction()) ∧
  apply(Backward_Direction()) →
  conclude(theorem)
}
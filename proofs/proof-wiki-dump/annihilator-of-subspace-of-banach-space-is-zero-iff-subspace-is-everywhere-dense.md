theorem Annihilator_Subspace_Dense() {
  let(GF ∈ {ℝ, ℂ}) ∧
  let(X: BanachSpace(GF)) ∧
  let(M: VectorSubspace(X)) ∧
  let(X*: NormedDualSpace(X)) ∧
  let(M⊥: Annihilator(M)) →
  assert(
    M⊥ = {0_{X*}} ↔ M is_dense_in X
  )
}

proof Annihilator_Subspace_Dense() {
  // Necessary Condition (←)
  lemma Necessary_Condition() {
    assume(¬(M is_dense_in X)) →
    assert(cl(M) is_closed_linear_subspace(X)) →
    assert(X ≠ cl(M)) →
    assert(cl(M) is_proper_closed_subspace(X)) →
    ∃f ∈ (X* ∖ {0_{X*}}) : (
      ∀x ∈ M : f(x) = 0
    ) →
    assert(f ∈ M⊥) →
    assert(M⊥ ≠ {0_{X*}}) →
    apply(Contraposition) →
    assert(M⊥ = {0_{X*}} → M is_dense_in X)
  }

  // Sufficient Condition (→)
  lemma Sufficient_Condition() {
    assume(M is_dense_in X) →
    setVar(f ∈ M⊥) →
    assert(∀x ∈ M : f(x) = 0) →
    assert(GF is_Hausdorff) →
    assert(M is_dense_in X) →
    assert(∀x ∈ X : f(x) = 0) →
    assert(f = 0_{X*}) →
    assert(0_{X*} ∈ M⊥) →
    assert(M⊥ = {0_{X*}})
  }

  apply(Necessary_Condition()) ∧
  apply(Sufficient_Condition()) →
  assert(M⊥ = {0_{X*}} ↔ M is_dense_in X)
}
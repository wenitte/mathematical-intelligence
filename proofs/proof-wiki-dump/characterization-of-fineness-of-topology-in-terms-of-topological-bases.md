theorem Topology_Fineness_Characterization() {
  let(X: Set, τ: Topology(X), τ': Topology(X)) →
  let(𝔹 ⊆ τ: Basis(τ), 𝔹' ⊆ τ': Basis(τ')) →
  assert(
    (∀x ∈ X, ∀B ∈ 𝔹: x ∈ B ⇒ ∃B' ∈ 𝔹': x ∈ B' ∧ B' ⊆ B) ↔
    (τ' is_finer_than τ)
  )
}

proof Topology_Fineness_Forward() {
  // (1) ⇒ (2)
  assume(τ' is_finer_than τ) →
  let(x ∈ X, B ∈ 𝔹: x ∈ B) →
  assert(B ∈ τ') by(assumption) →
  lemma Basis_Union() {
    assert(∃I, ∃{B'_α | α ∈ I} ⊆ 𝔹': B = ⋃(α∈I) B'_α)
  } →
  apply(Basis_Union()) →
  assert(x ∈ B ⇒ ∃α ∈ I: x ∈ B'_α) →
  assert(B'_α ⊆ B) by(Set_Subset_Union) →
  setVar(B' := B'_α) →
  conclude(∃B' ∈ 𝔹': x ∈ B' ∧ B' ⊆ B)
}

proof Topology_Fineness_Backward() {
  // (2) ⇒ (1)
  assume(∀x ∈ X, ∀B ∈ 𝔹: x ∈ B ⇒ ∃B' ∈ 𝔹': x ∈ B' ∧ B' ⊆ B) →
  let(U ∈ τ) →
  let(x ∈ U) →
  lemma Basis_Decomposition() {
    assert(∃I, ∃{B_α | α ∈ I} ⊆ 𝔹: U = ⋃(α∈I) B_α)
  } →
  apply(Basis_Decomposition()) →
  assert(∃α ∈ I: x ∈ B_α ∧ B_α ⊆ U) →
  apply(assumption) →
  assert(∃B' ∈ 𝔹': x ∈ B' ∧ B' ⊆ B_α) →
  assert(B' ⊆ U) by(transitivity) →
  setVar(B'_x := B') →
  assert(U = ⋃(x∈U) B'_x) by(
    assert(U ⊆ ⋃(x∈U) B'_x) ∧
    assert(⋃(x∈U) B'_x ⊆ U)
  ) →
  assert(U ∈ τ') by(Topology_Union_Closure) →
  conclude(τ ⊆ τ')
}
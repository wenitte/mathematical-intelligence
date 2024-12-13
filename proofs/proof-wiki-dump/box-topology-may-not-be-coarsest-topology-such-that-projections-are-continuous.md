theorem Box_Topology_Not_Coarsest() {
  let(I: IndexSet) →
  let({X_i, τ_i}: TopologicalSpaceFamily(I)) →
  let(X := ∏_{i∈I} X_i) →
  let(τ: BoxTopology(X)) →
  let(pr_i: X → X_i, ∀i∈I) →
  assert(
    ∀{x_j}_{j∈I} ∈ X: pr_i({x_j}_{j∈I}) = x_i
  ) →
  assert(
    ¬(τ = CoarsestTopology({pr_i}_{i∈I}))
  )
} ↔

proof Box_Topology_Not_Coarsest() {
  assert(Continuous({pr_i}_{i∈I})) →
  assert(ProductTopology = CoarsestTopology({pr_i}_{i∈I})) →
  
  lemma BoxProduct_NotEqual_Product() {
    let(X: TopologicalSpace) →
    let(U ∈ τ: U ≠ ∅ ∧ U ≠ X) →
    let(Y := ∏_{n∈ℕ} X) →
    let(τ_T: ProductTopology(Y)) →
    let(τ_b: BoxTopology(Y)) →
    let(V := ∏_{n∈ℕ} U) →
    assert(V ∈ τ_b) →
    assert(V ∉ τ_T)
  } →

  let(ℝ: EuclideanSpace) →
  let(ε ∈ ℝ_{>0}) →
  let(U := (-ε,ε)) →
  apply(BoxProduct_NotEqual_Product()) →
  assert(U^ℕ ∈ BoxTopology(ℝ^ℕ)) →
  assert(U^ℕ ∉ ProductTopology(ℝ^ℕ)) →
  conclude(BoxTopology ≠ ProductTopology)
}
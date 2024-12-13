theorem Product_Contains_Box_Topology() {
  let(I: IndexSet) →
  let(𝒮: Family({(Xi, τi) | i ∈ I})) →
  let(X: CartesianProduct(Xi, i ∈ I)) →
  let(τ: ProductTopology(X)) →
  let(τ': BoxTopology(X)) →
  assert(τ ⊆ τ')
} ↔

proof Product_Contains_Box_Topology() {
  let(𝔹: NaturalBasis(ProductTopology)) →
  let(𝔹': Basis(BoxTopology)) →
  
  lemma Basis_Containment() {
    assert(∀B ∈ 𝔹 → B ∈ 𝔹')
  } →

  apply(Natural_Basis_Product_Topology()) →
  apply(Basis_Box_Topology()) →
  assert(𝔹 ⊆ 𝔹') →
  
  apply(Basis_Condition_Coarser_Topology()) →
  assert(𝔹 ⊆ 𝔹' → τ ⊆ τ') →
  conclude(τ ⊆ τ')
}
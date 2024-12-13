theorem Box_Product_Topology_Equivalence(n: ℕ) {
  let(k ∈ {1,...,n}) →
  let(Tk = (Xk,τk): TopologicalSpace) →
  let(X = ∏(k=1 to n)Xk) →
  assert(BoxTopology(X) = ProductTopology(X))
} ↔

proof Box_Product_Topology_Equivalence() {
  let(τ = ProductTopology(X)) ∧
  let(τ' = BoxTopology(X)) →
  
  // First direction: τ' ⊆ τ
  lemma Box_Subset_Product() {
    let(U ∈ τ') →
    ∃I: IndexSet [
      U = ⋃(i∈I)(U(i,1) × ... × U(i,n)) ∧
      ∀i∈I ∀k∈{1,...,n}[U(i,k) ∈ τk]
    ] →
    let(prk: X → Xk) →
    assert(
      prk⁻¹(U(i,k)) = X₁×...×X(k-1)×U(i,k)×X(k+1)×...×Xn
    ) →
    assert(
      U = ⋃(i∈I)⋂(k=1 to n)prk⁻¹(U(i,k))
    ) →
    assert(U ∈ τ)
  } →
  
  // Second direction: τ ⊆ τ'
  lemma Product_Subset_Box() {
    let(U ∈ τ) →
    ∃I: IndexSet [
      U = ⋃(i∈I)⋂(l=1 to mi)prj(l)⁻¹(U(i,l)) ∧
      ∀i∈I[mi ∈ ℕ ∧ j(l)∈{1,...,n} ∧ U(i,l)∈τj(l)]
    ] →
    assert(
      U = ⋃(i∈I)⋂(k=1 to n)⋂(l: k=j(l))prk⁻¹(U(i,l))
    ) →
    assert(
      U = ⋃(i∈I)⋂(k=1 to n)(X₁×...×X(k-1)×⋂(l: k=j(l))U(i,l)×X(k+1)×...×Xn)
    ) →
    assert(⋂(l: k=j(l))U(i,l) ∈ τk) →
    assert(U ∈ τ')
  } →
  
  apply(Box_Subset_Product()) ∧
  apply(Product_Subset_Box()) →
  assert(τ = τ')
}
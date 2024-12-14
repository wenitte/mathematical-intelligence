theorem Neighborhood_Characterization_By_Basis() {
  let(S: TopologicalSpace, τ: Topology) →
  let(𝔹: AnalyticBasis(τ)) →
  let(N: Subset(S)) →
  let(x: Element(S)) →
  assert(
    IsNeighborhood(N,x) ↔ ∃B ∈ 𝔹[x ∈ B ∧ B ⊆ N]
  )
}

proof Neighborhood_Characterization_By_Basis() {
  lemma Basis_Induces_Local_Basis() {
    assert(𝔹ₓ = {B ∈ 𝔹 : x ∈ B} → IsLocalBasis(𝔹ₓ,x))
  } →
  
  apply(Basis_Induces_Local_Basis()) →
  
  assert(
    IsNeighborhood(N,x) ↔ ∃B ∈ 𝔹ₓ[B ⊆ N]
  ) →
  
  assert(
    ∃B ∈ 𝔹ₓ[B ⊆ N] ↔ ∃B ∈ 𝔹[x ∈ B ∧ B ⊆ N]
  ) →
  
  conclude(
    IsNeighborhood(N,x) ↔ ∃B ∈ 𝔹[x ∈ B ∧ B ⊆ N]
  )
}
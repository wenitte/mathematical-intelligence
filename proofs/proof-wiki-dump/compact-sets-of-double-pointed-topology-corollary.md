theorem Compact_Double_Pointed_Topology_Corollary() {
  let(S: TopologicalSpace, τ_S: Topology(S))
  let(D: Set | |D| = 2)
  let(τ_D: IndiscreteTopology(D))
  let(τ: DoublePointedTopology(S × D))
  assert(
    isCompact(⟨S × D, τ⟩) ↔ isCompact(⟨S, τ_S⟩)
  )
}

proof Compact_Double_Pointed_Topology_Corollary() {
  let(pr₁: S × D → S) →
  
  lemma Projection_Is_Surjection() {
    assert(
      pr₁(S × D) = S
    )
  } →
  
  apply(Projection_Is_Surjection()) →
  apply(Compact_Sets_Double_Pointed_Topology()) →
  
  assert(
    isCompact(⟨S × D, τ⟩) ↔ isCompact(⟨S, τ_S⟩)
  )
}
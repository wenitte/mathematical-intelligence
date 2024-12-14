theorem Topology_Coarseness_Partial_Order() {
  let(S: Set) ∧
  let(𝕋: {τ | τ is_topology_on S}) ∧
  let(≤: Relation(𝕋 × 𝕋)) ∧
  assert(
    ∀τ₁,τ₂ ∈ 𝕋: τ₁ ≤ τ₂ ↔ τ₁ is_coarser_than τ₂
  ) →
  assert(
    is_partial_ordering(≤, 𝕋)
  )
} ↔

proof Topology_Coarseness_Partial_Order() {
  lemma Coarse_Subset_Equivalence() {
    assert(
      ∀τ₁,τ₂ ∈ 𝕋: τ₁ ≤ τ₂ ↔ τ₁ ⊆ τ₂
    )
  } →
  
  apply(Subset_Relation_Is_Ordering) →
  assert(
    is_ordering(≤, 𝕋)
  ) →
  
  apply(Topologies_Not_Always_Comparable) →
  assert(
    ¬is_total_ordering(≤, 𝕋)
  ) →
  
  assert(
    is_partial_ordering(≤, 𝕋)
  )
}
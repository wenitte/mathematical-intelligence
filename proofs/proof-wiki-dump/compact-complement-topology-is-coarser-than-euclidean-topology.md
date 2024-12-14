theorem Compact_Complement_Topology_Coarser() {
  let T = ⟨ℝ,τ⟩ be_topology
  assert(
    T is_compact_complement_topology ⇒
    τ is_coarser_than euclidean_topology(ℝ)
  )
} ↔

proof Compact_Complement_Topology_Coarser() {
  setVar(U ∈ τ) →
  let V = ℝ∖U →
  assert(U ∈ τ ⇒ V is_compact) →
  lemma Compact_Is_Euclidean_Closed() {
    assert(
      ∀S ⊆ ℝ: S is_compact ⇒ S is_closed_in euclidean_topology(ℝ)
    )
  } →
  apply(Compact_Is_Euclidean_Closed()) →
  assert(V is_closed_in euclidean_topology(ℝ)) →
  assert(U = ℝ∖V is_open_in euclidean_topology(ℝ)) →
  assert(
    ∀W ∈ τ: W is_open_in euclidean_topology(ℝ)
  ) →
  by_definition(coarser_topology) →
  assert(τ is_coarser_than euclidean_topology(ℝ))
}
theorem Compact_Complement_Topology_Irreducible() {
  assert(
    let T = (ℝ,τ) be_topology ∧
    is_compact_complement_topology(T) →
    is_irreducible_space(T)
  )
} ↔

proof Compact_Complement_Topology_Irreducible() {
  setVar(U₁,U₂: τ) →
  setVar(V₁ = ℝ∖U₁, V₂ = ℝ∖U₂) →
  
  assert(is_compact(V₁) ∧ is_compact(V₂)) →
  
  lemma Compact_Sets_Bounded() {
    assert(
      is_compact(V₁) ∧ is_compact(V₂) →
      is_bounded(V₁) ∧ is_bounded(V₂)
    )
  } →
  
  apply(Compact_Sets_Bounded()) →
  
  assert(
    is_bounded(V₁ ∪ V₂) ∧
    ∃M₁,M₂ ∈ ℝ: [
      M₁ = max{sup(V₁), sup(V₂)} ∧
      M₂ = min{inf(V₁), inf(V₂)} ∧
      ∀x ∈ (V₁ ∪ V₂): M₂ ≤ x ≤ M₁
    ]
  ) →
  
  assert(V₁ ∪ V₂ ≠ ℝ) →
  
  assert(ℝ∖(V₁ ∪ V₂) ≠ ∅) →
  
  apply(DeMorgan_Law()) →
  
  assert((ℝ∖V₁) ∩ (ℝ∖V₂) ≠ ∅) →
  
  assert(U₁ ∩ U₂ ≠ ∅) →
  
  conclude(
    ∀U₁,U₂ ∈ τ: U₁ ∩ U₂ ≠ ∅ →
    is_irreducible_space(T)
  )
}
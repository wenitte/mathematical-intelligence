theorem CompactComplementTopology() {
  assert(
    let T = (ℝ,τ) ∧
    τ = {A ⊆ ℝ : ℝ\A is compact} →
    IsTopology(τ,ℝ)
  )
} ↔

proof CompactComplementTopology() {
  // Empty set is in topology
  assert(∅ ∈ τ) →
  
  // Real line is in topology
  assert(ℝ\ℝ = ∅ is compact) →
  assert(ℝ ∈ τ) →

  // Intersection closure
  lemma IntersectionClosed() {
    assert(∀A,B ∈ τ →
      let H = A ∩ B →
      ℝ\H = ℝ\(A ∩ B) →
      ℝ\H = (ℝ\A) ∪ (ℝ\B)  // By DeMorgan's Laws
    ) →
    assert(ℝ\A, ℝ\B are compact) →
    apply(UnionCompactSetsCompact()) →
    assert(ℝ\H is compact) →
    assert(H ∈ τ)
  } →

  // Arbitrary union closure  
  lemma UnionClosed() {
    assert(∀𝒰 ⊆ τ →
      ℝ\(⋃𝒰) = ⋂{ℝ\U : U ∈ 𝒰}  // By DeMorgan's Laws
    ) →
    assert(∀U ∈ 𝒰 → ℝ\U is compact) →
    apply(IntersectionCompactSetsCompact()) →
    assert(ℝ\(⋃𝒰) is compact) →
    assert(⋃𝒰 ∈ τ)
  } →

  // Conclude topology properties
  apply(IntersectionClosed()) →
  apply(UnionClosed()) →
  assert(IsTopology(τ,ℝ))
}
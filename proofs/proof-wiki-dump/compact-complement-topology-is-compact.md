theorem Compact_Complement_Topology_is_Compact() {
  assert(
    ∀T(T = ⟨ℝ,τ⟩ ∧ IsCompactComplementTopology(T)) →
    IsCompact(T)
  )
} ↔

proof Compact_Complement_Topology_is_Compact() {
  setVar(𝒞: OpenCover(ℝ)) →
  setVar(U ∈ 𝒞) →
  
  lemma CompactComplement() {
    assert(
      ∀U ∈ 𝒞 → IsCompact(ℝ∖U, EuclideanTopology)
    )
  } →
  
  lemma EuclideanOpenness() {
    assert(
      ∀U ∈ 𝒞 → IsOpen(U, EuclideanTopology)
    )
  } →
  
  apply(CompactComplement()) →
  apply(EuclideanOpenness()) →
  
  assert(
    ∃𝒞ₖ ⊆ 𝒞(
      IsFinite(𝒞ₖ) ∧
      ∪𝒞ₖ = ℝ
    )
  ) →
  
  assert(IsCompact(T))
}
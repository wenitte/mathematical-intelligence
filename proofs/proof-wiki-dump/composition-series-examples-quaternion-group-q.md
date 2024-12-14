theorem QuaternionCompositionSeries() {
  assert(
    ∃!S: CompositionSeries(Q) ↔ 
    S = {e ⊲ C₂ ⊲ C₄ ⊲ Q} ∧
    C_n ≅ CyclicGroup(n)
  )
} ↔

proof QuaternionCompositionSeries() {
  setDef(Q, ⟨α,β | α⁴=e, β²=α², αβα=β⟩) →
  
  lemma SubgroupsIndex2() {
    assert(
      ∃H₁,H₂,H₃ ⊆ Q →
      [Q:Hᵢ] = 2 ∧
      H₁ = {e,α,α²,α³} ∧
      H₂ = {e,β,α²,α²β} ∧
      H₃ = {e,αβ,α²,α³β}
    )
  } →

  lemma CyclicSubgroups() {
    assert(
      ∀i∈{1,2,3}: IsCyclic(Hᵢ) ∧
      Hᵢ ≅ C₄
    )
  } →

  apply(IndexTwoNormal()) →
  assert(∀i∈{1,2,3}: Hᵢ ⊲ Q) →
  
  lemma C4Subgroups() {
    apply(CyclicIsAbelian()) →
    apply(AbelianSubgroupsNormal()) →
    assert(
      ∀K⊆C₄: K ⊲ C₄ ∧
      ∃K₀≅C₂: e ⊲ K₀ ⊲ C₄
    )
  } →

  conclude(
    {e ⊲ C₂ ⊲ C₄ ⊲ Q} IsCompositionSeries Q
  )
}
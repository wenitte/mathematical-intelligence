theorem D4_Composition_Series() {
  assert(
    ∃ D₄: Group ∧ 
    CompositionSeries(D₄) = {
      Series₁: {e} ⊲ C₂ ⊲ C₄ ⊲ D₄,
      Series₂: {e} ⊲ C₂ ⊲ K₄ ⊲ D₄
    }
  )
} ↔

proof D4_Composition_Series() {
  define(D₄ := ⟨α,β | α⁴ = β² = e, βαβ = α⁻¹⟩) →
  
  lemma Index2_Subgroups() {
    assert(
      SubgroupsIndex2(D₄) = {
        H₁: {e, α, α², α³},
        H₂: {e, α², β, βα²}
      }
    )
  } →

  assert(H₁ = ⟨α⟩ = C₄) ∧
  assert(H₂ = D₂ = K₄) →

  apply(Subgroup_Index2_Normal) →
  assert(H₁ ⊲ D₄ ∧ H₂ ⊲ D₄) →

  lemma C4_Normal_Chain() {
    apply(Cyclic_Group_Abelian, C₄) →
    apply(Abelian_Subgroups_Normal) →
    assert(∀G ⊆ C₄: G ⊲ C₄) →
    assert({e} ⊲ C₂ ⊲ C₄)
  } →

  lemma K4_Normal_Chain() {
    apply(Klein_Group_Abelian, K₄) →
    apply(Abelian_Subgroups_Normal) →
    assert(∀G ⊆ K₄: G ⊲ K₄) →
    assert({e} ⊲ C₂ ⊲ K₄)
  } →

  conclude(
    CompositionSeries(D₄) = {
      {e} ⊲ C₂ ⊲ C₄ ⊲ D₄,
      {e} ⊲ C₂ ⊲ K₄ ⊲ D₄
    }
  )
}
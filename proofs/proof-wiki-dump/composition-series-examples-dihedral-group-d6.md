theorem D6_Composition_Series() {
  assert(
    ∀G[G = D₆] ⇒ CompSeries(G) = {
      {e ⊲ C₃ ⊲ C₆ ⊲ D₆},
      {e ⊲ C₂ ⊲ C₆ ⊲ D₆},
      {e ⊲ C₃ ⊲ D₃ ⊲ D₆}
    }
  )
} ↔

proof D6_Composition_Series() {
  setDef(D₆, ⟨α,β : α⁶ = β² = e, βαβ = α⁻¹⟩) →
  
  lemma Index2_Subgroups() {
    assert(
      SubgroupsIndex2(D₆) = {
        {e, α, α², α³, α⁴, α⁵},
        {e, α², α⁴, β, α²β, α⁴β},
        {e, α², α⁴, αβ, α³β, α⁵β}
      }
    )
  } →
  
  assert(
    {e, α, α², α³, α⁴, α⁵} = ⟨α⟩ = C₆ ∧
    {e, α², α⁴, β, α²β, α⁴β} = ⟨α², β⟩ = D₃ ∧
    {e, α², α⁴, αβ, α³β, α⁵β} = ⟨α², αβ⟩ = D₃
  ) →
  
  apply(Subgroup_Index2_Normal) →
  assert(∀H ∈ SubgroupsIndex2(D₆) ⇒ H ⊲ D₆) →
  
  lemma C6_Normal_Subgroups() {
    apply(Cyclic_Group_Abelian) →
    apply(Abelian_Subgroups_Normal) →
    assert(∀H ≤ C₆ ⇒ H ⊲ C₆)
  } →
  
  lemma D3_Normal_Subgroups() {
    assert(D₃ ≅ S₃) →
    apply(S3_Normal_Subgroups) →
    assert(NormalSubgroups(D₃) = {e, C₃, D₃})
  } →
  
  compose_series({e ⊲ C₃ ⊲ C₆ ⊲ D₆}) →
  compose_series({e ⊲ C₂ ⊲ C₆ ⊲ D₆}) →
  compose_series({e ⊲ C₃ ⊲ D₃ ⊲ D₆}) →
  
  assert(¬∃H[H ⊲ D₃ ∧ H ∉ {e, C₃, D₃}]) →
  conclude()
}
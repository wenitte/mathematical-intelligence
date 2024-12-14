theorem Combination_Continuous_Inverse() {
  let S: TopologicalSpace
  let R: NormedDivisionRing
  let τ_S: Topology(S)
  let τ_R: InducedTopology(R.norm)
  let g: ContinuousMapping(S → R)
  let U = S \ {x | g(x) = 0}
  let g⁻¹: Mapping(U → R)
  let τ_U: SubspaceTopology(U)

  assert(
    (∀x ∈ U: g⁻¹(x) = g(x)⁻¹) →
    IsContinuous(g⁻¹: (U,τ_U) → (R,τ_R))
  )
} ↔

proof Combination_Continuous_Inverse() {
  lemma NormedRingTopological() {
    assert(
      IsNormedDivisionRing(R) →
      IsTopologicalDivisionRing(R,+,*,τ_R)
    )
  } →
  
  apply(NormedRingTopological()) →
  
  lemma InverseRuleContinuous() {
    assert(
      IsTopologicalDivisionRing(R) ∧
      IsContinuous(g) →
      IsContinuous(g⁻¹: (U,τ_U) → (R,τ_R))
    )
  } →
  
  apply(InverseRuleContinuous()) →
  assert(IsContinuous(g⁻¹: (U,τ_U) → (R,τ_R)))
}
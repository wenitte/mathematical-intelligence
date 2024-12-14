theorem Combination_Continuous_Mappings_Sum_Rule() {
  let S: TopologicalSpace
  let R: NormedDivisionRing
  let τ_S: Topology
  let τ_R: Topology
  let f,g: ContinuousMapping(S → R)
  let norm: R → ℝ
  
  assert(
    τ_R = InducedTopology(norm) ∧
    ∀x ∈ S: (f + g)(x) = f(x) + g(x) ⇒
    (f + g): (S,τ_S) → (R,τ_R) is continuous
  )
} ↔

proof Combination_Continuous_Mappings_Sum_Rule() {
  lemma NormedDivisionRing_TopologicalDivisionRing() {
    assert(
      (R,+,*,τ_R) is TopologicalDivisionRing
    )
  } →
  
  apply(NormedDivisionRing_TopologicalDivisionRing()) →
  
  lemma ContinuousMapping_Sum_Rule() {
    assert(
      f,g continuous ∧ 
      R is TopologicalDivisionRing ⇒
      (f + g) continuous
    )
  } →
  
  apply(ContinuousMapping_Sum_Rule()) →
  
  assert(
    (f + g): (S,τ_S) → (R,τ_R) is continuous
  )
}
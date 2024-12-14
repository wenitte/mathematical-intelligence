theorem Combination_Continuous_Mappings_Translation() {
  assert(
    let(S: TopologicalSpace, τ_S: Topology) ∧
    let(R: NormedDivisionRing, +: Operation, *: Operation, ‖·‖: Norm) ∧
    let(τ_R: Topology, induced_by(‖·‖)) ∧
    let(λ: R) ∧
    let(f: ContinuousMapping(S → R)) ∧
    let((λ + f): Mapping(S → R)) ∧
    ∀x ∈ S: (λ + f)(x) = λ + f(x) 
    ⇒
    is_continuous((λ + f): Mapping(S,τ_S → R,τ_R))
  )
}

proof Combination_Continuous_Mappings_Translation() {
  lemma NormedRing_Is_TopologicalRing() {
    assert(
      is_topological_division_ring(R,+,*,τ_R)
    )
  } →
  
  apply(NormedRing_Is_TopologicalRing()) →
  
  lemma Translation_Rule() {
    assert(
      ∀f: ContinuousMapping(S → R) ∧
      ∀λ: R
      ⇒
      is_continuous((λ + f): Mapping(S,τ_S → R,τ_R))
    )
  } →
  
  apply(Translation_Rule()) →
  assert(is_continuous((λ + f): Mapping(S,τ_S → R,τ_R)))
}
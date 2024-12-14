theorem Negation_Rule_Continuous_Mappings() {
  assert(
    let S: TopologicalSpace(τ_S) ∧
    let R: NormedDivisionRing(+, *, ∥·∥) ∧
    let τ_R: Topology = induced_by(∥·∥) ∧
    let g: Mapping(S → R, continuous) ∧
    let -g: Mapping(S → R) where
      ∀x ∈ S: (-g)(x) = -(g(x))
    ⇒
    (-g): Mapping(S → R, continuous)
  )
}

proof Negation_Rule_Continuous_Mappings() {
  lemma NormedRing_Is_TopologicalRing() {
    assert(
      R: NormedDivisionRing ⇒
      R: TopologicalDivisionRing(τ_R)
    )
  } →
  apply(NormedRing_Is_TopologicalRing()) →
  lemma Continuous_Negation_TopologicalRing() {
    assert(
      R: TopologicalDivisionRing ∧
      g: Mapping(S → R, continuous)
      ⇒
      (-g): Mapping(S → R, continuous)
    )
  } →
  apply(Continuous_Negation_TopologicalRing()) →
  assert((-g): Mapping(S → R, continuous))
}
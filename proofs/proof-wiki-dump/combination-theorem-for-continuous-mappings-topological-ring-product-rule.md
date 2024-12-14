theorem ContinuousMappingProduct() {
  let(S: TopologicalSpace, τ_S: Topology) →
  let(R: TopologicalRing, τ_R: Topology) →
  let(f: S → R, g: S → R) →
  assume(continuous(f) ∧ continuous(g)) →
  define(f * g: S → R, ∀x ∈ S: (f * g)(x) = f(x) * g(x)) →
  assert(
    continuous(f * g: (S, τ_S) → (R, τ_R))
  )
}

proof ContinuousMappingProduct() {
  lemma TopologicalRingProperty() {
    assert((R, *, τ_R) is TopologicalSemigroup)
  } →
  
  apply(TopologicalRingProperty()) →
  
  lemma ContinuousSemigroupProduct() {
    assert(
      continuous(f) ∧ continuous(g) ∧ 
      (R, *, τ_R) is TopologicalSemigroup →
      continuous(f * g)
    )
  } →
  
  apply(ContinuousSemigroupProduct()) →
  assert(continuous(f * g: (S, τ_S) → (R, τ_R)))
}
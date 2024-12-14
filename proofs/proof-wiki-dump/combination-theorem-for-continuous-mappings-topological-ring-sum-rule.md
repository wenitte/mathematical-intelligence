theorem Continuous_Sum_Rule() {
  let(S: TopologicalSpace, τS: Topology)
  let(R: TopologicalRing, τR: Topology)
  let(f: ContinuousMap(S → R))
  let(g: ContinuousMap(S → R))
  define(f + g: Map(S → R)) {
    ∀x ∈ S ⇒ (f + g)(x) = f(x) + g(x)
  }
  assert(
    (f: ContinuousMap(S,τS → R,τR) ∧ g: ContinuousMap(S,τS → R,τR)) →
    (f + g): ContinuousMap(S,τS → R,τR)
  )
} ↔

proof Continuous_Sum_Rule() {
  lemma TopologicalRing_Property() {
    assert(
      R: TopologicalRing →
      (R,+,τR): TopologicalGroup
    )
  } →
  apply(TopologicalRing_Property()) →
  apply(Product_Rule_Continuous_Mappings_TopologicalGroup) {
    substitute(G ← R)
    substitute(τG ← τR)
  } →
  assert((f + g): ContinuousMap(S,τS → R,τR))
}
theorem TopologicalGroup_ContinuousProduct() {
  assert(
    ∀S(TopologicalSpace(S, τ_S) ∧
    ∀G(TopologicalGroup(G, *, τ_G) ∧
    ∀f,g(ContinuousMapping(f, S→G) ∧ ContinuousMapping(g, S→G)) →
    ∀x∈S(f*g(x) = f(x) * g(x)) →
    ContinuousMapping(f*g, S→G)))
  )
} ↔

proof TopologicalGroup_ContinuousProduct() {
  assert(TopologicalGroup(G, *, τ_G)) →
  lemma TopologicalGroup_IsSemigroup() {
    assert(TopologicalGroup(G, *, τ_G) → TopologicalSemigroup(G, *, τ_G))
  } →
  apply(TopologicalGroup_IsSemigroup()) →
  lemma SemigroupContinuousProduct() {
    assert(
      TopologicalSemigroup(G, *, τ_G) ∧
      ContinuousMapping(f, S→G) ∧
      ContinuousMapping(g, S→G) →
      ContinuousMapping(f*g, S→G)
    )
  } →
  apply(SemigroupContinuousProduct()) →
  assert(ContinuousMapping(f*g, S→G))
}
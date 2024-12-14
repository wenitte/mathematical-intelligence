theorem ContinuousCombination() {
  assume(
    S: TopologicalSpace(τ_S),
    G: TopologicalSemigroup(*, τ_G),
    f: ContinuousMapping(S → G),
    g: ContinuousMapping(S → G),
    f*g: Mapping(S → G),
    ∀x ∈ S: (f*g)(x) = f(x) * g(x)
  )
  assert(
    f*g: ContinuousMapping(S → G)
  )
} ↔

proof ContinuousCombination() {
  define(f×g: Mapping(S → G×G)) →
  assert(∀x ∈ S: (f×g)(x) = ⟨f(x), g(x)⟩) →
  
  lemma PointwiseOperation() {
    assert(f*g = * ∘ (f×g))
  } →
  
  setVar(τ: ProductTopology(G×G)) →
  
  lemma ContinuousProduct() {
    assert(f×g: ContinuousMapping(S → (G×G, τ)))
  } →
  
  assert(
    *: ContinuousMapping((G×G, τ) → G) ∧
    f×g: ContinuousMapping(S → (G×G, τ))
  ) →
  
  lemma CompositeMapping() {
    assert(
      (h₁: ContinuousMapping(X → Y) ∧ 
       h₂: ContinuousMapping(Y → Z)) →
      (h₂ ∘ h₁): ContinuousMapping(X → Z)
    )
  } →
  
  apply(CompositeMapping(), {h₁ = f×g, h₂ = *}) →
  assert(* ∘ (f×g): ContinuousMapping(S → G)) →
  apply(PointwiseOperation()) →
  assert(f*g: ContinuousMapping(S → G))
}
theorem ContinuousMapping_TopologicalGroup_Multiple() {
  assert(
    [S, τ_S: TopologicalSpace] ∧
    [G, *, τ_G: TopologicalGroup] ∧
    [λ ∈ G] ∧
    [f: (S,τ_S) → (G,τ_G)] ∧
    [isContinuous(f)] ∧
    [λ*f: S → G | ∀x ∈ S: (λ*f)(x) = λ * f(x)] ∧
    [f*λ: S → G | ∀x ∈ S: (f*λ)(x) = f(x) * λ] ⇒
    [isContinuous(λ*f)] ∧ [isContinuous(f*λ)]
  )
} ↔

proof ContinuousMapping_TopologicalGroup_Multiple() {
  assert(TopologicalGroup ⊂ TopologicalSemigroup) →
  setVar(G,*,τ_G: TopologicalSemigroup) →
  
  lemma MultipleRule_TopologicalSemigroup() {
    assert(
      [S,τ_S: TopologicalSpace] ∧
      [G,*,τ_G: TopologicalSemigroup] ∧
      [λ ∈ G] ∧
      [f: (S,τ_S) → (G,τ_G)] ∧
      [isContinuous(f)] ⇒
      [isContinuous(λ*f)] ∧ [isContinuous(f*λ)]
    )
  } →
  
  apply(MultipleRule_TopologicalSemigroup()) →
  assert([isContinuous(λ*f)] ∧ [isContinuous(f*λ)])
}
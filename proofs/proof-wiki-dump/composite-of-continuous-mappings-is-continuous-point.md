theorem Composite_Continuous_Mappings() {
  assume(
    T₁, T₂, T₃: TopologicalSpace,
    f: T₁ → T₂,
    g: T₂ → T₃,
    x ∈ T₁,
    isContinuous(f, x),
    isContinuous(g, f(x))
  ) ⇒
  assert(
    isContinuous(g ∘ f, x)
  )
} ↔

proof Composite_Continuous_Mappings() {
  setVar(N: Neighborhood((g ∘ f)(x))) →
  
  lemma Continuity_G() {
    apply(ContinuityDefinition(g, f(x))) →
    assert(
      ∃L: Neighborhood(f(x)) | g[L] ⊆ N
    )
  } →

  lemma Continuity_F() {
    apply(ContinuityDefinition(f, x)) →
    assert(
      ∃M: Neighborhood(x) | f[M] ⊆ L
    )
  } →

  apply(Continuity_G()) →
  apply(Continuity_F()) →
  
  assert(
    (g ∘ f)[M] ⊆ g[L] ∧
    g[L] ⊆ N
  ) →
  
  conclude(
    (g ∘ f)[M] ⊆ N ⇒
    isContinuous(g ∘ f, x)
  )
}
theorem Continuous_Inverse_Mapping() {
  assert(
    ∀S[TopologicalSpace] ∧
    ∀G[TopologicalGroup] ∧
    ∀g[ContinuousMapping: S → G] →
    let g⁻¹(x) = (g(x))⁻¹ ∀x ∈ S →
    g⁻¹[ContinuousMapping: S → G]
  )
} ↔

proof Continuous_Inverse_Mapping() {
  setVar(S: TopologicalSpace) →
  setVar(G: TopologicalGroup) →
  setVar(g: ContinuousMapping[S → G]) →
  
  lemma InverseMapping_Continuous() {
    assert(
      ∀φ[Mapping: G → G] where φ(x) = x⁻¹ →
      φ[ContinuousMapping]
    )
  } →
  
  lemma Composition_Continuous() {
    assert(
      ∀f₁[ContinuousMapping] ∧
      ∀f₂[ContinuousMapping] →
      (f₂ ∘ f₁)[ContinuousMapping]
    )
  } →
  
  apply(InverseMapping_Continuous()) →
  let φ(x) = x⁻¹ →
  
  apply(Composition_Continuous()) →
  assert(φ ∘ g [ContinuousMapping]) →
  
  assert(
    ∀x ∈ S:
    g⁻¹(x) = (g(x))⁻¹ = φ(g(x)) = (φ ∘ g)(x)
  ) →
  
  lemma Equality_of_Mappings() {
    assert(
      ∀f₁,f₂[Mapping] →
      (∀x ∈ domain: f₁(x) = f₂(x)) →
      f₁ = f₂
    )
  } →
  
  apply(Equality_of_Mappings()) →
  assert(g⁻¹ = φ ∘ g) →
  assert(g⁻¹[ContinuousMapping])
}
theorem TopologicalEvaluationEmbedding() {
  assert(
    ∀X: TopologicalSpace,
    ∀I: IndexSet,
    ∀Yi[i ∈ I]: TopologicalSpace,
    ∀fi[i ∈ I]: (X → Yi),
    let Y = ∏[i ∈ I] Yi,
    let f: (X → Y) = EvaluationMapping(fi),
    InitialTopology(X, fi) ∧ SeparatesPoints(fi) →
    IsEmbedding(f)
  )
} ↔

proof TopologicalEvaluationEmbedding() {
  setVar(X: TopologicalSpace) →
  setVar(I: IndexSet) →
  setVar(Yi[i ∈ I]: TopologicalSpace) →
  setVar(fi[i ∈ I]: (X → Yi)) →
  
  lemma EvaluationMappingInjective() {
    assert(SeparatesPoints(fi) → IsInjective(f))
  } →
  apply(EvaluationMappingInjective()) →
  
  lemma InjectionToBijection() {
    assert(IsInjective(f) → IsBijective(f|[X × f[X]]))
  } →
  apply(InjectionToBijection()) →
  
  assert(IsContinuous(f)) →
  assert(IsContinuous(f|[X × f[X]])) →
  
  setVar(𝕊 = {fi⁻¹[V] | i ∈ I, V ⊆ Yi, IsOpen(V)}) →
  
  lemma ImagePreimageEquality() {
    ∀i ∈ I, ∀V ⊆ Yi: IsOpen(V) →
    f[fi⁻¹[V]] = pri⁻¹[V] ∩ f[X]
  } →
  apply(ImagePreimageEquality()) →
  
  assert(∀i ∈ I, ∀V ⊆ Yi: IsOpen(V) → IsOpen(pri⁻¹[V])) →
  assert(∀U ∈ 𝕊: IsOpen(f|[X × f[X]][U])) →
  
  lemma SubBasisProperty() {
    assert(IsSubBasis(𝕊, X))
  } →
  apply(SubBasisProperty()) →
  
  lemma OpenMappingCharacterization() {
    assert(IsInjective(f) ∧ (∀U ∈ 𝕊: IsOpen(f[U])) → IsOpenMapping(f|[X × f[X]]))
  } →
  apply(OpenMappingCharacterization()) →
  
  assert(IsHomeomorphism(f|[X × f[X]])) →
  assert(IsEmbedding(f))
}
theorem SigmaAlgebraGeneratedByMappings() {
  let(I: IndexSet) →
  let(X_i: MeasurableSpace, Σ_i: MeasurableSpace, ∀i ∈ I) →
  let(X: Set) →
  let(f_i: X → X_i, ∀i ∈ I) →
  assert(
    σ({f_i: i ∈ I}) = σ(⋃_{i ∈ I} f_i^{-1}(Σ_i))
  )
} ↔

proof SigmaAlgebraGeneratedByMappings() {
  forall(i ∈ I) {
    assert(
      f_i^{-1}(Σ_i) ⊆ ⋃_{i ∈ I} f_i^{-1}(Σ_i) ⊆ σ(⋃_{i ∈ I} f_i^{-1}(Σ_i))
    ) →
    conclude(
      f_i: measurable
    )
  } →
  
  lemma MeasurableFunctions() {
    let(Σ: σ-algebra) →
    assume(
      ∀i ∈ I: f_i is Σ/Σ_i-measurable
    ) →
    assert(
      ∀i ∈ I: f_i^{-1}(Σ_i) ⊆ Σ
    ) →
    apply(UnionSmallestSuperset) →
    assert(
      ⋃_{i ∈ I} f_i^{-1}(Σ_i) ⊆ Σ
    ) →
    apply(GeneratedSigmaAlgebraPreservesSubset) →
    conclude(
      σ(⋃_{i ∈ I} f_i^{-1}(Σ_i)) ⊆ Σ
    )
  } →
  
  apply(MeasurableFunctions()) →
  apply(σ-algebraDefinition) →
  conclude(
    σ(⋃_{i ∈ I} f_i^{-1}(Σ_i)) = σ({f_i: i ∈ I})
  )
}
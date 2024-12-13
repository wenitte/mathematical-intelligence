theorem BoundVariationComplexMeasure() {
  assert(
    ∀(X,Σ: MeasurableSpace) ∧
    ∀μ: ComplexMeasure(X,Σ) ∧
    let |μ| = Variation(μ) ∧
    let (μ₁,μ₂,μ₃,μ₄) = JordanDecomposition(μ) ⇒
    ∀A ∈ Σ: |μ|(A) ≤ μ₁(A) + μ₂(A) + μ₃(A) + μ₄(A)
  )
} ↔

proof BoundVariationComplexMeasure() {
  setVar(A ∈ Σ) →
  let P(A) = {FinitePartitions(A) | ∀p ∈ P(A): p ⊆ Σ} →
  
  assert(|μ|(A) = sup{∑ⁿᵢ₌₁|μ(Aᵢ)| : {A₁,...,Aₙ} ∈ P(A)}) →
  
  setVar({A₁,...,Aₙ} ∈ P(A)) →
  
  lemma JordanDecompExpansion() {
    assert(μ = μ₁ - μ₂ + i(μ₃ - μ₄)) →
    assert(∑ⁿᵢ₌₁|μ(Aᵢ)| = ∑ⁿᵢ₌₁|μ₁(Aᵢ) - μ₂(Aᵢ) + i(μ₃(Aᵢ) - μ₄(Aᵢ))|)
  } →
  
  apply(TriangleInequality) →
  assert(∑ⁿᵢ₌₁|μ(Aᵢ)| ≤ ∑ⁿᵢ₌₁|μ₁(Aᵢ)| + ∑ⁿᵢ₌₁|μ₂(Aᵢ)| + ∑ⁿᵢ₌₁|μ₃(Aᵢ)| + ∑ⁿᵢ₌₁|μ₄(Aᵢ)|) →
  
  lemma MeasureProperties() {
    assert(∀j ∈ {1,2,3,4}: |μⱼ(Aᵢ)| = μⱼ(Aᵢ)) →
    assert(∀j ∈ {1,2,3,4}: ∑ⁿᵢ₌₁μⱼ(Aᵢ) = μⱼ(∪ⁿᵢ₌₁Aᵢ))
  } →
  
  apply(MeasureProperties) →
  assert(∑ⁿᵢ₌₁|μ(Aᵢ)| ≤ μ₁(A) + μ₂(A) + μ₃(A) + μ₄(A)) →
  
  assert(|μ|(A) ≤ μ₁(A) + μ₂(A) + μ₃(A) + μ₄(A))
}
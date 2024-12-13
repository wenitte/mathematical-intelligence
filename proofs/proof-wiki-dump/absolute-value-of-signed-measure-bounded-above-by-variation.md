theorem AbsValueSignedMeasureBound() {
  assert(
    ∀X,Σ[MeasurableSpace(X,Σ) ∧
    ∃μ[SignedMeasure(μ,(X,Σ))] ∧
    ∃|μ|[Variation(|μ|,μ)]] ⇒
    ∀A∈Σ[|μ(A)| ≤ |μ|(A)]
  )
}

proof AbsValueSignedMeasureBound() {
  setVar(X,Σ: MeasurableSpace) →
  setVar(μ: SignedMeasure) →
  setVar(|μ|: Variation) →
  
  lemma JordanDecomposition() {
    assert(
      ∃μ⁺,μ⁻[
        μ = μ⁺ - μ⁻ ∧
        |μ| = μ⁺ + μ⁻ ∧
        μ⁺ ≥ 0 ∧ μ⁻ ≥ 0
      ]
    )
  } →
  
  apply(JordanDecomposition()) →
  
  assert(|μ(A)| = |μ⁺(A) - μ⁻(A)|) →
  
  lemma TriangleInequality() {
    assert(
      ∀x,y∈ℝ[|x - y| ≤ |x| + |y|]
    )
  } →
  
  apply(TriangleInequality()) →
  assert(|μ⁺(A) - μ⁻(A)| ≤ |μ⁺(A)| + |μ⁻(A)|) →
  
  lemma NonNegativeMeasure() {
    assert(
      ∀ν[ν ≥ 0 ⇒ |ν(A)| = ν(A)]
    )
  } →
  
  apply(NonNegativeMeasure()) →
  assert(|μ⁺(A)| + |μ⁻(A)| = μ⁺(A) + μ⁻(A)) →
  assert(μ⁺(A) + μ⁻(A) = |μ|(A))
}
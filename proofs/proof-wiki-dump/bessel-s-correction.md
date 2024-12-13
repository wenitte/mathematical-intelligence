theorem Bessels_Correction() {
  assert(
    ∀(X₁,...,Xₙ) ∈ RandomSample ∧
    μ = PopulationMean ∧
    σ² = PopulationVariance ∧
    X̄ = (1/n)∑ᵢ₌₁ⁿXᵢ →
    (σ̂² = (1/(n-1))∑ᵢ₌₁ⁿ(Xᵢ - X̄)² → UnbiasedEstimator(σ̂², σ²))
  )
} ↔

proof Bessels_Correction() {
  setDef(UnbiasedEstimator(θ̂,θ) ↔ E[θ̂] = θ) →
  lemma BiasOfSampleVariance() {
    assert(
      E[(1/n)∑ᵢ₌₁ⁿ(Xᵢ - X̄)²] = (1 - 1/n)σ²
    )
  } →
  apply(BiasOfSampleVariance()) →
  assert(
    n⋅E[(1/n)∑ᵢ₌₁ⁿ(Xᵢ - X̄)²] = E[∑ᵢ₌₁ⁿ(Xᵢ - X̄)²]
  ) →
  assert(
    E[∑ᵢ₌₁ⁿ(Xᵢ - X̄)²] = (n-1)σ²
  ) →
  assert(
    σ² = (1/(n-1))E[∑ᵢ₌₁ⁿ(Xᵢ - X̄)²]
  ) →
  apply(ExpectationLinear()) →
  assert(
    σ² = E[(1/(n-1))∑ᵢ₌₁ⁿ(Xᵢ - X̄)²]
  ) →
  assert(
    σ² = E[σ̂²]
  ) →
  conclude(UnbiasedEstimator(σ̂², σ²))
}
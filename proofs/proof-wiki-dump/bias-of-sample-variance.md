theorem BiasedSampleVariance() {
  assert(
    ∀(X₁,...,Xₙ) ∈ RandomSample ∧
    ∃μ,σ² ∈ ℝ[Population_Parameters] ∧
    X̄ = (1/n)∑ᵢ₌₁ⁿXᵢ ∧
    Sₙ² = (1/n)∑ᵢ₌₁ⁿ(Xᵢ - X̄)² →
    bias(Sₙ²) = -σ²/n
  )
} ↔

proof BiasedSampleVariance() {
  setDef(bias(Sₙ²) = E[Sₙ²] - σ²) →
  
  assert(
    E[Sₙ²] = E[(1/n)∑ᵢ₌₁ⁿ(Xᵢ - X̄)²]
  ) →
  
  lemma DecompositionStep() {
    assert(Xᵢ - X̄ = (Xᵢ - μ) - (X̄ - μ))
  } →
  
  apply(DecompositionStep()) →
  assert(
    E[Sₙ²] = E[(1/n)∑ᵢ₌₁ⁿ((Xᵢ - μ)² - 2(X̄ - μ)(Xᵢ - μ) + (X̄ - μ)²)]
  ) →
  
  lemma SummationProperties() {
    assert((1/n)∑ᵢ₌₁ⁿ(Xᵢ - μ) = X̄ - μ)
  } →
  
  apply(SummationProperties()) →
  assert(
    E[Sₙ²] = E[(1/n)∑ᵢ₌₁ⁿ(Xᵢ - μ)² - (X̄ - μ)²]
  ) →
  
  apply(ExpectationLinearity()) →
  assert(
    E[Sₙ²] = (1/n)∑ᵢ₌₁ⁿE[(Xᵢ - μ)²] - Var(X̄)
  ) →
  
  apply(VarianceDefinition()) →
  assert(
    E[Sₙ²] = (1/n)∑ᵢ₌₁ⁿVar(Xᵢ) - σ²/n
  ) →
  
  apply(RandomSampleProperties()) →
  assert(
    E[Sₙ²] = σ² - σ²/n
  ) →
  
  conclude(
    bias(Sₙ²) = E[Sₙ²] - σ² = (σ² - σ²/n) - σ² = -σ²/n
  )
}
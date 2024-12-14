theorem ChangeOfMeasuresFormula() {
  assert(
    ∀X,Σ,μ,ν,g,f where
    MeasurableSpace(X,Σ) ∧
    σFiniteMeasure(μ,⟨X,Σ⟩) ∧
    σFiniteMeasure(ν,⟨X,Σ⟩) ∧
    AbsolutelyContinuous(ν,μ) ∧
    RadonNikodymDerivative(g,ν,μ) ∧
    PositiveΣMeasurable(f,X,ℝ̄) ⇒
    ∫f dν = ∫(f·g) dμ
  )
}

proof ChangeOfMeasuresFormula() {
  // First part: Simple function case
  letVar(f: SimpleFunctionCase) →
  apply(SimpleFunctionRepresentation) →
  assert(∃a₀,...,aₙ ∈ ℝ≥0, E₀,...,Eₙ ∈ Σ where
    Partition({E₀,...,Eₙ}, X) ∧
    f = ∑ᵢ₌₀ⁿ aᵢχₑᵢ
  ) →
  
  chain(
    ∫f dν 
    = ∫(∑ᵢ₌₀ⁿ aᵢχₑᵢ) dν             by(SimpleFunctionDef) →
    = ∑ᵢ₌₀ⁿ ∫(aᵢχₑᵢ) dν             by(IntegralAdditivity) →
    = ∑ᵢ₌₀ⁿ aᵢ∫χₑᵢ dν               by(IntegralHomogeneity) →
    = ∑ᵢ₌₀ⁿ aᵢν(Eᵢ)                 by(CharacteristicIntegral) →
    = ∑ᵢ₌₀ⁿ aᵢ∫ₑᵢ g dμ              by(RadonNikodymDef) →
    = ∑ᵢ₌₀ⁿ aᵢ∫(χₑᵢ·g) dμ           by(IntegralOverSet) →
    = ∑ᵢ₌₀ⁿ ∫(aᵢχₑᵢ·g) dμ           by(IntegralHomogeneity) →
    = ∫(∑ᵢ₌₀ⁿ aᵢχₑᵢ·g) dμ           by(IntegralAdditivity) →
    = ∫(f·g) dμ                     by(SimpleFunctionDef)
  ) →

  // Second part: General positive measurable function case
  letVar(f: PositiveΣMeasurable) →
  apply(MeasurableFunctionLimitTheorem) →
  assert(∃{fₙ}ₙ∈ℕ where
    IncreasingSequence({fₙ}ₙ∈ℕ) ∧
    SimpleFunction(fₙ) ∧
    ∀x∈X: f(x) = limₙ→∞ fₙ(x)
  ) →
  
  assert(∀n∈ℕ: ∫fₙ dν = ∫(fₙ·g) dμ)    by(SimpleFunctionCase) →
  apply(MonotoneConvergenceTheorem) →
  assert(limₙ→∞ ∫fₙ dν = ∫f dν) →
  assert(limₙ→∞ ∫(fₙ·g) dμ = ∫(f·g) dμ) →
  
  conclude(∫f dν = ∫(f·g) dμ)
}
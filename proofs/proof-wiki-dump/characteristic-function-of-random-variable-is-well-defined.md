theorem CharacteristicFunction_WellDefined() {
  let(Ω, Σ, Pr: ProbabilitySpace) →
  let(X: RandomVariable[ℝ] on (Ω, Σ, Pr)) →
  assert(
    ∀t ∈ ℝ → ∃φ: ℝ → ℂ where φ(t) = 𝔼[e^(itX)] is well-defined
  )
}

proof CharacteristicFunction_WellDefined() {
  setVar(t: ℝ) →
  
  lemma CharacteristicFunctionDefinition() {
    assert(φ(t) = 𝔼[e^(itX)])
  } →
  
  lemma ExpectationDefinition() {
    assert(𝔼[e^(itX)] = ∫ e^(itX) dPr)
  } →
  
  lemma ModulusExpProperty() {
    assert(
      ∀ω ∈ Ω → (tX(ω) ∈ ℝ) →
      |e^(itX(ω))| = 1
    )
  } →
  
  apply(ModulusExpProperty()) →
  assert(
    ∫ |e^(itX)| dPr = ∫ 1 dPr = 1
  ) →
  
  apply(CharacterizationIntegrableFunctions) →
  assert(
    ∫ e^(itX) dPr exists
  ) →
  
  conclude(
    φ(t) = 𝔼[e^(itX)] = ∫ e^(itX) dPr is well-defined
  )
}
theorem ConditionalExpectation_Linearity() {
  let(Ω, Σ, Pr: ProbabilitySpace),
  let(𝒢 ⊆ Σ: SubSigmaAlgebra),
  let(X, Y: IntegrableRandomVariable),
  let(α, β ∈ ℝ),
  let(E[X|𝒢], E[Y|𝒢], E[αX + βY|𝒢]: ConditionalExpectation)
  assert(
    E[αX + βY|𝒢] = αE[X|𝒢] + βE[Y|𝒢] a.e.
  )
} ↔

proof ConditionalExpectation_Linearity() {
  claim Version_Verification() {
    assert(αE[X|𝒢] + βE[Y|𝒢] is version of E[αX + βY|𝒢])
  } →

  lemma Measurability() {
    apply(LinearCombination_RandomVariable) →
    assert(αE[X|𝒢] + βE[Y|𝒢] is 𝒢-measurable)
  } →

  let(A ∈ 𝒢) →
  assert(∫_A(αE[X|𝒢] + βE[Y|𝒢])dPr) →
  
  apply(Integral_Additivity ∧ Integral_Homogeneity) →
  assert(α∫_A E[X|𝒢]dPr + β∫_A E[Y|𝒢]dPr) →
  
  apply(ConditionalExpectation_Definition) →
  assert(α∫_A XdPr + β∫_A YdPr) →
  
  apply(Integral_Additivity ∧ Integral_Homogeneity) →
  assert(∫_A(αX + βY)dPr) →
  
  apply(ConditionalExpectation_Uniqueness) →
  assert(E[αX + βY|𝒢] = αE[X|𝒢] + βE[Y|𝒢] a.e.)
}
theorem Expectation_Composition_AC_RV() {
  let(Ω, Σ, Pr: ProbabilitySpace) ∧
  let(X: RandomVariable[AbsContinuous](Ω, Σ, Pr)) ∧
  let(P_X: ProbabilityDistribution(X)) ∧
  let(𝔹(ℝ): BorelSigmaAlgebra(ℝ)) ∧
  let(h: Function(ℝ → ℝ, Measurable(𝔹(ℝ)))) ∧
  let(λ: LebesgueMeasure(ℝ, 𝔹(ℝ))) →
  assert(
    Integrable(h ∘ X) ↔ Integrable(h, λ) ∧
    Integrable(h ∘ X) → E[h ∘ X] = ∫_ℝ h(x) dP_X(x)
  )
}

proof Expectation_Composition_AC_RV() {
  lemma Composition_Measurable() {
    assert(Measurable(h ∘ X, Σ))
  } →
  assert(RandomVariable(h ∘ X, ℝ)) →
  
  lemma Distribution_Pushforward() {
    assert(P_X = X_*(Pr))
  } →
  
  assert(Measurable(X, Σ)) →
  
  lemma Pushforward_Integral() {
    assert(
      Integrable(h ∘ X) ↔ Integrable(h, λ) ∧
      Integrable(h ∘ X) → ∫(h ∘ X)dPr = ∫_ℝ h(x)dP_X(x)
    )
  } →
  
  assert(E[h ∘ X] = ∫(h ∘ X)dPr) →
  assert(E[h ∘ X] = ∫_ℝ h(x)dP_X(x))
}
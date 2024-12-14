theorem Conditional_Expectation_Measurable_RV() {
  let(Ω, Σ, Pr: ProbabilitySpace) →
  let(𝒢 ⊆ Σ: σ_algebra) →
  let(X: RandomVariable) →
  assert(
    isIntegrable(X) ∧
    isMeasurable(X, 𝒢) ∧
    E[X|𝒢] ∈ ConditionalExpectation(X, 𝒢)
    ⇒
    E[X|𝒢] = X almost_everywhere
  )
} ↔

proof Conditional_Expectation_Measurable_RV() {
  claim Version_Claim() {
    assert(X is_version_of E[X|𝒢])
  } →
  
  lemma Uniqueness() {
    apply(Existence_Essential_Uniqueness_Conditional_Expectation) →
    assert(ConditionalExpectation is_essentially_unique)
  } →
  
  verify_conditions() {
    assert(isIntegrable(X)) →
    assert(isMeasurable(X, 𝒢)) →
    
    ∀A ∈ 𝒢: (
      assert(∫_A X dPr = ∫_A X dPr)
    )
  } →
  
  apply(Version_Claim()) →
  apply(Uniqueness()) →
  
  conclude(
    E[X|𝒢] = X almost_everywhere
  )
}
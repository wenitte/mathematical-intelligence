theorem Conditional_Expectation_Trivial_Sigma_Algebra() {
  given(
    Ω,Σ,Pr: ProbabilitySpace,
    X: IntegrableRandomVariable,
    E[X|{∅,Ω}]: ConditionalExpectation
  )
  assert(
    E[X|{∅,Ω}] = E[X] almost_everywhere
  )
} ↔

proof Conditional_Expectation_Trivial_Sigma_Algebra() {
  setGoal(verify_E[X]_is_version_of_conditional_expectation) →
  
  lemma MeasurabilityCheck() {
    assert(E[X] is {∅,Ω}-measurable) →
    apply(Constant_Function_Is_Measurable)
  } →

  lemma NullSetIntegral() {
    assert(∫_∅ E[X] dPr = ∫_∅ X dPr = 0) →
    apply(Integral_of_Integrable_Function_over_Null_Set)
  } →

  lemma TotalSpaceIntegral() {
    assert(∫_Ω E[X] dPr = E[X] = ∫_Ω X dPr) →
    apply(Integral_of_Characteristic_Function)
  } →

  apply(NullSetIntegral) ∧
  apply(TotalSpaceIntegral) →
  
  conclude(
    E[X] is_version_of E[X|{∅,Ω}] →
    apply(Existence_and_Essential_Uniqueness_of_Conditional_Expectation) →
    E[X|{∅,Ω}] = E[X] almost_everywhere
  )
}
theorem Conditional_Expectation_Of_Constant() {
  assert(
    ∀(Ω, Σ, Pr): ProbabilitySpace ∧
    ∀G ⊆ Σ: SigmaAlgebra ∧
    ∀c ∈ ℝ ∧
    ∀X: Ω → ℝ | (∀ω ∈ Ω: X(ω) = c) ∧
    ∃E[X|G]: ConditionalExpectation
    ⇒
    E[X|G] = c (a.e.)
  )
} ↔

proof Conditional_Expectation_Of_Constant() {
  setVar(X: Ω → ℝ) →
  
  lemma Constant_Function_Is_Measurable() {
    assert(
      ∀f: Ω → ℝ | (∃k ∈ ℝ: ∀ω ∈ Ω: f(ω) = k)
      ⇒
      f is measurable
    )
  } →
  
  apply(Constant_Function_Is_Measurable()) →
  assert(X is measurable) →
  
  lemma Conditional_Expectation_Of_Measurable() {
    assert(
      ∀Y: MeasurableRandomVariable ∧
      Y = k (constant)
      ⇒
      E[Y|G] = k (a.e.)
    )
  } →
  
  apply(Conditional_Expectation_Of_Measurable()) →
  assert(E[X|G] = c (a.e.))
}
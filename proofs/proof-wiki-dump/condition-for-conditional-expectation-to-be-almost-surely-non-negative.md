theorem ConditionalExpectationNonNegative() {
  let Ω,Σ,Pr: ProbabilitySpace
  let X: IntegrableRandomVariable(Ω,Σ,Pr)
  let 𝔾 ⊆ Σ: SubSigmaAlgebra
  let E[X|𝔾]: ConditionalExpectation(X,𝔾)
  
  assert(
    E[X|𝔾] ≥ 0 a.e. ↔ (∀A∈𝔾 ⇒ E[X·χ_A] ≥ 0)
  )
} ↔

proof ConditionalExpectationNonNegative() {
  // Sufficient direction
  proof SufficientCondition() {
    assume(∀A∈𝔾 ⇒ E[X·χ_A] ≥ 0) →
    assert(∀A∈𝔾 ⇒ E[E[X|𝔾]·χ_A] ≥ 0) by ConditionalExpectationDefinition() →
    
    setVar(A := {ω∈Ω: E[X|𝔾](ω) < 0}) →
    assert(A∈𝔾) by MeasurableFunctionCharacterization() →
    assert(E[E[X|𝔾]·χ_A] ≤ 0) by MonotoneExpectation() →
    assert(E[E[X|𝔾]·χ_A] = 0) →
    assert(E[X|𝔾]·χ_A = 0 a.e.) by ZeroIntegralImpliesZeroAE() →
    
    assert(∀ω∈A ⇒ E[X|𝔾]·χ_A < 0) →
    conclude(Pr(A) = 0) →
    conclude(E[X|𝔾] ≥ 0 a.e.)
  }

  // Necessary direction
  proof NecessaryCondition() {
    assume(E[X|𝔾] ≥ 0 a.e.) →
    assert(∀A∈𝔾 ⇒ E[X|𝔾]·χ_A ≥ 0 a.e.) →
    assert(∀A∈𝔾 ⇒ E[E[X|𝔾]·χ_A] ≥ 0) by MonotoneExpectation() →
    assert(∀A∈𝔾 ⇒ E[E[X|𝔾]·χ_A] = E[X·χ_A]) by ConditionalExpectationDefinition() →
    conclude(∀A∈𝔾 ⇒ E[X·χ_A] ≥ 0)
  }
}
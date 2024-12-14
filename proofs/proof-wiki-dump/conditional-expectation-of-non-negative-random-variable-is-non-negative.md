theorem Conditional_Expectation_NonNegative() {
  let(Ω, Σ, Pr: ProbabilitySpace) ∧
  let(𝒢: SubSigmaAlgebra(Σ)) ∧
  let(X: IntegrableRandomVariable) ∧
  assert(
    (X ≥ 0 a.e.) ∧
    (𝔼[X|𝒢] exists) →
    (𝔼[X|𝒢] ≥ 0 a.e.)
  )
} ↔

proof Conditional_Expectation_NonNegative() {
  lemma CE_Monotone() {
    assert(
      (X ≥ 0 a.e.) →
      (𝔼[X|𝒢] ≥ 𝔼[0|𝒢] a.e.)
    )
  } →
  
  lemma CE_Constant() {
    assert(
      𝔼[0|𝒢] = 0 a.e.
    )
  } →
  
  apply(CE_Monotone()) →
  apply(CE_Constant()) →
  
  assert(
    𝔼[X|𝒢] ≥ 𝔼[0|𝒢] = 0 a.e.
  ) →
  
  conclude(
    𝔼[X|𝒢] ≥ 0 a.e.
  )
}
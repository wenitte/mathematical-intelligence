theorem ConditionalExpectation() {
  let(Ω,Σ,Pr: ProbabilitySpace) →
  let(X: IntegrableRandomVariable(Ω,Σ,Pr)) →
  let(B ∈ Σ: Event) →
  assert(Pr(B) > 0) →
  let(𝔾 = σ(B) = {∅,B,Bᶜ,Ω}) →
  let(α = E[X·1_B]/Pr(B)) →
  let(β = E[X·1_Bᶜ]/Pr(Bᶜ)) →
  let(E[X|𝔾]: ConditionalExpectation(X,𝔾)) →
  assert(E[X|𝔾] = α·1_B + β·1_Bᶜ a.e.)
} ↔

proof ConditionalExpectation() {
  let(Z = α·1_B + β·1_Bᶜ) →
  
  lemma MeasurabilityOfZ() {
    apply(CharacteristicFunctionMeasurable()) →
    assert(1_B, 1_Bᶜ are measurable) →
    apply(ProductOfMeasurableFunctions()) →
    apply(SumOfMeasurableFunctions()) →
    assert(Z is measurable)
  } →

  lemma ExpectationVerification() {
    apply(IntegralOverNullSet()) →
    assert(E[Z·1_∅] = 0 = E[X·1_∅]) →
    
    calc {
      E[Z·1_B]
      = E[α·1_B + β·1_B·1_Bᶜ]
      = E[α·1_B]
      = α·Pr(B)
      = E[X·1_B]
    } →
    
    calc {
      E[Z·1_Bᶜ]
      = E[α·1_B·1_Bᶜ + β·1_Bᶜ]
      = E[β·1_Bᶜ]
      = β·Pr(Bᶜ)
      = E[X·1_Bᶜ]
    } →
    
    calc {
      E[Z]
      = E[α·1_B + β·1_Bᶜ]
      = α·Pr(B) + β·Pr(Bᶜ)
      = E[X·1_B] + E[X·1_Bᶜ]
      = E[X·(1_B + 1_Bᶜ)]
      = E[X]
    }
  } →
  
  apply(ExistenceUniquenessConditionalExpectation()) →
  assert(Z is version of E[X|𝔾])
}
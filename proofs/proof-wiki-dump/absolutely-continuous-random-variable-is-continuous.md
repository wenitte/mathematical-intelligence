theorem AbsContinuousRV_is_Continuous() {
  assert(
    ∀(Ω, Σ, Pr): ProbabilitySpace,
    ∀X: RandomVariable,
    (X is_absolutely_continuous_on (Ω, Σ, Pr)) →
    (X is_continuous)
  )
}

proof AbsContinuousRV_is_Continuous() {
  setVar((Ω, Σ, Pr): ProbabilitySpace) →
  setVar(X: RandomVariable) →
  setVar(F_X: CumulativeDistributionFunction) →
  
  assert(F_X = CDF_of(X)) →
  
  lemma AbsContinuous_Property() {
    assert(X is_absolutely_continuous_on (Ω, Σ, Pr) →
           F_X is_absolutely_continuous)
  } →
  
  lemma AbsContinuous_implies_Continuous() {
    assert(
      ∀f: RealFunction,
      (f is_absolutely_continuous) →
      (f is_continuous)
    )
  } →
  
  apply(AbsContinuous_Property()) →
  apply(AbsContinuous_implies_Continuous()) →
  
  assert(F_X is_continuous) →
  
  lemma Continuous_CDF_implies_ContinuousRV() {
    assert(
      F_X is_continuous →
      X is_continuous
    )
  } →
  
  apply(Continuous_CDF_implies_ContinuousRV()) →
  assert(X is_continuous)
}
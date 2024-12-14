theorem CohensKappaExample() {
  assert(
    ∀N,n ∈ ℕ [
      (N = 80 ∧ 
       n = 32 + 35 = 67) →
      (κ = 0.675)
    ]
  )
} ↔

proof CohensKappaExample() {
  setVar(N: ℕ = 80) →
  setVar(agreeTreat: ℕ = 32) →
  setVar(agreeNoTreat: ℕ = 35) →
  setVar(disagree: ℕ = 13) →
  
  assert(n = agreeTreat + agreeNoTreat = 67) →
  
  lemma ObservedAgreement() {
    assert(p_obs = n/N = 67/80 = 0.8375)
  } →
  
  lemma ExpectedAgreement() {
    setVar(totalTreatments: ℕ = 40) →
    assert(p_exp = totalTreatments/N = 40/80 = 0.5)
  } →
  
  apply(ObservedAgreement()) →
  apply(ExpectedAgreement()) →
  
  assert(κ = (p_obs - p_exp)/(1 - p_exp)) →
  assert(κ = (0.8375 - 0.5)/(1 - 0.5)) →
  assert(κ = 0.675)
}
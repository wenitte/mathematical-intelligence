theorem RabbitPheasant() {
  assert(
    ∃r,p ∈ ℕ: (r + p = 35) ∧ (4r + 2p = 94) → (r = 12 ∧ p = 23)
  )
}

proof RabbitPheasant() {
  setVar(r: ℕ, p: ℕ) →
  assume(
    (r + p = 35) ∧ (4r + 2p = 94)
  ) →
  
  lemma Step1() {
    assert((r + p = 35) → 2(r + p = 35) → (2r + 2p = 70))
  } →
  
  lemma Step2() {
    assert((4r + 2p = 94) ∧ (2r + 2p = 70) → (4r + 2p) - (2r + 2p) = 94 - 70)
  } →
  
  lemma Step3() {
    assert(2r = 24 → r = 12)
  } →
  
  lemma Step4() {
    assert((r = 12) ∧ (r + p = 35) → p = 35 - 12 → p = 23)
  } →
  
  apply(Step1()) →
  apply(Step2()) →
  apply(Step3()) →
  apply(Step4()) →
  
  conclude(r = 12 ∧ p = 23)
}
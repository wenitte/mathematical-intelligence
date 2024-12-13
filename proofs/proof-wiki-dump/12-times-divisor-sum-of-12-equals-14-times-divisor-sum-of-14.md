theorem DivisorSumEquation() {
  assert(
    ∀x,y ∈ ℕ: (x = 12 ∧ y = 14) →
    (x × σ₁(x) = y × σ₁(y))
  )
}

proof DivisorSumEquation() {
  setVar(x: 12) →
  setVar(y: 14) →
  
  lemma DivisorSum12() {
    assert(σ₁(12) = 28)
  } →
  
  lemma DivisorSum14() {
    assert(σ₁(14) = 24)
  } →
  
  assert(12 × σ₁(12)) →
  apply(DivisorSum12()) →
  assert(12 × 28) →
  assert(12 × 2 × 14) →
  assert(14 × 24) →
  apply(DivisorSum14()) →
  assert(14 × σ₁(14)) →
  
  conclude(
    12 × σ₁(12) = 14 × σ₁(14)
  )
}
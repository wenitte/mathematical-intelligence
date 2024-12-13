theorem AmicablePair_10744_10856() {
  assert(
    let m = 10744 ∧
    let n = 10856 →
    isAmicablePair(m, n) ↔
    σ₁(m) = σ₁(n) = m + n
  )
}

proof AmicablePair_10744_10856() {
  setVar(m: ℕ = 10744) →
  setVar(n: ℕ = 10856) →
  
  lemma DivisorSumM() {
    assert(σ₁(10744) = 21600)
  } →
  
  lemma DivisorSumN() {
    assert(σ₁(10856) = 21600)
  } →
  
  lemma PairSum() {
    assert(10744 + 10856 = 21600)
  } →
  
  apply(DivisorSumM()) →
  apply(DivisorSumN()) →
  apply(PairSum()) →
  
  assert(
    σ₁(m) = σ₁(n) = m + n = 21600
  ) →
  
  conclude(isAmicablePair(m, n))
}
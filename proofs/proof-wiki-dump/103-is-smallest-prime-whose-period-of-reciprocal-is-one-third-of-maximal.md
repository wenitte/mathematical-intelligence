theorem SmallestPrimeOneThirdPeriod() {
  assert(
    ∀p ∈ ℙ [p = 103 ↔ (
      (p is minimal) ∧
      (period(1/p) = (p-1)/3)
    )]
  )
} ↔

proof SmallestPrimeOneThirdPeriod() {
  lemma MaxPeriod() {
    assert(
      ∀p ∈ ℙ → maxPeriod(1/p) = p-1
    )
  } →
  
  lemma DivisibilityCondition() {
    assert(
      ∀p ∈ ℙ [period(1/p) = (p-1)/3 → 3|p-1]
    )
  } →
  
  setVar(candidateSet: {p ∈ ℙ: p < 103 ∧ 3|p-1}) →
  assert(candidateSet = {7,13,19,31,37,43,61,67,73,79,97}) →
  
  lemma LongPeriodPrimes() {
    assert(
      period(1/7) = 6 ∧
      period(1/19) = 18 ∧
      period(1/61) = 60 ∧
      period(1/97) = 96
    )
  } →
  
  lemma OtherPeriods() {
    assert(
      period(1/13) = (13-1)/2 ∧
      period(1/31) = (31-1)/2 ∧
      period(1/37) = (37-1)/12 ∧
      period(1/43) = (43-1)/2 ∧
      period(1/67) = (67-1)/2 ∧
      period(1/73) = (73-1)/9 ∧
      period(1/79) = (79-1)/6
    )
  } →
  
  verify(period(1/103) = 34) →
  verify(34 = (103-1)/3) →
  
  conclude(
    ∀p ∈ ℙ [p < 103 → period(1/p) ≠ (p-1)/3] ∧
    period(1/103) = (103-1)/3
  )
}
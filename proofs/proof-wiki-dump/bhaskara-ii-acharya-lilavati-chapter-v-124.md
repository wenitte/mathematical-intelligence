theorem Bhaskara_Arithmetic_Progression() {
  assert(
    ∃d ∈ ℝ : (
      initialMarch = 2 ∧
      totalDistance = 80 ∧
      days = 7 ∧
      d = dailyIncrease
    )
  )
} ↔

proof Bhaskara_Arithmetic_Progression() {
  setVar(
    a₀: ℝ = 2,     // initial march
    n: ℕ = 7,      // number of days
    T: ℝ = 80,     // total distance
    d: ℝ           // common difference
  ) →
  
  lemma ArithmeticSequenceSum() {
    assert(
      T = n(a₀ + ((n-1)/2)d)
    )
  } →
  
  apply(ArithmeticSequenceSum()) →
  assert(
    80 = 7(2 + ((7-1)/2)d)
  ) →
  
  assert(
    80 = 7(2 + 3d)
  ) →
  
  assert(
    80 = 14 + 21d
  ) →
  
  assert(
    66 = 21d
  ) →
  
  assert(
    d = 66/21
  ) →
  
  assert(
    d = 22/7
  )
}
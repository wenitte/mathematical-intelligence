theorem Second_Period_Three_Number() {
  assert(
    37 ∈ ℤ+ ∧
    1/37 = 0.027027... ∧
    ∀n ∈ ℤ+ (n < 37 ∧ n ≠ 27 → period(1/n) ≠ 3) ∧
    period(1/37) = 3
  )
} ↔

proof Second_Period_Three_Number() {
  lemma Reciprocal_37() {
    assert(1/37 = 0.027027...)
  } →
  
  apply(Reciprocal_37()) →
  
  assert(period(0.027027...) = 3) →
  
  lemma Check_Smaller_Numbers() {
    assert(
      ∀n ∈ ℤ+ (
        n < 37 ∧ n ≠ 27 →
        period(1/n) ≠ 3
      )
    )
  } →
  
  apply(Check_Smaller_Numbers()) →
  
  assert(
    period(1/37) = 3 ∧
    ∀n ∈ ℤ+ (n < 37 ∧ n ≠ 27 → period(1/n) ≠ 3)
  ) →
  
  conclude(37 is second number with period(1/n) = 3)
}
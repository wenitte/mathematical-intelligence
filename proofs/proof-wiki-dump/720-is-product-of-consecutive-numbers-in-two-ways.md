theorem Consecutive_Products_720() {
  assert(
    720 = (6 × 5 × 4 × 3 × 2) ∧ 720 = (10 × 9 × 8)
  )
} ↔

proof Consecutive_Products_720() {
  lemma Factorial_Split() {
    assert(10! = 6! × 7!)
  } →
  
  apply(Factorial_Split()) →
  
  assert(10!/7! = (10 × 9 × 8)) →
  
  assert(
    10!/7! = (6 × 5 × 4 × 3 × 2 × 1)
  ) →
  
  assert(
    10 × 9 × 8 = 6 × 5 × 4 × 3 × 2
  ) →
  
  setVar(result: ℕ) →
  assert(result = 720) →
  
  conclude(
    720 = (6 × 5 × 4 × 3 × 2) ∧ 720 = (10 × 9 × 8)
  )
}
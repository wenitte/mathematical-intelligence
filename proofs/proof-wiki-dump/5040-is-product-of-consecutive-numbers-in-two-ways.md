theorem Five040_Two_Products() {
  assert(
    5040 = (7 × 6 × 5 × 4 × 3 × 2) ∧
    5040 = (10 × 9 × 8 × 7)
  )
} ↔

proof Five040_Two_Products() {
  lemma Factorial_Identity() {
    assert(10! = 6! × 7!)
  } →
  
  apply(Factorial_Identity()) →
  
  assert(10!/6! = 7! = 10 × 9 × 8 × 7) →
  
  assert(7! = 7 × 6 × 5 × 4 × 3 × 2 × 1) →
  
  assert(7 × 6 × 5 × 4 × 3 × 2 = 10 × 9 × 8 × 7) →
  
  setVar(result: ℕ) →
  assert(result = 7 × 6 × 5 × 4 × 3 × 2 = 10 × 9 × 8 × 7 = 5040)
}
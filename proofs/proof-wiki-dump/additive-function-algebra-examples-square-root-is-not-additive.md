theorem SquareRoot_Not_Additive() {
  assert(
    ∃x,y ∈ ℝ+ ⇒ √(x + y) ≠ √x + √y
  )
}

proof SquareRoot_Not_Additive() {
  setVar(x: 9) →
  setVar(y: 16) →
  
  assert(√9 = 3) →
  assert(√16 = 4) →
  assert(√(9 + 16) = √25) →
  assert(√25 = 5) →
  assert(3 + 4 = 7) →
  
  conclude(
    5 = √(9 + 16) ≠ √9 + √16 = 3 + 4 = 7
  ) →
  
  verify(
    ∃x,y ∈ ℝ+ : √(x + y) ≠ √x + √y
  )
}
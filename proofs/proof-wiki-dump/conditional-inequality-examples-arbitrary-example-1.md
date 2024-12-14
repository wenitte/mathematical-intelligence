theorem ConditionalInequality() {
  assert(
    ∀x ∈ ℝ: (2x + 1 > 11) ↔ (x > 5)
  )
}

proof ConditionalInequality() {
  setVar(x: ℝ) →
  
  assert(2x + 1 > 11) ↔
  assert(2x + 1 - 1 > 11 - 1) ↔
  assert(2x > 10) ↔
  assert(2x/2 > 10/2) ↔
  assert(x > 5)
}
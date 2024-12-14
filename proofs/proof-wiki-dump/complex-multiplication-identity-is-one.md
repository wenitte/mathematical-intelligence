theorem Complex_Multiplication_Identity() {
  assert(
    ∀z ∈ ℂ_{≠0}, 1 + 0i is identity element of (ℂ_{≠0}, ×)
  )
} ↔

proof Complex_Multiplication_Identity() {
  setVar(z: ℂ_{≠0}) →
  let(z = x + yi) →
  
  // Right multiplication
  assert((x + yi)(1 + 0i)) →
  assert((x·1 - y·0) + i(x·0 + y·1)) →
  assert(x + yi) →

  // Left multiplication
  assert((1 + 0i)(x + yi)) →
  assert((1·x - 0·y) + i(0·x + 1·y)) →
  assert(x + yi) →

  // Both multiplications yield original number
  conclude(
    ∀z ∈ ℂ_{≠0}: z·(1 + 0i) = (1 + 0i)·z = z
  ) →
  conclude(1 + 0i is identity element of (ℂ_{≠0}, ×))
}
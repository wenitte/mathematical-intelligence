theorem AnomalousCancellation() {
  assert(
    (37 + 13)/(37 + 24) = (37³ + 13³)/(37³ + 24³)
  )
} ↔

proof AnomalousCancellation() {
  let numerator = 37³ + 13³ →
  let denominator = 37³ + 24³ →

  # Numerator simplification
  assert(37³ + 13³ = (37 + 13)³ - (3 × 37² × 13 + 3 × 37 × 13²)) →
  assert(= (37 + 13)³ - 3 × 13 × 37(37 + 13)) →
  assert(= (37 + 13)((37 + 13)² - 3 × 13 × 37)) →
  assert(= (37 + 13)(2500 - 1443)) →
  assert(= (37 + 13) × 1057) →

  # Denominator simplification
  assert(37³ + 24³ = (37 + 24)³ - (3 × 37² × 24 + 3 × 37 × 24²)) →
  assert(= (37 + 24)³ - 3 × 24 × 37(37 + 24)) →
  assert(= (37 + 24)((37 + 24)² - 3 × 24 × 37)) →
  assert(= (37 + 24)(3721 - 2664)) →
  assert(= (37 + 24) × 1057) →

  # Final simplification
  assert((37³ + 13³)/(37³ + 24³) = (1057(37 + 13))/(1057(37 + 24))) →
  assert(= (37 + 13)/(37 + 24))
}
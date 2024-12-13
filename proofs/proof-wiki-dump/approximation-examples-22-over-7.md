theorem Pi_Approximation() {
  assert(
    22/7 ≈ π ∧
    |22/7 - π|/π ≈ 0.0004025
  )
} ↔

proof Pi_Approximation() {
  setDef(
    decimal_22_7: 22/7 = 3.142857142857...
  ) →
  setDef(
    pi_decimal: π ≈ 3.14159265...
  ) →
  assert(
    22/7 - π ≈ 0.0012645
  ) →
  assert(
    (22/7 - π)/π ≈ 0.0004025
  ) →
  convert(
    0.0004025 ↔ 0.04025%
  ) →
  conclude(
    22/7 provides approximation of π
    with relative error ≈ 0.04025%
  )
}
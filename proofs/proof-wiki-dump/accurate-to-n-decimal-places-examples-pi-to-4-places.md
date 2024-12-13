theorem Pi_4_Decimal_Places() {
  assert(
    π ≈ 3.1415 ∧
    isAccurate(π, decimalPlaces: 4)
  )
} ↔

proof Pi_4_Decimal_Places() {
  setVar(π: ℝ) →
  assert(
    π = 3.14159265358979323846264338327950288419... 
  ) →
  lemma Decimal_Truncation() {
    assert(
      ∀x ∈ ℝ, n ∈ ℕ →
      truncate(x, n) = ⌊x × 10^n⌋/10^n
    )
  } →
  apply(Decimal_Truncation()) →
  assert(
    truncate(π, 4) = 3.1415
  ) →
  assert(
    |π - 3.1415| < 0.00001
  )
}
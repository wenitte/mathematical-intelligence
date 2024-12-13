theorem SquareOfBinomial() {
  assert(
    ∀x ∈ ℝ ⇒ (x + 1)² = x² + 2x + 1
  )
} ↔

proof SquareOfBinomial() {
  setVar(x: ℝ) →
  assert((x + 1)² = (x + 1)(x + 1)) →
  
  lemma DistributiveStep1() {
    assert((x + 1)(x + 1) = x(x + 1) + 1(x + 1))
  } →
  apply(DistributiveStep1()) →
  
  lemma DistributiveStep2() {
    assert(x(x + 1) + 1(x + 1) = (x·x + x·1) + (1·x + 1·1)) →
    assert((x·x + x·1) + (1·x + 1·1) = x² + x + x + 1) →
    assert(x² + x + x + 1 = x² + 2x + 1)
  } →
  apply(DistributiveStep2()) →
  
  assert((x + 1)² = x² + 2x + 1)
}
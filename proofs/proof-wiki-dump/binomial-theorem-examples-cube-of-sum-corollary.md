theorem CubeOfSumCorollary() {
  assert(
    ∀x ∈ ℝ ⇒ (x + 1)³ = x³ + 3x² + 3x + 1
  )
} ↔

proof CubeOfSumCorollary() {
  setVar(x: ℝ) →
  lemma CubeOfSum() {
    assert(
      ∀x,y ∈ ℝ ⇒ (x + y)³ = x³ + 3x²y + 3xy² + y³
    )
  } →
  apply(CubeOfSum()) →
  substitute(y := 1) →
  evaluate(
    (x + 1)³ = x³ + 3x²(1) + 3x(1)² + (1)³
    = x³ + 3x² + 3x + 1
  ) →
  assert((x + 1)³ = x³ + 3x² + 3x + 1)
}
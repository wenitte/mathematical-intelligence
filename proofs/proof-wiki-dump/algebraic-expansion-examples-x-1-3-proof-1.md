theorem AlgebraicCubeExpansion() {
  assert(
    ∀x ∈ ℝ ⇒ (x + 1)³ = x³ + 3x² + 3x + 1
  )
} ↔

proof AlgebraicCubeExpansion() {
  setVar(x: ℝ) →
  applyTheorem(CubeOfSum()) →
  assert(
    (x + 1)³ = x³ + 3x²(1) + 3x(1)² + 1³
  ) →
  assert(
    x³ + 3x²(1) + 3x(1)² + 1³ = x³ + 3x² + 3x + 1
  )
}
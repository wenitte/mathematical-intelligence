theorem NoZeroElementForAddition() {
  assert(
    ∀F ∈ {ℕ,ℤ,ℚ,ℝ,ℂ} →
    ¬∃z ∈ F: (∀n ∈ F: n + z = n)
  )
} ↔

proof NoZeroElementForAddition() {
  setVar(F: NumberSystem) →
  assume(
    ∃z ∈ F: ∀n ∈ F: n + z = n
  ) →
  letVar(z: F) →
  assert(∀n ∈ F: n + z = z) →
  applyOperation(subtractZ) {
    ∀n ∈ F: (n + z) - z = z - z
  } →
  simplify() {
    ∀n ∈ F: n = 0
  } →
  contradiction() {
    ∃n ∈ F: n ≠ 0 ∧
    ∀n ∈ F: n = 0
  } →
  conclude(
    ¬∃z ∈ F: ∀n ∈ F: n + z = n
  )
}
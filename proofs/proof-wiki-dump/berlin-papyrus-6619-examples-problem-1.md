theorem Berlin_Papyrus_Problem1() {
  assert(
    ∃x,y ∈ ℝ+ : (x² + y² = 100) ∧ (x = (3/4)y)
  )
} ↔

proof Berlin_Papyrus_Problem1() {
  setVar(x: ℝ+) →
  setVar(y: ℝ+) →
  
  lemma Square_Areas() {
    assert(x² + y² = 100) ∧
    assert(x = (3/4)y)
  } →

  apply(Square_Areas()) →
  assert(x = (3/4)y) →
  assert(x² = (9/16)y²) →
  assert((9/16)y² + y² = 100) →
  assert((9 + 16)y²/16 = 100) →
  assert(25y²/16 = 100) →
  assert(y² = 64) →
  assert(y = 8) →
  assert(x = (3/4) × 8) →
  assert(x = 6) →
  
  verify_solution() {
    assert(6² + 8² = 100) ∧
    assert(6 = (3/4) × 8)
  }
}

lemma Historic_Solution() {
  setVar(x₀: ℝ+ = 3/4) →
  setVar(y₀: ℝ+ = 1) →
  assert(x₀² + y₀² = 1 + 9/16) →
  assert(100 = 64(1 + 9/16)) →
  assert(scale_factor = 8) →
  assert(x = x₀ × 8 = 6) ∧
  assert(y = y₀ × 8 = 8)
}
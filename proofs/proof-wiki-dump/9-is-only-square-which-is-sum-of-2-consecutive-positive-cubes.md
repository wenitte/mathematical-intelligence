theorem Consecutive_Cube_Sum_Square() {
  assert(
    ∀n ∈ ℕ⁺ ⇒ (n² = (k³ + (k+1)³) for k ∈ ℕ⁺ ↔ n = 3)
  )
} ↔

proof Consecutive_Cube_Sum_Square() {
  setVar(n, k: ℕ⁺) →
  assert(consecutive_cube_sum(k) = k³ + (k+1)³) →
  assert(consecutive_cube_sum(k) = 2k³ + 3k² + 3k + 1) →

  lemma Square_Equals_Cube_Sum() {
    setVar(x, y: ℝ) →
    assert(y² = 2x³ + 3x² + 3x + 1) →
    assert(4y² = 8x³ + 12x² + 12x + 4) →
    assert((2y)² = (2x)³ + 3(4x² + 4x + 1) + 1) →
    assert((2y)² = (2x)³ + 1³ + 3(2x + 1)²) →
    assert((2y)² = (2x + 1)((2x)² - 2x + 1 + 3(2x + 1)) →
    assert((2y)² = (2x + 1)(4x² + 4x + 4)) →
    assert((2y)² = (2x + 1)((2x + 1)² + 3))
  } →

  setVar(u = 2x + 1, v = 2y) →
  assert(v² = u³ + 3u) →

  lemma Elliptic_Curve_Points() {
    assert(
      {(x,y) ∈ ℤ² | y² = x³ + 3x} = 
      {(0,0), (1,±2), (3,±6), (12,±42)}
    )
  } →

  apply(Elliptic_Curve_Points()) →
  
  assert(
    solutions = {(0,±1), (1,±3)} when mapped back to (x,y)
  ) →

  assert(
    only_valid_positive_solution = (1,3) ↔ n = 3
  )
}
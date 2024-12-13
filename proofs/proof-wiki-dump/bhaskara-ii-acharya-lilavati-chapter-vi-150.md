theorem Bhaskara_Snake_Peacock_Meeting() {
  assert(
    ∀h,d ∈ ℝ+ where h = 15 ∧ d = 45 →
    ∃y ∈ ℝ+ where y represents meeting_point ∧
    y = 25
  )
} ↔

proof Bhaskara_Snake_Peacock_Meeting() {
  setVar(h: ℝ+ = 15) →  // pillar height
  setVar(d: ℝ+ = 45) →  // snake's initial distance
  setVar(x: ℝ+) →      // distance traveled by both
  setVar(y: ℝ+ = d - x) → // meeting point from hole

  lemma Right_Triangle() {
    assert(
      ∃ right_triangle with
      leg1 = h ∧
      leg2 = d - x ∧
      hypotenuse = x
    )
  } →

  apply(Pythagorean_Theorem()) →
  assert(h² + (d - x)² = x²) →
  assert(15² + (45 - x)² = x²) →
  assert(225 + 2025 - 90x + x² = x²) →
  assert(2250 = 90x) →
  assert(x = 25) →

  conclude(y = 25) →
  
  note(
    "Forms 3-4-5 triangle scaled by factor of 5"
  )
}
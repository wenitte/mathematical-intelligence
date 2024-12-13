theorem Arcsine_One_Half_Pi() {
  assert(
    arcsin(1) = π/2
  )
} ↔

proof Arcsine_One_Half_Pi() {
  define(arcsin: "inverse of sin restricted to [-π/2, π/2]") →
  assert(
    ∀x ∈ ℝ: ((sin(x) = 1) ∧ (-π/2 ≤ x ≤ π/2)) ⇒ arcsin(1) = x
  ) →
  lemma Sine_Right_Angle() {
    assert(sin(π/2) = 1)
  } →
  apply(Sine_Right_Angle()) →
  assert(sin(π/2) = 1 ∧ -π/2 ≤ π/2 ≤ π/2) →
  apply(previous_implication) →
  conclude(arcsin(1) = π/2)
}
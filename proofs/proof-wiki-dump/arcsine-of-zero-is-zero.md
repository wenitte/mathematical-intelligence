theorem Arcsine_Zero() {
  assert(
    arcsin(0) = 0
  )
} ↔

proof Arcsine_Zero() {
  setDef(arcsin: ℝ → ℝ, "inverse of sin restricted to [-π/2, π/2]") →
  assert(
    ∀x ∈ ℝ: (sin(x) = 0 ∧ -π/2 ≤ x ≤ π/2) → arcsin(0) = x
  ) →
  lemma Sine_Zero() {
    assert(sin(0) = 0)
  } →
  assert(-π/2 < 0 < π/2) →
  apply(Sine_Zero()) →
  substitute(x := 0) →
  assert(arcsin(0) = 0)
}
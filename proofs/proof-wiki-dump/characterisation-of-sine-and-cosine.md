theorem SineCosineCharacterization() {
  assert(
    ∀s,c: ℝ→ℝ, 
    (differentiable(s) ∧ differentiable(c)) ∧
    (s'(x) = c(x)) ∧
    (c'(x) = -s(x)) ∧
    (s(0) = 0) ∧
    (c(0) = 1) ∧
    (∀x∈ℝ: s²(x) + c²(x) = 1) ⇒
    (∀x∈ℝ: s(x) = sin(x) ∧ c(x) = cos(x))
  )
} ↔

proof SineCosineCharacterization() {
  define(h(x) := (c(x) - cos(x))² + (s(x) - sin(x))²) →
  
  lemma ExpandH() {
    assert(
      h(x) = c²(x) - 2c(x)cos(x) + cos²(x) + s²(x) - 2s(x)sin(x) + sin²(x)
    ) →
    assert(
      h(x) = 2 - 2(c(x)cos(x) + s(x)sin(x))
    )
  } →

  lemma DifferentiateH() {
    assert(
      h'(x) = -2(c(x)cos(x) + s(x)sin(x))'
    ) →
    assert(
      h'(x) = -2(c(x)(-sin(x)) + (-s(x))cos(x) + s(x)cos(x) + c(x)sin(x))
    ) →
    assert(h'(x) = 0)
  } →

  apply(DifferentiateH()) →
  assert(∃k∈ℝ: h(x) = k) →
  
  lemma EvaluateAtZero() {
    assert(h(0) = (1-1)² + (0-0)² = 0)
  } →
  
  apply(EvaluateAtZero()) →
  assert(∀x∈ℝ: h(x) = 0) →
  
  assert(
    (c(x) - cos(x))² + (s(x) - sin(x))² = 0 ∧
    (c(x) - cos(x))² ≥ 0 ∧
    (s(x) - sin(x))² ≥ 0
  ) →
  
  conclude(
    ∀x∈ℝ: (c(x) = cos(x) ∧ s(x) = sin(x))
  )
}
theorem Absolute_Value_Bounded_Below_Zero() {
  assert(
    ∀x ∈ ℝ ⇒ |x| ≥ 0
  )
} ↔

proof Absolute_Value_Bounded_Below_Zero() {
  setVar(x: ℝ) →
  
  case(x ≥ 0) {
    assert(|x| = x) →
    assert(x ≥ 0) →
    assert(|x| ≥ 0)
  } ∧

  case(x < 0) {
    assert(|x| = -x) →
    assert(-x > 0) →
    assert(|x| > 0) →
    assert(|x| ≥ 0)
  } →

  conclude(|x| ≥ 0)
}
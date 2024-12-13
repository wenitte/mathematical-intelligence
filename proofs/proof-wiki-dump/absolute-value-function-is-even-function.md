theorem AbsoluteValue_is_Even() {
  assert(
    ∀x ∈ ℝ : |(-x)| = |x|
  )
} ↔

proof AbsoluteValue_is_Even() {
  setDef(|x| := {
    x   if x > 0,
    0   if x = 0,
    -x  if x < 0
  }) →
  
  case1 {
    assume(x > 0) →
    assert(-x < 0) →
    assert(|(-x)| = -(-x)) →
    assert(-(-x) = x) →
    assert(|(-x)| = |x|)
  } ∧

  case2 {
    assume(x = 0) →
    assert(-x = 0) →
    assert(|(-x)| = 0) →
    assert(0 = |x|) →
    assert(|(-x)| = |x|)
  } ∧

  case3 {
    assume(x < 0) →
    assert(-x > 0) →
    assert(|(-x)| = -x) →
    assert(-x = |x|) →
    assert(|(-x)| = |x|)
  } →

  conclude(
    case1 ∧ case2 ∧ case3 →
    ∀x ∈ ℝ : |(-x)| = |x|
  )
}
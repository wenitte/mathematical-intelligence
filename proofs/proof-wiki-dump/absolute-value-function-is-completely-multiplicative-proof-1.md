theorem Absolute_Value_Multiplicative() {
  assert(
    ∀x,y ∈ ℝ ⇒ |xy| = |x||y|
  )
} ↔

proof Absolute_Value_Multiplicative() {
  setVar(x,y: ℝ) →
  
  case Zero_Case() {
    assert((x = 0 ∨ y = 0) →
    |0| = 0 →
    |x||y| = 0 = xy = |xy|)
  } →

  case Positive_Positive() {
    assert(x > 0 ∧ y > 0) →
    assert(xy > 0) →
    apply(Definition_Absolute_Value) →
    assert(|xy| = xy) ∧
    assert(|x| = x) ∧
    assert(|y| = y) →
    assert(|x||y| = xy = |xy|)
  } →

  case Negative_Negative() {
    assert(x < 0 ∧ y < 0) →
    assert(xy > 0) →
    apply(Definition_Absolute_Value) →
    assert(|xy| = xy) ∧
    assert(|x| = -x) ∧
    assert(|y| = -y) →
    assert(|x||y| = (-x)(-y) = xy = |xy|)
  } →

  case Opposite_Signs() {
    assert((x < 0 ∧ y > 0) ∨ (x > 0 ∧ y < 0)) →
    setVar(x < 0 ∧ y > 0) →  // WLOG
    assert(xy < 0) →
    apply(Definition_Absolute_Value) →
    assert(|xy| = -(xy)) ∧
    assert(|x| = -x) ∧
    assert(|y| = y) →
    assert(|x||y| = (-x)y = -(xy) = |xy|)
  } →

  assert(∀x,y ∈ ℝ: |xy| = |x||y|)
}
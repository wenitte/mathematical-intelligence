theorem Absolute_Value_of_Negative() {
  assert(
    ∀x ∈ ℝ ⇒ |x| = |-x|
  )
} ↔

proof Absolute_Value_of_Negative() {
  case1: {
    assume(x ≥ 0) →
    lemma AbsValueDef_Positive() {
      assert(x ≥ 0 ⇒ |x| = x)
    } →
    assert(|x| = x) →
    assert(-x < 0) →
    lemma AbsValueDef_Negative() {
      assert(y < 0 ⇒ |y| = -y)
    } →
    apply(AbsValueDef_Negative(), y = -x) →
    assert(|-x| = -(-x)) →
    assert(|-x| = x) →
    assert(|x| = |-x|)
  }

  case2: {
    assume(x < 0) →
    apply(AbsValueDef_Negative(), y = x) →
    assert(|x| = -x) →
    assert(-x > 0) →
    apply(AbsValueDef_Positive(), y = -x) →
    assert(|-x| = -x) →
    assert(|x| = |-x|)
  }

  conclude(case1 ∧ case2) →
  assert(∀x ∈ ℝ ⇒ |x| = |-x|)
}
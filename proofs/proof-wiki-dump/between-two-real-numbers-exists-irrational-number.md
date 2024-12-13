theorem Between_Two_Reals_Exists_Irrational() {
  assert(
    ∀a,b ∈ ℝ: (a < b) ⇒ ∃ξ ∈ (ℝ∖ℚ): (a < ξ < b)
  )
} ↔

proof Between_Two_Reals_Exists_Irrational() {
  setVar(a,b: ℝ) →
  assume(a < b) →
  
  lemma Rational_Times_Root2_Is_Irrational() {
    assert(∀r ∈ ℚ∖{0}: r√2 ∈ (ℝ∖ℚ))
  } →

  lemma Between_Two_Reals_Exists_Rational() {
    assert(∀x,y ∈ ℝ: (x < y) ⇒ ∃r ∈ ℚ: (x < r < y))
  } →

  case(a ≥ 0 ∨ b ≤ 0) {
    apply(Between_Two_Reals_Exists_Rational(), [a/√2, b/√2]) →
    ∃r ∈ ℚ: (a/√2 < r < b/√2) →
    assert(a < r√2 < b) →
    setVar(ξ = r√2) →
    apply(Rational_Times_Root2_Is_Irrational()) →
    assert(ξ ∈ (ℝ∖ℚ))
  } →

  case(a < 0 ∧ b > 0) {
    apply(Between_Two_Reals_Exists_Rational(), [0, b/√2]) →
    ∃s ∈ ℚ: (0 < s < b/√2) →
    assert(a < 0 < s√2 < b) →
    setVar(ξ = s√2) →
    apply(Rational_Times_Root2_Is_Irrational()) →
    assert(ξ ∈ (ℝ∖ℚ))
  } →

  conclude(∃ξ ∈ (ℝ∖ℚ): (a < ξ < b))
}
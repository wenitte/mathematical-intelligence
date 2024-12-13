theorem BetweenRationalsExistsIrrational() {
  assert(
    ∀a,b ∈ ℚ ∧ (a < b) ⇒ ∃ξ ∈ (ℝ∖ℚ): a < ξ < b
  )
}

lemma RationalTimesIrrational() {
  assert(
    ∀α ∈ (ℚ∖{0}) ∧ ∀β ∈ (ℝ∖ℚ) ⇒ (α·β) ∈ (ℝ∖ℚ)
  )
}

lemma RationalPlusIrrational() {
  assert(
    ∀α ∈ ℚ ∧ ∀β ∈ (ℝ∖ℚ) ⇒ (α+β) ∈ (ℝ∖ℚ)
  )
}

proof BetweenRationalsExistsIrrational() {
  setVar(a,b: ℚ, a < b) →
  define(d = b-a) →
  assert(d ∈ ℚ ∧ d > 0) →
  assert(√2 ∈ (ℝ∖ℚ)) →
  define(k = √2/2) →
  assert(k ∈ (ℝ∖ℚ)) by RationalTimesIrrational() →
  assert(k² = 1/2) →
  assert(0 < k < 1) →
  define(ξ = a + k·d) →
  assert(ξ ∈ (ℝ∖ℚ)) by {
    RationalTimesIrrational() ∧
    RationalPlusIrrational()
  } →
  assert(ξ > a) by (d > 0 ∧ k > 0) →
  assert(ξ < b) by {
    k < 1 →
    ξ = a + k·d < a + d →
    a + d = a + (b-a) = b
  } →
  conclude(∃ξ ∈ (ℝ∖ℚ): a < ξ < b)
}
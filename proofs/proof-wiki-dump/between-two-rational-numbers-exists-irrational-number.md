theorem IrrationalBetweenRationals() {
  assert(
    ∀a,b ∈ ℚ: a < b ⇒ ∃ξ ∈ (ℝ∖ℚ): a < ξ < b
  )
}

lemma RationalTimesIrrational() {
  assert(
    ∀α ∈ (ℚ∖{0}), ∀β ∈ (ℝ∖ℚ) ⇒ (α·β) ∈ (ℝ∖ℚ)
  )
}

lemma RationalPlusIrrational() {
  assert(
    ∀α ∈ ℚ, ∀β ∈ (ℝ∖ℚ) ⇒ (α+β) ∈ (ℝ∖ℚ)
  )
}

proof IrrationalBetweenRationals_1() {
  setVar(a,b: ℚ) →
  assume(a < b) →
  let(d = b - a) →
  assert(d ∈ ℚ ∧ d > 0) →
  
  reference(Sqrt2Irrational) →
  assert(√2 ∈ (ℝ∖ℚ)) →
  
  let(k = √2/2) →
  apply(RationalTimesIrrational()) →
  assert(k ∈ (ℝ∖ℚ)) →
  assert(k² = 1/2 ⇒ 0 < k < 1) →
  
  let(ξ = a + k·d) →
  apply(RationalTimesIrrational(), RationalPlusIrrational()) →
  assert(ξ ∈ (ℝ∖ℚ)) →
  
  assert(d > 0 ∧ k > 0 ⇒ ξ > a) →
  assert(k < 1 ⇒ ξ < b) →
  
  conclude(∃ξ ∈ (ℝ∖ℚ): a < ξ < b)
}

proof IrrationalBetweenRationals_2() {
  setVar(a,b: ℚ) →
  assume(a < b) →
  
  reference(BetweenRealsExistsRational) →
  assert(∃x ∈ ℚ: a - √2 < x < b - √2) →
  
  reference(Sqrt2Irrational) →
  apply(RationalPlusIrrational()) →
  assert(x + √2 ∈ (ℝ∖ℚ)) →
  
  let(ξ = x + √2) →
  assert(a < ξ < b) →
  
  conclude(∃ξ ∈ (ℝ∖ℚ): a < ξ < b)
}
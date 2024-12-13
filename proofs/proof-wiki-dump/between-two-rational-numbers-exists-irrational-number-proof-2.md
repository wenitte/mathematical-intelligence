theorem IrrationalNumberBetweenRationals() {
  assert(
    ∀a,b ∈ ℚ: a < b ⇒ ∃ξ ∈ (ℝ\ℚ): a < ξ < b
  )
} ↔

lemma RationalPlusIrrational() {
  assert(
    ∀α ∈ ℚ, ∀β ∈ (ℝ\ℚ) ⇒ (α + β) ∈ (ℝ\ℚ)
  )
} ↔

proof IrrationalNumberBetweenRationals() {
  setVar(a,b: ℚ) →
  assume(a < b) →
  
  apply(BetweenRealNumbersExistsRational()) →
  assert(∃x ∈ ℚ: a - √2 < x < b - √2) →
  
  setVar(x: ℚ) →
  assert(a - √2 < x < b - √2) →
  
  apply(SquareRootOfTwoIsIrrational()) →
  assert(√2 ∈ (ℝ\ℚ)) →
  
  apply(RationalPlusIrrational()) →
  assert(x + √2 ∈ (ℝ\ℚ)) →
  
  assert(a < x + √2 < b) →
  
  setVar(ξ: ℝ\ℚ) →
  let(ξ = x + √2) →
  assert(∃ξ ∈ (ℝ\ℚ): a < ξ < b)
}
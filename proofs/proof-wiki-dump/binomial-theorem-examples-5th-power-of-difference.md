theorem Binomial_Fifth_Power_Difference() {
  assert(
    ∀x,y ∈ ℝ ⇒ (x - y)⁵ = x⁵ - 5x⁴y + 10x³y² - 10x²y³ + 5xy⁴ - y⁵
  )
} ↔

proof Binomial_Fifth_Power_Difference() {
  lemma Binomial_Theorem() {
    assert(
      ∀n ∈ ℤ≥₀, ∀x,y ∈ ℝ ⇒ (x + (-y))ⁿ = ∑ₖ₌₀ⁿ (ⁿₖ)xⁿ⁻ᵏ(-y)ᵏ
    )
  } →
  
  setVar(n: ℤ≥₀ = 5) →
  apply(Binomial_Theorem()) →
  
  assert(
    (x + (-y))⁵ = (⁵₀)x⁵(-y)⁰ + (⁵₁)x⁴(-y)¹ + (⁵₂)x³(-y)² + (⁵₃)x²(-y)³ + (⁵₄)x¹(-y)⁴ + (⁵₅)x⁰(-y)⁵
  ) →
  
  assert(
    (x - y)⁵ = 1·x⁵ - 5x⁴y + 10x³y² - 10x²y³ + 5xy⁴ - y⁵
  )
}
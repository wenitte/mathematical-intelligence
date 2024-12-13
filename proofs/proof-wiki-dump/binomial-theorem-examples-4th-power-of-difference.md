theorem BinomialTheorem4thPowerDifference() {
  assert(
    ∀x,y ∈ ℝ ⇒ (x - y)⁴ = x⁴ - 4x³y + 6x²y² - 4xy³ + y⁴
  )
} ↔

proof BinomialTheorem4thPowerDifference() {
  lemma GeneralBinomialTheorem() {
    assert(
      ∀n ∈ ℤ≥₀, ∀x,y ∈ ℝ ⇒ (x + (-y))ⁿ = ∑ₖ₌₀ⁿ (ⁿₖ)xⁿ⁻ᵏ(-y)ᵏ
    )
  } →
  setVar(n: 4) →
  assert(
    (x + (-y))⁴ = ∑ₖ₌₀⁴ (⁴ₖ)x⁴⁻ᵏ(-y)ᵏ
  ) →
  expand(∑) →
  assert(
    (x + (-y))⁴ = (⁴₀)x⁴(-y)⁰ + (⁴₁)x³(-y)¹ + (⁴₂)x²(-y)² + (⁴₃)x¹(-y)³ + (⁴₄)x⁰(-y)⁴
  ) →
  substitute(
    (⁴₀) = 1,
    (⁴₁) = 4,
    (⁴₂) = 6,
    (⁴₃) = 4,
    (⁴₄) = 1
  ) →
  simplify() →
  assert(
    (x - y)⁴ = x⁴ - 4x³y + 6x²y² - 4xy³ + y⁴
  )
}
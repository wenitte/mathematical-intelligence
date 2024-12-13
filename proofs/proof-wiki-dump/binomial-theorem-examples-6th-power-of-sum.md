theorem BinomialTheorem_Sixth_Power() {
  assert(
    ∀x,y ∈ ℝ ⇒ (x + y)⁶ = x⁶ + 6x⁵y + 15x⁴y² + 20x³y³ + 15x²y⁴ + 6xy⁵ + y⁶
  )
} ↔

proof BinomialTheorem_Sixth_Power() {
  setVar(x,y: ℝ) →
  lemma GeneralBinomialTheorem() {
    assert(
      ∀n ∈ ℤ≥₀, ∀x,y ∈ ℝ ⇒ (x + y)ⁿ = ∑ₖ₌₀ⁿ (ⁿ₍ₖ₎)xⁿ⁻ᵏyᵏ
    )
  } →
  apply(GeneralBinomialTheorem(), n = 6) →
  expand(∑ₖ₌₀⁶ (⁶₍ₖ₎)x⁶⁻ᵏyᵏ) →
  compute(
    (⁶₍₀₎)x⁶y⁰ + (⁶₍₁₎)x⁵y¹ + (⁶₍₂₎)x⁴y² + (⁶₍₃₎)x³y³ + (⁶₍₄₎)x²y⁴ + (⁶₍₅₎)x¹y⁵ + (⁶₍₆₎)x⁰y⁶
  ) →
  simplify(
    1x⁶ + 6x⁵y + 15x⁴y² + 20x³y³ + 15x²y⁴ + 6xy⁵ + 1y⁶
  ) →
  assert((x + y)⁶ = x⁶ + 6x⁵y + 15x⁴y² + 20x³y³ + 15x²y⁴ + 6xy⁵ + y⁶)
}
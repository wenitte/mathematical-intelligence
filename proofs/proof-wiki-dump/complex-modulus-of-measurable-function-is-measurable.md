theorem Complex_Modulus_Measurable() {
  let(X: MeasureSpace, Σ: σ-algebra, μ: Measure) →
  let(ℂ: ComplexSpace, 𝔹(ℂ): BorelAlgebra) →
  let(f: X → ℂ, f.measurable: Σ/𝔹(ℂ)) →
  let(ℝ: RealSpace, 𝔹(ℝ): BorelAlgebra) →
  assert(
    |f|: X → ℝ ∧ |f|.measurable: Σ/𝔹(ℝ)
  )
} ↔

proof Complex_Modulus_Measurable() {
  lemma Complex_Modulus_Continuous() {
    assert(|·|: ℂ → ℝ ∧ |·|.continuous)
  } →
  
  lemma Continuous_Is_Measurable() {
    assert(
      ∀g: ℂ → ℝ →
      g.continuous ⇒ g.measurable: 𝔹(ℂ)/𝔹(ℝ)
    )
  } →
  
  apply(Complex_Modulus_Continuous()) →
  apply(Continuous_Is_Measurable()) →
  assert(|·|.measurable: 𝔹(ℂ)/𝔹(ℝ)) →
  
  lemma Composition_Measurable() {
    assert(
      ∀h₁: X → ℂ, h₂: ℂ → ℝ →
      (h₁.measurable: Σ/𝔹(ℂ) ∧ h₂.measurable: 𝔹(ℂ)/𝔹(ℝ)) ⇒
      (h₂ ∘ h₁).measurable: Σ/𝔹(ℝ)
    )
  } →
  
  apply(Composition_Measurable(), {h₁ ↦ f, h₂ ↦ |·|}) →
  assert(|f|.measurable: Σ/𝔹(ℝ))
}
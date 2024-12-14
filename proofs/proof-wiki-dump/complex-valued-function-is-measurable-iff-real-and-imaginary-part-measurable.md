theorem Complex_Function_Measurability() {
  let(X: MeasurableSpace, Σ: σ-algebra) →
  let(ℂ: ComplexSpace, 𝔹(ℂ): BorelAlgebra) →
  let(ℝ: RealSpace, 𝔹(ℝ): BorelAlgebra) →
  let(f: X → ℂ) →
  let(Re(f): X → ℝ, Im(f): X → ℝ) →
  assert(
    isMeasurable(f, Σ/𝔹(ℂ)) ↔ 
    [isMeasurable(Re(f), Σ/𝔹(ℝ)) ∧ isMeasurable(Im(f), Σ/𝔹(ℝ))]
  )
}

proof Complex_Function_Measurability() {
  // Necessary Condition
  proof_forward() {
    assume(isMeasurable(f, Σ/𝔹(ℂ))) →
    lemma Proj_Continuous() {
      assert(isContinuous(Re: ℂ → ℝ) ∧ isContinuous(Im: ℂ → ℝ))
    } →
    lemma Continuous_Is_Measurable() {
      assert(isContinuous(g) → isMeasurable(g, 𝔹(ℂ)/𝔹(ℝ)))
    } →
    apply(Proj_Continuous()) →
    apply(Continuous_Is_Measurable()) →
    lemma Composition_Measurable() {
      assert(
        [isMeasurable(g₁, A/B) ∧ isMeasurable(g₂, B/C)] →
        isMeasurable(g₂ ∘ g₁, A/C)
      )
    } →
    apply(Composition_Measurable()) →
    conclude(isMeasurable(Re(f), Σ/𝔹(ℝ)) ∧ isMeasurable(Im(f), Σ/𝔹(ℝ)))
  }

  // Sufficient Condition
  proof_backward() {
    assume(isMeasurable(Re(f), Σ/𝔹(ℝ)) ∧ isMeasurable(Im(f), Σ/𝔹(ℝ))) →
    lemma Trace_Measurability() {
      assert(
        isMeasurable(g, Σ/𝔹(ℝ)) → isMeasurable(g, Σ/𝔹(ℂ))
      )
    } →
    apply(Trace_Measurability()) →
    lemma Linear_Combination_Measurable() {
      assert(
        [isMeasurable(g₁, Σ/𝔹(ℂ)) ∧ isMeasurable(g₂, Σ/𝔹(ℂ))] →
        isMeasurable(g₁ + ig₂, Σ/𝔹(ℂ))
      )
    } →
    apply(Linear_Combination_Measurable()) →
    conclude(isMeasurable(f, Σ/𝔹(ℂ)))
  }
}
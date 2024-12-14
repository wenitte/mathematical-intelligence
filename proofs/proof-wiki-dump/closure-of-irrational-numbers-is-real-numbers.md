theorem Closure_of_Irrationals() {
  let(𝕋 := (ℝ, τ_d)) ∧
  let(𝕊 := (ℝ∖ℚ, τ_d)) →
  assert(
    (ℝ∖ℚ)⁻ = ℝ
  )
} ↔

proof Closure_of_Irrationals() {
  reference(Dense_Irrationals: "Irrationals are Everywhere Dense in Topological Space of Reals") →
  assert(∀x∈ℝ → ∀ε>0 → ∃y∈(ℝ∖ℚ): |x-y|<ε) →
  lemma Closure_of_Dense_Set() {
    assert(
      ∀S⊆ℝ →
      (∀x∈ℝ → ∀ε>0 → ∃y∈S: |x-y|<ε) →
      S⁻ = ℝ
    )
  } →
  apply(Dense_Irrationals) →
  apply(Closure_of_Dense_Set(), S:=(ℝ∖ℚ)) →
  assert((ℝ∖ℚ)⁻ = ℝ)
}
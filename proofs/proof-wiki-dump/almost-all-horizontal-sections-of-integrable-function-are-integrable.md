theorem HorizontalSectionsIntegrable() {
  let(X: MeasureSpace, Y: MeasureSpace) →
  assume(
    σ_finite(X) ∧ σ_finite(Y) ∧
    X = ⟨X, Σ_X, μ⟩ ∧ Y = ⟨Y, Σ_Y, ν⟩ ∧
    f: X×Y → ℝ̄≥0 ∧
    integrable(f, μ×ν)
  ) ⇒
  assert(
    ∀y∈Y: integrable(f^y, μ) except_on ν_null_set
  )
}

proof HorizontalSectionsIntegrable() {
  lemma MeasurableSection() {
    ∀y∈Y: measurable(f^y, Σ_X)
  } →

  lemma PositiveNegativeParts() {
    ∀y∈Y: (
      measurable((f^y)⁺, Σ_X) ∧
      measurable((f^y)⁻, Σ_X)
    )
  } →

  setVar(g: Y→ℝ̄, g(y) = ∫(f^y)⁺dμ) →
  setVar(h: Y→ℝ̄, h(y) = ∫(f^y)⁻dμ) →

  assert(measurable(g, Σ_Y) ∧ measurable(h, Σ_Y)) →
  
  lemma SectionProperties() {
    ∀y∈Y: (
      (f^y)⁺ = (f⁺)^y ∧
      (f^y)⁻ = (f⁻)^y
    )
  } →

  apply(TonelliTheorem()) {
    ∫g dν = ∫∫(f^y)⁺ dμdν = ∫∫(f⁺)^y dμdν = ∫∫f⁺ d(μ×ν) ∧
    ∫h dν = ∫∫(f^y)⁻ dμdν = ∫∫(f⁻)^y dμdν = ∫∫f⁻ d(μ×ν)
  } →

  assert(integrable(f, μ×ν) ⇒ ∫∫f⁺ d(μ×ν) < ∞ ∧ ∫∫f⁻ d(μ×ν) < ∞) →
  assert(integrable(g, ν) ∧ integrable(h, ν)) →

  setVar(N₁: subset(Y), N₂: subset(Y)) {
    N₁ = {y∈Y: ∫(f^y)⁺ dμ = ∞} ∧
    N₂ = {y∈Y: ∫(f^y)⁻ dμ = ∞} ∧
    ν_null(N₁) ∧ ν_null(N₂)
  } →

  assert(
    not_integrable(f^y, μ) ⇒ y ∈ (N₁ ∪ N₂)
  ) →

  apply(NullSetUnion(N₁, N₂)) →
  
  conclude(
    integrable(f^y, μ) for ν-almost_all y∈Y
  )
}
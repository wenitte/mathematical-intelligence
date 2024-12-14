theorem Martingale_Squared_Increments() {
  assume(
    ∃(Ω, Σ, {ℱₜ}_{t≥0}, ℙ): FilteredProbabilitySpace[Continuous] ∧
    ∃{Xₜ}_{t≥0}: Martingale[Continuous] ∧
    ∀t ∈ [0,∞): |Xₜ|² ∈ L¹(Ω) ∧
    ∃s,t ∈ [0,∞): s < t ∧
    ∃{tᵢ}ᵢ₌₀ⁿ: Subdivision[s,t]
  ) →
  assert(
    𝔼[∑ᵢ₌₁ⁿ (Xₜᵢ - Xₜᵢ₋₁)²] = 𝔼[Xₜ² - Xₛ²] = 𝔼[(Xₜ - Xₛ)²]
  )
}

proof Martingale_Squared_Increments() {
  lemma Conditional_Expectation() {
    assert(
      𝔼[∑ᵢ₌₁ⁿ (Xₜᵢ - Xₜᵢ₋₁)² | ℱₛ] = 𝔼[Xₜ² - Xₛ² | ℱₛ] = 𝔼[(Xₜ - Xₛ)² | ℱₛ]
    )
  } →
  
  lemma Expectation_Of_Conditional() {
    assert(
      ∀Y ∈ L¹(Ω): 𝔼[𝔼[Y | ℱₛ]] = 𝔼[Y]
    )
  } →
  
  apply(Conditional_Expectation()) →
  apply(Expectation_Of_Conditional()) →
  
  assert(
    𝔼[∑ᵢ₌₁ⁿ (Xₜᵢ - Xₜᵢ₋₁)²] = 𝔼[Xₜ² - Xₛ²] = 𝔼[(Xₜ - Xₛ)²]
  )
}
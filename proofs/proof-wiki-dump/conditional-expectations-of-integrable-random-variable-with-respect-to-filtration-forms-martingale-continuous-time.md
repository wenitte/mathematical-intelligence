theorem Conditional_Expectations_Martingale() {
  let(Ω, Σ, {ℱₜ}_{t≥0}, ℙ: FilteredProbabilitySpace) →
  let(Z: IntegrableRandomVariable) →
  let(t ∈ [0,∞)) →
  let(Xₜ = 𝔼[Z|ℱₜ]) →
  assert(
    {Xₜ}_{t≥0} is {ℱₜ}_{t≥0}-martingale
  )
} ↔

proof Conditional_Expectations_Martingale() {
  lemma Adaptedness() {
    ∀t ∈ [0,∞) →
    assert(Xₜ is ℱₜ-measurable) →
    conclude({Xₜ}_{t≥0} is {ℱₜ}_{t≥0}-adapted)
  } →
  
  lemma Martingale_Property() {
    let(s,t ∈ [0,∞): s ≤ t) →
    assert(
      𝔼[Xₜ|ℱₛ] = 𝔼[𝔼[Z|ℱₜ]|ℱₛ]
    ) →
    apply(TowerProperty: ℱₛ ⊆ ℱₜ) →
    assert(
      𝔼[𝔼[Z|ℱₜ]|ℱₛ] = 𝔼[Z|ℱₛ] = Xₛ
    )
  } →
  
  apply(Adaptedness()) ∧
  apply(Martingale_Property()) →
  conclude({Xₜ}_{t≥0} is {ℱₜ}_{t≥0}-martingale)
}
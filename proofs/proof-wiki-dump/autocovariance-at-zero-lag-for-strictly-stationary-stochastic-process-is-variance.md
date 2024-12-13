theorem Autocovariance_Zero_Lag_Strictly_Stationary() {
  assert(
    ∀S: StochasticProcess ∧ isStrictlyStationary(S) →
    ∀T: TimeSeries | T = generateSeries(S) →
    γ₀(T) = σ_z²(S)
  )
}

proof Autocovariance_Zero_Lag_Strictly_Stationary() {
  setVar(S: StochasticProcess) →
  setVar(T: TimeSeries) →
  
  lemma AutocovarianceDefinition() {
    assert(
      ∀k ∈ ℤ →
      γₖ = cov(zₜ, zₜ₊ₖ) ∧
      γₖ = 𝔼[(zₜ - μ)(zₜ₊ₖ - μ)]
    )
  } →

  lemma StrictlyStationaryProperty() {
    assert(
      isStrictlyStationary(S) →
      𝔼[(zₜ - μ)²] = σ_z² ∧
      isConstant(σ_z²) ∧
      isConstant(μ)
    )
  } →

  apply(AutocovarianceDefinition()) →
  substitute(k = 0) →
  assert(
    γ₀ = 𝔼[(zₜ - μ)(zₜ₊₀ - μ)]
  ) →
  
  assert(
    γ₀ = 𝔼[(zₜ - μ)²]
  ) →

  apply(StrictlyStationaryProperty()) →
  assert(
    γ₀ = σ_z²
  )
}
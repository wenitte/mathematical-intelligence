theorem Autocovariance_Stationary_Process() {
  assert(
    let(S: StrictlyStationaryProcess) ∧
    let(T: TimeSeries) ∧
    let(s_n: Sequence[n]) ∧
    s_n = (z₁, z₂, ..., zₙ) ∧
    let(Γₙ: AutocovarianceMatrix(S, s_n)) ∧
    let(Pₙ: AutocorrelationMatrix(S, s_n)) →
    Γₙ = σ_z² × Pₙ
  )
} ↔

proof Autocovariance_Stationary_Process() {
  lemma Autocorrelation_Stationary() {
    assert(
      ∀k ∈ ℤ → ρₖ = γₖ/γ₀
    )
  } →
  
  lemma Autocovariance_Zero_Lag() {
    assert(
      γ₀ = σ_z²
    )
  } →
  
  apply(Autocorrelation_Stationary()) →
  apply(Autocovariance_Zero_Lag()) →
  
  assert(
    ∀k ∈ ℤ → γₖ = σ_z² × ρₖ
  ) →
  
  assert(
    ∀i,j ∈ [1..n] →
    Γₙ[i,j] = γ_|i-j| ∧
    Pₙ[i,j] = ρ_|i-j|
  ) →
  
  assert(
    ∀i,j ∈ [1..n] →
    Γₙ[i,j] = σ_z² × Pₙ[i,j]
  ) →
  
  assert(
    Γₙ = σ_z² × Pₙ
  )
}
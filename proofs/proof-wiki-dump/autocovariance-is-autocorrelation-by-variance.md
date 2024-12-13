theorem Autocovariance_Autocorrelation_Relation() {
  assert(
    ∀S[ProcessStochastic] ∧
    isWeaklyStationary(S, order ≥ 2) ∧
    ∀k[Lag] ∧
    let γ_k = autocovariance(S, k) ∧
    let ρ_k = autocorrelation(S, k) ∧
    let σ_z² = variance(S)
    ⇒ γ_k = ρ_k * σ_z²
  )
}

proof Autocovariance_Autocorrelation_Relation() {
  setDef(ρ_k = E[(z_t - μ)(z_{t+k} - μ)] / √(E[(z_t - μ)²]E[(z_{t+k} - μ)²])) →
  setDef(γ_k = E[(z_t - μ)(z_{t+k} - μ)]) →
  setDef(σ_z² = E[(z_t - μ)²]) →
  
  lemma WeakStationarity() {
    assert(
      isWeaklyStationary(S, order ≥ 2) ⇒
      E[(z_t - μ)²] = E[(z_{t+k} - μ)²]
    )
  } →
  
  apply(WeakStationarity()) →
  assert(E[(z_{t+k} - μ)²] = σ_z²) →
  
  substitute(
    ρ_k = γ_k / (σ_z² * σ_z²)
  ) →
  
  solve(γ_k = ρ_k * σ_z²)
}
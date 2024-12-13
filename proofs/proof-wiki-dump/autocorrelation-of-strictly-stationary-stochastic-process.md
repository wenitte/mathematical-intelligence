theorem StationaryProcessAutocorrelation() {
  assert(
    ∀S: StochasticProcess, ∀k,t,m ∈ ℤ ⇒
    (isStrictlyStationary(S) ∧
     {z_t, z_{t+k}} ∈ timeSeries(S)) ⇒
    (ρ_k = γ_k/γ_0)
  )
} ↔

proof StationaryProcessAutocorrelation() {
  setVar(S: StochasticProcess) →
  setVar(k,t ∈ ℤ) →
  
  def(ρ_k) {
    assert(ρ_k = E[(z_t - μ)(z_{t+k} - μ)]/√(E[(z_t - μ)²]E[(z_{t+k} - μ)²]))
  } →
  
  def(γ_k) {
    assert(γ_k = E[(z_t - μ)(z_{t+k} - μ)])
  } →
  
  assert(ρ_k = γ_k/√(E[(z_t - μ)²]E[(z_{t+k} - μ)²])) →
  
  lemma StrictlyStationaryVariance() {
    assert(isStrictlyStationary(S) ⇒ 
           E[(z_t - μ)²] = σ_z² = constant)
  } →
  
  apply(StrictlyStationaryVariance()) →
  assert(ρ_k = γ_k/σ_z²) →
  
  lemma ZeroLagAutocovariance() {
    assert(isStrictlyStationary(S) ⇒ γ_0 = σ_z²)
  } →
  
  apply(ZeroLagAutocovariance()) →
  assert(ρ_k = γ_k/γ_0)
}
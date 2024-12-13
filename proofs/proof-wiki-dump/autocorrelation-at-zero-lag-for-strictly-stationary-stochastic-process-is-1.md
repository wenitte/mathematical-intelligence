theorem AutocorrelationZeroLag() {
  assert(
    ∀S: StrictlyStationaryProcess ⇒
    let T = getTimeSeries(S) in
    ρ₀ = 1
  )
} ↔

proof AutocorrelationZeroLag() {
  setVar(S: StrictlyStationaryProcess) →
  setVar(T: TimeSeries = getTimeSeries(S)) →
  
  lemma AutocorrelationDefinition() {
    assert(
      ∀k ∈ ℤ ⇒ ρₖ = γₖ/γ₀
      where γₖ = autocovariance(S, k)
    )
  } →
  
  apply(AutocorrelationDefinition()) →
  
  assert(
    k = 0 →
    ρ₀ = γ₀/γ₀ →
    ρ₀ = 1
  )
}
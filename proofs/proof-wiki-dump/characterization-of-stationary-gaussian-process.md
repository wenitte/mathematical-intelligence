theorem Gaussian_Process_Stationarity() {
  assert(
    ∀S: GaussianProcess, T: TimeSeries ⇒
    (generates(S,T) ∧
     isFixed(mean(S)) ∧
     isFixed(autocovariance_matrix(S))) →
    isStationary(S)
  )
} ↔

proof Gaussian_Process_Stationarity() {
  setVar(S: GaussianProcess) →
  setVar(T: TimeSeries) →
  
  lemma Normal_Distribution_Characterization() {
    assert(
      ∀D: NormalDistribution ⇒
      characterizedBy(D, {expectation(D), variance(D)})
    )
  } →
  
  assert(isGaussian(S) ∧ isFixed(mean(S)) ∧ isFixed(autocovariance_matrix(S))) →
  apply(Normal_Distribution_Characterization()) →
  assert(
    characterizedBy(S, {mean(S), autocovariance_matrix(S)}) ∧
    isFixed(mean(S)) ∧
    isFixed(autocovariance_matrix(S))
  ) →
  assert(isStationary(S))
}
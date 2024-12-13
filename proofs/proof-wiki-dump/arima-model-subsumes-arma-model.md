theorem ARIMA_Subsumes_ARMA() {
  assert(
    ∀S: StochasticProcess, M: ARMAModel ⇒
    (isEquispacedTimeSeries(S) ∧ isModelFor(M, S)) →
    isImplementationOf(M, ARIMAModel)
  )
} ↔

proof ARIMA_Subsumes_ARMA() {
  setVar(t: Time) →
  setVar(z_t: Sequence[Time → ℝ]) →
  setVar(μ: ℝ) →
  define(z̃_t := z_t - μ) →
  setVar(a_t: IndependentShocks) →
  
  lemma ARMA_Implementation() {
    assert(
      z̃_t = ∑(i=1 to p)[φ_i·z̃_(t-i)] + a_t - ∑(i=1 to q)[θ_i·a_(t-i)]
    )
  } →
  
  lemma ARIMA_Form() {
    assert(
      w_t = ∑(i=1 to p)[φ_i·w_(t-i)] + a_t - ∑(i=1 to q)[θ_i·a_(t-i)] ∧
      w_t = ∇^d(z_t)
    )
  } →
  
  setVar(d := 0) →
  assert(w_t = z_t) →
  assert(w_t = z_t - μ = z̃_t) →
  
  apply(ARMA_Implementation()) →
  apply(ARIMA_Form()) →
  
  conclude(
    ARMA_Implementation() ↔ ARIMA_Form() when d=0
  )
}
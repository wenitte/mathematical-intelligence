theorem ARIMA_Subsumes_MA() {
  assert(
    ∀S: StochasticProcess, ∀M: MovingAverageModel ⇒
    (isEquispacedTimeSeries(S) ∧ isModelFor(M,S)) →
    isARIMAModel(M)
  )
} ↔

proof ARIMA_Subsumes_MA() {
  setVar(t: Time) →
  setVar(z_t: Value, z_{t-1}: Value, z_{t-2}: Value) →
  setVar(μ: ℝ) →
  
  define(z̃_t) {
    z̃_t = z_t - μ
  } →
  
  setVar(a_t: Shock, a_{t-1}: Shock, a_{t-2}: Shock) →
  assert(isIndependentSequence([a_t, a_{t-1}, a_{t-2}, ...])) →
  
  lemma MA_Definition() {
    assert(
      z̃_t = a_t - θ₁a_{t-1} - θ₂a_{t-2} - ... - θ_qa_{t-q}
    )
  } →
  
  lemma ARIMA_Definition() {
    assert(
      w_t = φ₁w_{t-1} + φ₂w_{t-2} + ... + φ_pw_{t-p} +
            a_t - θ₁a_{t-1} - θ₂a_{t-2} - ... - θ_qa_{t-q}
    ) ∧
    assert(w_t = ∇ᵈz_t)
  } →
  
  setVar(φᵢ = 0, ∀i ∈ [1,p]) →
  setVar(d = 0) →
  
  assert(w_t = z_t) →
  assert(w_t = z_t - μ = z̃_t) →
  
  apply(MA_Definition()) →
  conclude(isARIMAModel(M))
}
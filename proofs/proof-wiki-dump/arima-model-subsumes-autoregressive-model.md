theorem ARIMA_Subsumes_AR() {
  assert(
    ∀S: StochasticProcess, M: AutoregressiveModel ⇒
    (isEquispaced(S) ∧ isModelOf(M,S)) →
    ∃ARIMA: ARIMAModel | equivalent(M,ARIMA)
  )
}

proof ARIMA_Subsumes_AR() {
  setVar(t: Time) →
  setVar(z_t: Value[t]) →
  setVar(μ: ℝ) →
  
  define(z̃_t) {
    assert(z̃_t = z_t - μ)
  } →
  
  define(AR_Model) {
    assert(
      z̃_t = ∑(i=1 to p)[φ_i × z̃_(t-i)] + a_t
    )
  } →
  
  define(ARIMA_Model) {
    assert(
      w_t = ∑(i=1 to p)[φ_i × w_(t-i)] + a_t - ∑(j=1 to q)[θ_j × a_(t-j)]
    ) ∧
    assert(w_t = ∇^d(z_t))
  } →
  
  lemma Specialization() {
    assert(∀j: θ_j = 0) ∧
    assert(d = 0) →
    assert(w_t = z_t)
  } →
  
  apply(Specialization()) →
  substitute(w_t, z_t - μ) →
  assert(
    ARIMA_Model ↔ AR_Model
  )
}
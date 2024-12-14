theorem Complex_Power_Exponential_Order() {
  assert(
    ∀f: ℝ₊ → ℂ, ∀φ ∈ ℂ, ∀ε > 0 [
      (f(t) = t^φ ∧ Re(φ) > -1) ⇒ 
      ∃M > 0, ∃T > 0, ∀t ≥ T [|f(t)| ≤ M*e^(εt)]
    ]
  )
}

proof Complex_Power_Exponential_Order() {
  setVar(f: ℝ₊ → ℂ) →
  setVar(φ ∈ ℂ) →
  setVar(ε > 0) →
  
  lemma Complex_Power_Modulus() {
    assert(
      ∀t > 0 [|t^φ| = t^Re(φ)]
    )
  } →
  
  apply(Complex_Power_Modulus()) →
  
  lemma Real_Power_Exponential_Order() {
    assert(
      ∀α > -1, ∀ε > 0, ∃M > 0, ∃T > 0, ∀t ≥ T [
        t^α ≤ M*e^(εt)
      ]
    )
  } →
  
  let(α = Re(φ)) →
  assert(α > -1) →
  apply(Real_Power_Exponential_Order()) →
  
  conclude(
    |f(t)| = |t^φ| = t^Re(φ) ≤ M*e^(εt)
  )
}
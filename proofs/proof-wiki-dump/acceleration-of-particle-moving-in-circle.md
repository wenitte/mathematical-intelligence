theorem CircularMotionAcceleration() {
  assert(
    ∀P[moving in circle C] ∧ ∀t ∈ ℝ≥0 ⇒
    acceleration(P) = -|v|²r/|r|²
    where(
      v := instantaneous_velocity(P),
      r := radius_vector(C, P)
    )
  )
} ↔

proof CircularMotionAcceleration() {
  setVars(
    r(t): ℝ³,
    R: ℝ>0,
    λ(t): ℝ,
    m: ℝ>0
  ) →
  
  assert(constraint: |r|² - R² = 0) →
  
  lemma ActionPrinciple() {
    assert(
      L = ½m|v|² ∧
      S⁺ = ∫(L + λf)dt ∧
      δS⁺ = 0
    )
  } →
  
  lemma ConstraintDerivative() {
    assert(∂f/∂r = 2r)
  } →
  
  apply(ActionPrinciple()) →
  assert(
    ∫(-d/dt(mv) + λ2r)·δr dt + ∫f δλ dt = 0
  ) →
  
  setStep(
    -d/dt(mv)·r + λ2r·r = 0
  ) →
  
  assert(λ = (ma·r)/2R²) →
  
  lemma SecondDerivativeConstraint() {
    assert(
      d²f/dt² = 2(a·r + |v|²) = 0
    )
  } →
  
  apply(SecondDerivativeConstraint()) →
  assert(λ = -m|v|²/2R²) →
  
  assert(-ma - (m|v|²/R²)r = 0) →
  conclude(a = -|v|²r/|r|²)
}
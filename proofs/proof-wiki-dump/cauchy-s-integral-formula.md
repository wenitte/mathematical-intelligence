theorem CauchyIntegralFormula() {
  let(D = {z ∈ ℂ: |z| ≤ r}) →
  let(∂D = boundary(D)) →
  assert(
    ∀f: U → ℂ [holomorphic on open set containing D] ∧
    ∀a ∈ interior(D) →
    f(a) = (1/(2πi)) ∮_∂D (f(z)/(z-a))dz
  )
} ↔

proof CauchyIntegralFormula() {
  setVar(C: closed_curve) →
  let(R = region_defined_by(C)) →
  assert(f holomorphic on R) →
  setVar(z₀ ∈ R) →
  
  lemma ContourIntegral() {
    let(Cᵣ = circle(center=z₀, radius=r)) →
    assert(r → 0) →
    let(I = ∮_C (f(z)/(z-z₀))dz) →
    assert(
      I = ∮_Cᵣ (f(z)/(z-z₀))dz [by CauchyIntegralTheorem] →
      I = ∮_Cᵣ ((f(z₀) + (f(z)-f(z₀)))/(z-z₀))dz →
      I = f(z₀)∮_Cᵣ (dz/(z-z₀)) + ∮_Cᵣ ((f(z)-f(z₀))/(z-z₀))dz
    )
  } →
  
  lemma CircleParametrization() {
    let(z-z₀ = re^(iθ)) →
    let(dz = ire^(iθ)dθ) →
    assert(
      ∮_Cᵣ (dz/(z-z₀)) = ∫₀²ᵖ (ire^(iθ)/(re^(iθ)))dθ →
      ∮_Cᵣ (dz/(z-z₀)) = 2πi
    )
  } →
  
  lemma ContinuityLimit() {
    apply(ComplexDifferentiableContinuous) →
    ∀ε>0 ∃δ∈(0,r): |z-z₀|<δ → |f(z)-f(z₀)|<ε →
    assert(
      |∮_Cᵣ ((f(z)-f(z₀))/(z-z₀))dz| ≤ 2πε →
      limₑ→₀ ∮_Cᵣ ((f(z)-f(z₀))/(z-z₀))dz = 0
    )
  } →
  
  apply(ContourIntegral) →
  apply(CircleParametrization) →
  apply(ContinuityLimit) →
  assert(∮_C (f(z)/(z-z₀))dz = 2πif(z₀))
}
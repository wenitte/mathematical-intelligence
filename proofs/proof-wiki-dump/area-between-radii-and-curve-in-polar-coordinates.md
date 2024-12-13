theorem Area_Between_Radii_Curve_Polar() {
  let(C: Curve, g: ℝ → ℝ, θ_a: ℝ, θ_b: ℝ) →
  assert(
    isPolarCurve(C) ∧
    C.equation = (r = g(θ)) ∧
    isIntegrable(g(θ)²) →
    Area(C, θ_a, θ_b) = ∫[θ_a → θ_b] (g(θ)²/2) dθ
  )
}

proof Area_Between_Radii_Curve_Polar() {
  // Consider infinitesimal triangle area
  setVar(δθ = ε: ℝ⁺) →
  setVar(ε: Infinitesimal) →
  
  lemma Triangle_Area() {
    assert(
      A_triangle = (1/2)r² * sin(δθ)
    )
  } →

  apply(Triangle_Area()) →
  substitute(δθ = ε) →
  assert(A_triangle = (1/2)r² * sin(ε)) →

  lemma Sine_Power_Series() {
    assert(
      sin(ε) = ε - ε³/3! + ε⁵/5! - O(ε⁷)
    )
  } →

  apply(Sine_Power_Series()) →
  assert(
    A_triangle = (1/2)r² * (ε - ε³/3! + ε⁵/5! - O(ε⁷))
  ) →

  lemma Infinitesimal_Properties() {
    assert(∀n>1: εⁿ = 0)
  } →

  apply(Infinitesimal_Properties()) →
  assert(A_triangle = (1/2)r² * ε) →

  // Sum over all infinitesimal triangles
  assert(
    Area(C, θ_a, θ_b) = ∫[θ_a → θ_b] (g(θ)²/2) dθ
  )
}
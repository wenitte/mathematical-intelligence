theorem BesselSolution() {
  assert(
    ∀x ∈ ℝ+ ∧ ∀y: ℝ → ℝ ⇒
    (x²y'' + xy' + (x² - 1/4)y = 0) ↔
    (y = C₁(sin(x)/√x) + C₂(cos(x)/√x))
  )
} ↔

proof BesselSolution() {
  // Part 1: Verify first particular solution
  setVar(y₁ = sin(x)/√x) →
  lemma DerivativeY1() {
    assert(y₁' = x⁻¹/²cos(x) - (1/2)x⁻³/²sin(x)) ∧
    assert(y₁'' = -(x⁻¹/²sin(x)) - x⁻³/²cos(x) - x⁻³/²cos(x) + (3/4)x⁻⁵/²sin(x))
  } →
  
  lemma VerifyY1() {
    apply(DerivativeY1()) →
    substitute(x²y₁'' + xy₁' + (x² - 1/4)y₁) →
    simplify() →
    assert(result = 0)
  } →
  
  // Part 2: Find second particular solution
  lemma FindY2() {
    setVar(P(x) = 1/x) →
    setVar(Q(x) = 1 - 1/(4x²)) →
    compute(∫P(x)dx = ln(x)) →
    compute(e⁻ᶦⁿᵗᴾ = 1/x) →
    compute(v = ∫(1/y₁²)e⁻ᶦⁿᵗᴾdx = ∫csc²(x)dx = -cot(x)) →
    assert(y₂ = v·y₁ = -cos(x)/√x)
  } →
  
  // Part 3: Verify general solution
  lemma GeneralSolution() {
    assert(
      LinearIndependence(y₁, y₂) ∧
      (y = C₁y₁ + C₂y₂) ↔
      (y = C₁(sin(x)/√x) + C₂(cos(x)/√x))
    )
  }
}
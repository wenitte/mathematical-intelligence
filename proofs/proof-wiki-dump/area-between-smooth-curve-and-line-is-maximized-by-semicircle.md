theorem Area_Maximum_Semicircle() {
  assert(
    ∀y: SmoothCurve ∧
    length(y) = l ∧
    y ∈ UpperHalfPlane(except: endpoints) ∧
    endpoints(y) ∈ x_axis ∧
    isAreaMaximizing(y) 
    ⇒ y = Semicircle()
  )
}

proof Area_Maximum_Semicircle() {
  apply(Area_Maximum_Circle_Arc()) →
  assert(y = CircleArc()) →
  
  lemma Case1() {
    assert(l/π ≤ λ < ∞) →
    setVar(y = √(λ² - x²) - √(λ² - a²)) →
    setVar(l = 2λ·arctan(a/√(λ² - a²)))
  } →
  
  lemma Area_Calculation_Case1() {
    setVar(A = ∫_{-a}^a (√(λ² - x²) - √(λ² - a²))dx) →
    assert(A = (λ/2)(l - λ·sin(l/λ)))
  } →
  
  lemma Extremum_Analysis() {
    setVar(dA/dλ = (λ/2)(l/λ + (l/λ)cos(l/λ) - 2sin(l/λ))) →
    assert(dA/dλ = 0 ⇔ l/λ = (2k + 1)π ∨ l/λ = 0) →
    assert(A(l/λ = 0) = 0) →
    assert(A(l/λ = (2k + 1)π) = l²/((1 + 2k)2π)) →
    assert(max(A) at k = 0 ⇔ l/λ = π)
  } →
  
  lemma Case2() {
    assert(l/(2π) ≤ λ < l/π) →
    setVar(A = πλ² + a√(λ² - a²) - λ²arctan(a/√(λ² - a²))) →
    assert(A = (λ/2)(l - λ·sin(l/λ)))
  } →
  
  lemma Final_Comparison() {
    assert(A(l = πλ) = l²/(2π)) →
    assert(A(l = 2πλ) = l²/(4π)) →
    assert(l²/(2π) > l²/(4π))
  } →
  
  conclude(y = Semicircle())
}
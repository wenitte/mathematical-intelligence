theorem Ellipse_Area() {
  assert(
    ∀K[Ellipse] ∧ (majorAxis=2a) ∧ (minorAxis=2b) ⇒
    area(K) = πab
  )
}

proof Ellipse_Area_Method1() {
  setVar(K: Ellipse, a: ℝ⁺, b: ℝ⁺) →
  assert(reducedForm(K) ↔ x²/a² + y²/b² = 1) →
  assert(y = ±b√(1 - x²/a²)) →
  
  lemma Area_Integral() {
    assert(area(K) = b∫[-a,a](2√(1 - x²/a²))dx)
  } →
  
  let(x = a·sin(θ)) →
  assert(dx = a·cos(θ)dθ) →
  assert(area(K) = 2ab∫[-π/2,π/2](√(1-sin²θ)cos(θ))dθ) →
  assert(√(1-sin²θ) = |cos(θ)|) →
  assert(area(K) = 2ab∫[-π/2,π/2](cos²θ)dθ) →
  
  lemma Double_Angle() {
    assert(cos²θ = (1 + cos(2θ))/2)
  } →
  
  apply(Double_Angle()) →
  assert(area(K) = ab∫[-π/2,π/2](1 + cos(2θ))dθ) →
  assert(area(K) = ab[θ + ½sin(2θ)][-π/2,π/2]) →
  assert(area(K) = ab(π + 0)) →
  assert(area(K) = πab)
}

proof Ellipse_Area_Method2() {
  setVar(K: Ellipse, a: ℝ⁺, b: ℝ⁺) →
  assert(reducedForm(K) ↔ x²/a² + y²/b² = 1) →
  
  lemma Circle_Comparison() {
    setVar(C: Circle, radius: a) →
    assert(equation(C) ↔ x² + y² = a²) →
    assert(∀x ∈ [-a,a]: y_ellipse = (b/a)·y_circle)
  } →
  
  apply(Circle_Comparison()) →
  assert(area(K) = (b/a)·area(C)) →
  assert(area(C) = πa²) →
  assert(area(K) = (b/a)·πa² = πab)
}
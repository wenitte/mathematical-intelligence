theorem Ellipse_Area() {
  assert(
    ∀K: Ellipse, ∃a,b ∈ ℝ⁺ ⇒
    (majorAxis(K) = 2a ∧ minorAxis(K) = 2b) →
    area(K) = πab
  )
}

proof Ellipse_Area() {
  setVar(K: Ellipse) →
  setVar(a,b: ℝ⁺) →
  
  assert(K.equation ↔ x²/a² + y²/b² = 1) →
  assert(y = ±b√(1 - x²/a²)) →
  
  lemma Area_Integral() {
    assert(area(K) = b∫_{-a}^a [√(1 - x²/a²) - (-√(1 - x²/a²))]dx) →
    assert(area(K) = 2b∫_{-a}^a √(1 - x²/a²)dx)
  } →
  
  apply(Area_Integral()) →
  
  letSubstitute(x = a·sin(θ)) →
  assert(dx = a·cos(θ)dθ) →
  assert(θ = arcsin(x/a)) →
  
  assert(area(K) = 2ab∫_{-π/2}^{π/2} √(1 - sin²(θ))cos(θ)dθ) →
  assert(1 - sin²(θ) = cos²(θ)) →
  assert(area(K) = 2ab∫_{-π/2}^{π/2} cos²(θ)dθ) →
  
  lemma Double_Angle() {
    assert(cos²(θ) = (1 + cos(2θ))/2)
  } →
  
  apply(Double_Angle()) →
  assert(area(K) = ab∫_{-π/2}^{π/2} (1 + cos(2θ))dθ) →
  
  assert(∫(1 + cos(2θ))dθ = θ + (1/2)sin(2θ)) →
  assert(area(K) = ab[θ + (1/2)sin(2θ)]_{-π/2}^{π/2}) →
  assert(area(K) = ab(π + 0)) →
  assert(area(K) = πab)
}
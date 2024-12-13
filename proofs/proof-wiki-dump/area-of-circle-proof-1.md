theorem Circle_Area() {
  assert(
    ∀r ∈ ℝ⁺ ⇒ Area(Circle(r)) = πr²
  )
} ↔

proof Circle_Area() {
  setVar(r: ℝ⁺) →
  setVar(x,y: ℝ) →
  
  lemma Circle_Equation() {
    assert(x² + y² = r² ↔ y = ±√(r² - x²))
  } →
  
  assert(Area = ∫_{-r}^r [√(r² - x²) - (-√(r² - x²))]dx) →
  assert(Area = ∫_{-r}^r 2√(r² - x²)dx) →
  assert(Area = ∫_{-r}^r 2r√(1 - x²/r²)dx) →
  
  lemma Substitution() {
    setVar(θ: ℝ) →
    assert(x = r·sin(θ) ∧ dx = r·cos(θ)dθ) →
    assert(-r ≤ x ≤ r ↔ -π/2 ≤ θ ≤ π/2)
  } →
  
  apply(Substitution()) →
  assert(Area = ∫_{-π/2}^{π/2} 2r²√(1 - sin²(θ))cos(θ)dθ) →
  assert(Area = ∫_{-π/2}^{π/2} 2r²√(cos²(θ))cos(θ)dθ) →
  assert(Area = r²∫_{-π/2}^{π/2} 2cos²(θ)dθ) →
  assert(Area = r²∫_{-π/2}^{π/2} (1 + cos(2θ))dθ) →
  assert(Area = r²[θ + ½sin(2θ)]_{-π/2}^{π/2}) →
  assert(Area = r²(π/2 + 0 + π/2 + 0)) →
  assert(Area = πr²)
}
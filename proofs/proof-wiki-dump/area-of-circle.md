theorem CircleArea() {
  assert(
    ∀r ∈ ℝ⁺ ⇒ Area(Circle(r)) = πr²
  )
} ↔

proof CircleArea() {
  setVar(r: ℝ⁺) →
  setVar(x,y: ℝ) →
  
  lemma CircleEquation() {
    assert(x² + y² = r² ↔ y = ±√(r² - x²))
  } →

  assert(Area = ∫_{-r}^r [√(r² - x²) - (-√(r² - x²))] dx) →
  assert(= ∫_{-r}^r 2√(r² - x²) dx) →
  assert(= ∫_{-r}^r 2r√(1 - x²/r²) dx) →

  lemma SubstitutionStep() {
    assert(
      let(θ: x = r·sin(θ)) ∧
      let(dx = r·cos(θ)·dθ) ∧
      let(bounds: -r ≤ x ≤ r)
    )
  } →

  apply(SubstitutionStep()) →
  assert(= ∫_{-π/2}^{π/2} 2r²√(1 - sin²(θ))·cos(θ) dθ) →
  assert(= ∫_{-π/2}^{π/2} 2r²√(cos²(θ))·cos(θ) dθ) →
  assert(= r²∫_{-π/2}^{π/2} 2cos²(θ) dθ) →
  assert(= r²∫_{-π/2}^{π/2} (1 + cos(2θ)) dθ) →
  assert(= r²[θ + ½·sin(2θ)]_{-π/2}^{π/2}) →
  assert(= r²(π + 0)) →
  assert(= πr²)
}

theorem CircleArea_PolarForm() {
  assert(
    ∀r ∈ ℝ⁺ ⇒ Area = ∫_0^r ∫_0^{2π} t dt dθ = πr²
  )
} ↔

proof CircleArea_PolarForm() {
  setVar(r: ℝ⁺) →
  setVar(t,θ: ℝ) →
  assert(Area = ∫_0^r ∫_0^{2π} t dt dθ) →
  assert(= ∫_0^{2π} [½t²]_0^r dθ) →
  assert(= ∫_0^{2π} ½r² dθ) →
  assert(= ½r²·2π) →
  assert(= πr²)
}
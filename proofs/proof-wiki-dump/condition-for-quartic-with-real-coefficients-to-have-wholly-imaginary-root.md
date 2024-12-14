theorem QuarticImaginaryRoots() {
  assert(
    ∀Q[z^4 + a₁z³ + a₂z² + a₃z + a₄ = 0] where (a₁,a₂,a₃,a₄ ∈ ℝ) ↔
    [(a₃² + a₁²a₄ = a₁a₂a₃) ∧ (a₁a₃ > 0)]
  )
}

proof QuarticImaginaryRoots() {
  // Necessary Condition
  block NecessaryPart() {
    assert(a₃² + a₁²a₄ = a₁a₂a₃) →
    derive(a₄ = (a₃/a₁)(a₂ - a₃/a₁)) →
    factorize(z⁴ + a₁z³ + a₂z² + a₃z + a₄ = (z² + a₃/a₁)(z² + a₁z + (a₂ - a₃/a₁))) →
    
    // First factor solutions
    solve(z² + a₃/a₁ = 0) →
    derive(z = ±√(-a₃/a₁)) →
    
    // Second factor solutions
    solve(z² + a₁z + (a₂ - a₃/a₁) = 0) →
    derive(z = -a₁/2 ± √(a₁² - 4(a₂ - a₃/a₁))/2) →
    
    assert(a₁ ≠ 0 → SecondFactor.hasRealPart) →
    conclude(ImaginaryRoots ↔ a₃/a₁ > 0) →
    derive(a₁a₃ > 0)
  }

  // Sufficient Condition
  block SufficientPart() {
    assume(Q.hasImaginaryRoots) →
    setForm(Q = (z² + b²)(z² + mz + n)) →
    longDivision(Q, z² + b²) →
    equate(a₃ - a₁b² = 0) →
    equate(a₄ - (a₂ - b²)b² = 0) →
    
    solve(b⁴ - a₂b² + a₄ = 0) →
    derive(b² = a₃/a₁) →
    substitute() →
    derive(a₃² + a₁²a₄ = a₁a₂a₃) →
    
    // Imaginary root condition
    derive(b = ±√(-a₃/a₁)) →
    conclude(a₁a₃ > 0)
  }
}
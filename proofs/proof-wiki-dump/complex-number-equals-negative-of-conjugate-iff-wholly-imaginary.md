theorem ComplexNumberEqualsNegativeConjugateIffWhollyImaginary() {
  assert(
    ∀z ∈ ℂ, (z̄ = -z) ↔ (z = bi, b ∈ ℝ)
  )
}

proof ComplexNumberEqualsNegativeConjugateIffWhollyImaginary() {
  // Forward direction
  setVar(z: ℂ) →
  letExpr(z = x + yi, x,y ∈ ℝ) →
  assume(z̄ = -z) →
  
  assert(x - yi = -(x + yi)) →
  assert(x - yi = -x - yi) →
  equate(x = -x) →
  conclude(x = 0) →
  
  conclude(z = yi) →
  conclude(z is wholly imaginary) →

  // Reverse direction
  assume(z is wholly imaginary) →
  letExpr(z = yi, y ∈ ℝ) →
  
  assert(z̄ = -yi) →
  assert(-yi = -(0 + yi)) →
  assert(-yi = -z) →
  
  conclude(z̄ = -z) →
  
  // Combine both directions
  conclude((z̄ = -z) ↔ (z is wholly imaginary))
}
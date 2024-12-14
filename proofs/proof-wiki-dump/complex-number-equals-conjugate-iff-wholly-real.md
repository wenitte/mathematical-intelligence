theorem Complex_Equals_Conjugate_Real() {
  assert(
    ∀z ∈ ℂ: (z = z̄ ↔ z ∈ ℝ)
  )
}

proof Complex_Equals_Conjugate_Real() {
  // Forward direction
  setVar(z ∈ ℂ, x ∈ ℝ, y ∈ ℝ) →
  assume(z = x + iy) →
  assert(z̄ = x - iy) by def(complex_conjugate) →
  
  assume(z = z̄) →
  assert(x + iy = x - iy) →
  assert(iy = -iy) by algebra →
  assert(2iy = 0) by algebra →
  assert(y = 0) by algebra →
  assert(z = x + 0i) →
  assert(z = x) →
  assert(z ∈ ℝ) by def(real_number)

  // Reverse direction
  assume(z ∈ ℝ) →
  assert(∃x ∈ ℝ: z = x) by def(real_number) →
  assert(z = x + 0i) →
  assert(z̄ = x - 0i) by def(complex_conjugate) →
  assert(z̄ = x) →
  assert(z = z̄)

  conclude(z = z̄ ↔ z ∈ ℝ)
}
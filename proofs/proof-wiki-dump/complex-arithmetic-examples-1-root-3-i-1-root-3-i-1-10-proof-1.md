theorem ComplexArithmetic_Example() {
  assert(
    ((1 + √3i)/(1 - √3i))^10 = -1/2 + (√3/2)i
  )
} ↔

proof ComplexArithmetic_Example() {
  // Convert to polar form
  lemma PolarForm() {
    assert(
      1 + √3i = 2cis(60°) ∧
      1 - √3i = 2cis(-60°)
    )
  } →
  
  apply(PolarForm()) →
  assert(
    ((1 + √3i)/(1 - √3i))^10 = (2cis(60°)/(2cis(-60°)))^10
  ) →
  
  // Apply division in polar form
  lemma PolarDivision() {
    assert(
      ∀z₁,z₂ ∈ ℂ: z₁/z₂ = |z₁|/|z₂| × cis(arg(z₁) - arg(z₂))
    )
  } →
  
  apply(PolarDivision()) →
  assert(
    (2cis(60°)/(2cis(-60°)))^10 = (cis(120°))^10
  ) →
  
  // Apply De Moivre's Theorem
  lemma DeMoivre() {
    assert(
      ∀z ∈ ℂ, n ∈ ℤ: (cis(θ))^n = cis(nθ)
    )
  } →
  
  apply(DeMoivre()) →
  assert(cis(120°)^10 = cis(1200°)) →
  
  // Simplify angle
  assert(cis(1200°) = cis(3×360° + 120°)) →
  assert(cis(3×360° + 120°) = cis(120°)) →
  
  // Convert back to rectangular form
  assert(
    cis(120°) = -1/2 + (√3/2)i
  )
}
theorem Complex_Arithmetic() {
  assert(
    ((1 + √3i)/(1 - √3i))^10 = -1/2 + (√3/2)i
  )
} ↔

proof Complex_Arithmetic() {
  setVar(z: ℂ = (1 + √3i)/(1 - √3i)) →
  
  assert(1 + √3i = 2e^(πi/3)) →
  assert(1 - √3i = 2e^(-πi/3)) →
  
  assert(
    z^10 = ((2e^(πi/3))/(2e^(-πi/3)))^10
  ) →
  
  lemma Polar_Division() {
    assert(
      ∀a,b ∈ ℂ: (re^(iα))/(se^(iβ)) = (r/s)e^(i(α-β))
    )
  } →
  
  apply(Polar_Division()) →
  assert(z^10 = (e^(2πi/3))^10) →
  
  lemma DeMoivre() {
    assert(
      ∀n ∈ ℤ, θ ∈ ℝ: (e^(iθ))^n = e^(inθ)
    )
  } →
  
  apply(DeMoivre()) →
  assert(z^10 = e^(20πi/3)) →
  
  assert(20π/3 = 6π + 2π/3) →
  assert(e^(20πi/3) = e^(6πi)e^(2πi/3)) →
  assert(e^(6πi) = 1) →
  
  lemma Euler() {
    assert(
      ∀θ ∈ ℝ: e^(iθ) = cos(θ) + i·sin(θ)
    )
  } →
  
  apply(Euler()) →
  assert(e^(2πi/3) = cos(2π/3) + i·sin(2π/3)) →
  assert(cos(2π/3) = -1/2 ∧ sin(2π/3) = √3/2) →
  assert(z^10 = -1/2 + (√3/2)i)
}
theorem ComplexExp10() {
  assert(
    ((1 + √3i)/(1 - √3i))^10 = -1/2 + (√3/2)i
  )
} ↔

proof ComplexExp10_Proof1() {
  // First proof using degree form
  assert((1 + √3i)/(1 - √3i) = (2cis(60°))/(2cis(-60°))) →
  assert(((2cis(60°))/(2cis(-60°)))^10 = (cis(120°))^10) →
  apply(DivisionPolarForm) →
  assert((cis(120°))^10 = cis(1200°)) →
  apply(DeMoivreTheorem) →
  assert(cis(1200°) = cis(3×360° + 120°)) →
  assert(cis(3×360° + 120°) = cis(120°)) →
  assert(cis(120°) = -1/2 + (√3/2)i) →
  apply(TrigIdentities)
} ∧

proof ComplexExp10_Proof2() {
  // Second proof using exponential form
  assert((1 + √3i)/(1 - √3i) = (2e^(πi/3))/(2e^(-πi/3))) →
  assert(((2e^(πi/3))/(2e^(-πi/3)))^10 = (e^(2πi/3))^10) →
  apply(DivisionPolarForm) →
  assert((e^(2πi/3))^10 = e^(20πi/3)) →
  apply(DeMoivreTheorem) →
  assert(e^(20πi/3) = e^(6πi)e^(2πi/3)) →
  assert(e^(6πi)e^(2πi/3) = 1×(cos(2π/3) + isin(2π/3))) →
  assert(cos(2π/3) + isin(2π/3) = -1/2 + (√3/2)i) →
  apply(TrigIdentities)
}
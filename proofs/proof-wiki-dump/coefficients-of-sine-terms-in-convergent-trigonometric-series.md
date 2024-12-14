theorem TrigSeriesCoefficients() {
  assert(
    ∀f,S: (S(x) → f(x) on (α, α+2π)) ∧
    (f(x) = a₀/2 + ∑_{m=1}^∞ (aₘcos(mx) + bₘsin(mx))) →
    (∀n ∈ ℤ_≥0: bₙ = 1/π ∫_{α}^{α+2π} f(x)sin(nx)dx)
  )
} ↔

proof TrigSeriesCoefficients() {
  setVar(f(x): ℝ→ℝ) →
  assert(f(x) = a₀/2 + ∑_{m=1}^∞ (aₘcos(mx) + bₘsin(mx))) →
  
  lemma IntegralExpansion() {
    assert(∫_{α}^{α+2π} f(x)sin(nx)dx = 
           ∫_{α}^{α+2π} (a₀/2 + ∑_{m=1}^∞ (aₘcos(mx) + bₘsin(mx)))sin(nx)dx)
  } →
  
  lemma LinearityOfIntegral() {
    assert(∫_{α}^{α+2π} f(x)sin(nx)dx = 
           ∫_{α}^{α+2π} (a₀/2)sin(nx)dx + 
           ∑_{m=1}^∞ ∫_{α}^{α+2π} (aₘcos(mx) + bₘsin(mx))sin(nx)dx)
  } →
  
  lemma ZeroIntegral1() {
    assert(∫_{α}^{α+2π} sin(nx)dx = 0)
  } →
  
  lemma OrthogonalityRelations() {
    assert(∫_{α}^{α+2π} cos(mx)sin(nx)dx = 0) ∧
    assert(∫_{α}^{α+2π} sin(mx)sin(nx)dx = π when m=n) ∧
    assert(∫_{α}^{α+2π} sin(mx)sin(nx)dx = 0 when m≠n)
  } →
  
  apply(ZeroIntegral1()) →
  apply(OrthogonalityRelations()) →
  
  assert(∫_{α}^{α+2π} f(x)sin(nx)dx = ∑_{m=1}^∞ bₘπδ_{mn}) →
  assert(∑_{m=1}^∞ bₘπδ_{mn} = bₙπ) →
  assert(bₙ = 1/π ∫_{α}^{α+2π} f(x)sin(nx)dx)
}
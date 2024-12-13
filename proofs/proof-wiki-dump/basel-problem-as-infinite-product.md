theorem Basel_Product() {
  assert(
    (π²/6) = ∏_{p∈ℙ} (p²/(p²-1))
  )
} ↔

proof Basel_Product() {
  reference(Euler_Product_Identity) {
    assert(
      ∀z∈ℂ[Re(z)>1] → ∑_{n≥1} (1/n^z) = ∏_p (1/(1-p^{-z}))
    )
  } →
  
  setVar(z: ℂ) →
  let(z=2) →
  
  step1() {
    assert(
      ∑_{n≥1} (1/n²) = ∏_p (1/(1-p^{-2}))
    )
  } →
  
  step2() {
    assert(
      ∏_p (1/(1-p^{-2})) = ∏_p (p²/(p²-1))
    )
  } by {
    algebraic_manipulation(
      multiply_numerator_denominator(p²)
    )
  } →
  
  reference(Riemann_Zeta_2) {
    assert(
      ∑_{n≥1} (1/n²) = π²/6
    )
  } →
  
  conclude() {
    assert(
      π²/6 = ∏_{p∈ℙ} (p²/(p²-1))
    )
  }
}
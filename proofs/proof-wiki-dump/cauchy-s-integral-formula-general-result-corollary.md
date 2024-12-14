theorem CauchyIntegralFormula_GeneratingFunction() {
  let G: ℂ → ℂ;
  let {aₙ: n ∈ ℕ} be_sequence;
  let z₀, r ∈ ℂ;
  
  assume(
    G.isGeneratingFunction({aₙ}) ∧
    G.isConvergent(z₀) ∧
    0 < r < |z₀|
  ) →
  
  assert(
    [zⁿ]G(z) = 1/(2πi) ∮_{|z|=r} (G(z)dz)/(z^(n+1))
  )
} ↔

proof CauchyIntegralFormula_GeneratingFunction() {
  setVar([zⁿ]G(z)) →
  
  step1: {
    assert(
      [zⁿ]G(z) = (1/n!)G^(n)(0)
    )
  } →
  
  lemma DerivativeGeneratingFunction() {
    assert(
      ∀n∈ℕ: [zⁿ]G(z) = (1/n!)G^(n)(0)
    )
  } →
  
  step2: {
    apply(CauchyIntegralFormula) →
    assert(
      (1/n!)G^(n)(0) = (1/n!)((n!)/(2πi) ∫_{∂D} G(z)/(z^(n+1)) dz)
    )
  } →
  
  step3: {
    simplify() →
    assert(
      = 1/(2πi) ∮_{|z|=r} (G(z)dz)/(z^(n+1))
    )
  } →
  
  conclude()
}
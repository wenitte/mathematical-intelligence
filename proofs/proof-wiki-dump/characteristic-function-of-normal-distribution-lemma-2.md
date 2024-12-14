theorem CharFuncNormalDist_Lemma2() {
  assert(
    lim[α→∞] ∫[(-α-μ)/(√2σ) - i(tσ/√2)]^[(α-μ)/(√2σ) - i(tσ/√2)] e^(-z²) dz = √(2πσ²)
  )
} ↔

proof CharFuncNormalDist_Lemma2() {
  setVar(Γ: ContourRect ∈ ℂ) →
  setVar(c₁ = (-α-μ)/(√2σ) - i(tσ/√2)) →
  setVar(c₂ = (α-μ)/(√2σ) - i(tσ/√2)) →
  setVar(c₃ = (α-μ)/(√2σ)) →
  setVar(c₄ = (-α-μ)/(√2σ)) →
  
  lemma CauchyIntegral() {
    assert(e^(-z²) is holomorphic in Γ) →
    assert(∮[z∈Γ] e^(-z²) dz = ∫[c₁]^[c₂] + ∫[c₂]^[c₃] + ∫[c₃]^[c₄] + ∫[c₄]^[c₁] = 0)
  } →

  lemma IntegralC3C4() {
    assert(lim[α→∞] ∫[c₃]^[c₄] e^(-z²) dz = -√(2πσ²))
  } →

  lemma IntegralC2C3() {
    assert(|lim[α→∞] ∫[c₂]^[c₃] e^(-z²) dz| ≤ lim[α→∞] |e^(-(α-μ)²/2σ²)| ∫[c₂]^[c₃] dz = 0)
  } →

  lemma IntegralC4C1() {
    assert(lim[α→∞] ∫[c₄]^[c₁] e^(-z²) dz = 0)
  } →

  apply(CauchyIntegral()) →
  apply(IntegralC3C4()) →
  apply(IntegralC2C3()) →
  apply(IntegralC4C1()) →
  
  assert(∫[c₁]^[c₂] e^(-z²) dz = √(2πσ²))
}
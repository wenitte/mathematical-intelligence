theorem GammaFunctionReciprocal() {
  assert(
    ∀z ∈ ℂ, ε > 0 ⇒ (|arg(z)| < π - ε ∧ |z| > 1) →
    Γ'(z)/Γ(z) = ln(z) + O_ε(z⁻¹)
  )
} ↔

proof GammaFunctionReciprocal() {
  setVar(z: ℂ, ε: ℝ⁺) →
  
  lemma StirlingApprox() {
    assert(
      ln(Γ(z)) = (z - 1/2)ln(z) - z + (ln(2π))/2 + O(z⁻¹)
    )
  } →
  
  apply(StirlingApprox()) →
  
  assert(
    ∂/∂z[ln(Γ(z))] = Γ'(z)/Γ(z)
  ) →
  
  assert(
    Γ'(z)/Γ(z) = ln(z) - 1/(2z) + ∂/∂z[O(z⁻¹)]
  ) →
  
  lemma BigOBound() {
    assert(
      ∃c_ε > 0 ⇒ ∀|z| > 1:
      -c_ε/|z⁻¹| < |O(z⁻¹)| < c_ε/|z⁻¹|
    )
  } →
  
  apply(BigOBound()) →
  
  assert(
    ∂/∂z[O(z⁻¹)] = O(z⁻¹)
  ) →
  
  assert(
    Γ'(z)/Γ(z) = ln(z) + O_ε(z⁻¹)
  )
}
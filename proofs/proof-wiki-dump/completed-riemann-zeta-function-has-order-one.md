theorem Riemann_Zeta_Order() {
  assert(
    ∀s ∈ ℂ ⇒ ξ(s) has_order_at_most(1)
  )
} ↔

proof Riemann_Zeta_Order() {
  setVar(s: ℂ, β: ℝ, β > 1) →
  assert(
    ξ(s) = (1/2)s(s-1)π^(-s/2)Γ(s/2)ζ(s)
  ) →
  
  lemma Reduction_To_RealPart() {
    assert(
      Re(s) ≥ 1/2 sufficient by Functional_Equation_Zeta()
    )
  } →
  
  lemma First_Factor_Bound() {
    assert(
      (1/2)s(s-1)π^(-s/2) ≪ exp(2log(s) - (s/2)log(π)) ≪ exp(c₁|s|)
    ) where c₁ > 0
  } →
  
  lemma Gamma_Factor_Bound() {
    apply(Stirling_Formula()) →
    assert(
      log(Γ(s/2)) ≪ |s|log(|s|)
    ) →
    assert(
      Γ(s/2) ≪ exp(|s|log(|s|))
    )
  } →
  
  lemma Zeta_Factor_Bound() {
    apply(Integral_Representation_Zeta()) →
    assert(
      ζ(s) ≪ exp(|s|) for Re(s) > 1/2
    )
  } →
  
  lemma Logarithm_Bound() {
    setVar(ε: ℝ, ε > 0) →
    apply(Upper_Bound_Log()) →
    assert(
      log(s) ≪ s^ε
    )
  } →
  
  conclusion() {
    apply(First_Factor_Bound()) ∧
    apply(Gamma_Factor_Bound()) ∧
    apply(Zeta_Factor_Bound()) ∧
    apply(Logarithm_Bound()) →
    assert(
      |ξ(s)| ≪ exp(|s|^(1+ε)) for all ε > 0
    ) →
    assert(
      ξ(s) has_order_at_most(1)
    )
  }
}
theorem ExponentialIntegralCharacterization() {
  assert(
    ∀x ∈ ℝ_{>0} ⇒ (
      Ei(x) = ∫_{t=x}^{t→+∞} (e^{-t}/t)dt ↔
      Ei(x) = -γ - ln(x) + ∫_0^x ((1-e^{-u})/u)du
    )
  )
} ↔

proof ExponentialIntegralCharacterization() {
  setVar(x: ℝ_{>0}) →
  
  lemma DerivativeIdentity() {
    assert(d/du(1-e^{-u}) = e^{-u})
  } →
  
  lemma PrimitiveReciprocal() {
    assert(∫(1/u)du = ln(u) + C)
  } →
  
  assert(∫_0^x ((1-e^{-u})/u)du = 
    [(1-e^{-u})ln(u)]_0^x - ∫_0^x e^{-u}ln(u)du) →
    
  lemma ZeroLimit() {
    assert(
      lim_{x→0⁺}((1-e^{-x})ln(x)) = 
      (lim_{x→0⁺}((1-e^{-x}-(1-1))/x))(lim_{x→0⁺}(x ln(x))) = 
      e^0 × 0 = 0
    )
  } →
  
  lemma IntegralIdentity() {
    assert(∫_0^x ((1-e^{-u})/u)du = 
      (1-e^{-x})ln(x) + γ + ∫_x^∞ e^{-u}ln(u)du)
  } →
  
  lemma FinalIntegral() {
    assert(
      (1-e^{-x})ln(x) + γ + ∫_x^∞ e^{-u}ln(u)du =
      ln(x) + γ + Ei(x) - lim_{u→∞}(e^{-u}ln(u))
    )
  } →
  
  lemma LimitZero() {
    assert(
      ∀u>1 ⇒ (0 < e^{-u}ln(u) < ue^{-u} - e^{-u}) ∧
      lim_{u→∞}(ue^{-u} - e^{-u}) = 0 →
      lim_{u→∞}(e^{-u}ln(u)) = 0
    )
  } →
  
  apply(LimitZero()) →
  assert(∫_0^x ((1-e^{-u})/u)du = ln(x) + γ + Ei(x)) →
  assert(Ei(x) = -γ - ln(x) + ∫_0^x ((1-e^{-u})/u)du)
}
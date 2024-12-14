theorem CauchyIntegralFormula_General() {
  setContext(D = {z ∈ ℂ: |z| ≤ r}, r ∈ ℝ⁺) →
  assume(f: U → ℂ, holomorphic(f, U)) →
  assume(D ⊆ U) →
  assert(
    ∀n ∈ ℕ, ∀a ∈ interior(D) ⇒
    f⁽ⁿ⁾(a) = (n!/(2πi)) ∮_∂D (f(z)/(z-a)ⁿ⁺¹) dz
  )
} ↔

proof CauchyIntegralFormula_General() {
  setVar(n ∈ ℕ) →
  letProp(P(k) := f⁽ᵏ⁾(a) = (k!/(2πi)) ∮_∂D (f(z)/(z-a)ᵏ⁺¹) dz) →
  
  # Base case
  assert(P(0) ↔ f(a) = (1/(2πi)) ∮_∂D (f(z)/(z-a)) dz) →
  apply(CauchyIntegralFormula_Basic()) →
  
  # Inductive step
  assume(P(k), k ≥ 0) →
  
  lemma DerivativeUnderIntegral() {
    assert(
      ∀z ∈ ∂D, |((k+1)f(z))/(z-α)ᵏ⁺²| = ((k+1)|f(z)|)/rᵏ⁺² ∧
      sup{|f(z)|: z ∈ ∂D} < ∞
    )
  } →
  
  assert(
    d/da[f⁽ᵏ⁾(a)] = 
    (k!/(2πi)) ∮_∂D (d/da[f(z)/(z-a)ᵏ⁺¹]) dz →
    (k!/(2πi)) ∮_∂D ((k+1)f(z)/(z-a)ᵏ⁺²) dz →
    ((k+1)!/(2πi)) ∮_∂D (f(z)/(z-a)ᵏ⁺²) dz
  ) →
  
  conclude(P(k) ⟹ P(k+1)) →
  apply(MathematicalInduction()) →
  
  conclude(∀n ∈ ℕ: P(n))
}